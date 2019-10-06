import * as auth from './auth';
import { replaceAll } from '../utils';

const doFileUpload = async ({
  fileObj,
  bucket,
  policy,
  credentials,
  signature,
  expiryDate,
  acl,
}) => {
  const API_URL = `https://${bucket}.s3.amazonaws.com`;

  const payload = {
    acl,
    key: fileObj.path,
    'Content-Type': fileObj.type,

    'x-amz-server-side-encryption': 'AES256',
    'x-amz-credential': credentials,
    'x-amz-algorithm': 'AWS4-HMAC-SHA256',
    'x-amz-date': `${replaceAll(expiryDate, '-', '')}T060000Z`,
    Policy: policy,
    'x-amz-signature': signature,
    file: fileObj,
  };
  const formData = new FormData();

  for (const key in payload) {
    formData.append(key, payload[key]);
  }

  return fetch(`${API_URL}`, {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body: formData,
  });
};

const uploadFile = async ({ fileObj, isPublic = false }) => {
  // TODO: Dummy values
  const region = 'eu-central-1';
  const bucket = '...';
  const accessKey = '...';
  const secretKey = '...';
  const acl = isPublic ? 'public-read' : 'private';

  const expiryDate = '2019-12-29';
  const credentials = auth.getCredentials({ region, accessKey, expiryDate });
  const policy = auth.generatePolicy({
    bucket,
    credentials,
    expiryDate,
  });

  // TODO: Got to extract this signature generation to a secure server,
  // or require user to input themselves.
  const signature = auth.getS3UploadSignature({
    region,
    policy,
    secretKey,
    expiryDate,
  });
  await doFileUpload({
    fileObj,
    bucket,
    policy,
    acl,
    credentials,
    signature,
    expiryDate,
  });
};

export { uploadFile };
