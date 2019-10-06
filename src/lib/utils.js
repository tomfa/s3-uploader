const decodeJSONfromb64 = base64String =>
  JSON.parse(Buffer.from(base64String, 'base64').toString());

const encodeJSONtob64 = data =>
  Buffer.from(JSON.stringify(data)).toString('base64');

const replaceAll = (str, search, replacement) =>
  str.split(search).join(replacement);

function toTime(time) {
  return new Date(time).toISOString().replace(/[:-]|\.\d{3}/g, '');
}

function toDate(time, stripDash = true) {
  if (!stripDash) {
    return new Date(time).toISOString().substring(0, 10);
  }
  return toTime(time).substring(0, 8);
}

const getQueryParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const keys = urlParams.keys();
  const params = {};
  for (const key of keys) {
    params[key] = urlParams.get(key);
  }
  return params;
};

export {
  decodeJSONfromb64,
  encodeJSONtob64,
  replaceAll,
  toDate,
  toTime,
  getQueryParams,
};
