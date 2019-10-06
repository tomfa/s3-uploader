const decodeJSONfromb64 = base64String =>
  JSON.parse(Buffer.from(base64String, 'base64').toString());

const encodeJSONtob64 = data =>
  Buffer.from(JSON.stringify(data)).toString('base64');

const replaceAll = (str, search, replacement) =>
  str.split(search).join(replacement);

function toTime(time) {
  return new Date(time).toISOString().replace(/[:-]|\.\d{3}/g, '');
}

function toDate(time) {
  return toTime(time).substring(0, 8);
}

export { decodeJSONfromb64, encodeJSONtob64, replaceAll, toDate, toTime };
