import * as auth from './auth';
import { replaceAll, toDate } from '../utils';

const doFileUpload = async ({
  key,
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
    key: key,
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

const uploadFile = async ({ fileObj, destination, keys }) => {
  const { region, isPublic, bucket, prefix } = destination;
  const { accessKey, secretKey } = keys;

  const acl = isPublic ? 'public-read' : 'private';

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const expiryDate = toDate(tomorrow, false);

  const credentials = auth.getCredentials({ region, accessKey, expiryDate });
  const policy = auth.generatePolicy({
    bucket,
    credentials,
    expiryDate,
    prefix,
  });

  const signature = auth.getS3UploadSignature({
    region,
    policy,
    secretKey,
    expiryDate,
  });
  await doFileUpload({
    key: `${prefix}${fileObj.path}`,
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
