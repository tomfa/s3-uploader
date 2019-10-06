import * as utils from '../utils';
import crypto from 'crypto';
import { replaceAll } from '../utils';
import { toDate } from '../utils';

function hmac(key, string, encoding) {
  return crypto
    .createHmac('sha256', key)
    .update(string, 'utf8')
    .digest(encoding);
}

const getCredentials = ({ region, accessKey, expiryDate }) =>
  `${accessKey}/${replaceAll(expiryDate, '-', '')}/${region}/s3/aws4_request`;

const generatePolicy = ({
  bucket,
  credentials,
  expiryDate,
  filePrefix = '',
  designatedId = null,
}) => {
  const conditions = [
    { bucket: bucket },
    ['starts-with', '$key', filePrefix],
    ['starts-with', '$content-type', filePrefix],
    ['starts-with', '$acl', ''],
    { 'x-amz-server-side-encryption': 'AES256' },
    { 'x-amz-credential': credentials },

    { 'x-amz-algorithm': 'AWS4-HMAC-SHA256' },
    {
      'x-amz-date': `${replaceAll(expiryDate, /[-.:]/, '')}T060000Z`,
    },
  ];
  if (designatedId !== null)
    conditions.push({ 'x-amz-meta-uuid': designatedId });
  const policy = {
    expiration: `${expiryDate}T12:00:00.000Z`,
    conditions: conditions,
  };
  return utils.encodeJSONtob64(policy);
};

const createSignature = ({
  secretKey,
  time,
  region,
  service,
  stringToSign,
}) => {
  const h1 = hmac('AWS4' + secretKey, toDate(time)); // date-key
  const h2 = hmac(h1, region); // region-key
  const h3 = hmac(h2, service); // service-key
  const h4 = hmac(h3, 'aws4_request'); // signing-key
  return hmac(h4, stringToSign, 'hex');
};

const getS3UploadSignature = ({ region, policy, secretKey, expiryDate }) => {
  return createSignature({
    secretKey,
    time: new Date(expiryDate),
    stringToSign: policy,
    service: 's3',
    region,
  });
};

export { getS3UploadSignature, generatePolicy, getCredentials };
