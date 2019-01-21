import 'whatwg-fetch';

/**
 * Returns a listing of direct deposits for specific employee within a tenant
 * @param {string} url: The URL to hit
 * @param {string} method: The http method to use (GET, POST, etc)
 * @param {headers}: any headers to send with the request
 * @param {body}: payload to send across the wire
 * @returns {Promise}: The response of an http request as a promise
 */
export default async function request({
  url, method = 'GET', headers = {}, body,
}) {
  if (!url) {
    throw new Error('Missing a URL to fetch.');
  }

  const response = await fetch(url,
    {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

  if (response.status >= 400) {
    throw response;
  }

  const text = await response.text();
  return text ? JSON.parse(text) : undefined;
}
