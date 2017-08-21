import 'whatwg-fetch';
import { apiHost, clientId, redirectUrl, oauthUrl } from '../../conf/conf.json';

const defaultHeaders = localStorage.getItem('uid') || '';
const recombine = (obj = {}) => {
  let ps = '';
  if (obj) {
    ps += Object.keys(obj).map((key) => `${key}=${obj[key]}`);
  }
  ps = ps.split(',');
  ps = ps.join('&');
  return ps;
};

const urlFor = (path, params = {}) => {
  const ps = recombine(params);
  return `${apiHost}/${path}?${ps}`;
};

const request = () => ({
  get(path, data) {
    const promise = new Promise((resolve, reject) => {
      fetch(urlFor(path, data), {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          uid: defaultHeaders
        }
      }).then((response) => {
        if (response.status === 403) {
          window.localStorage.removeItem('uid');
          window.location = `${oauthUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}`;
        } else {
          resolve(response.json());
        }
      }, (response) => {
        reject(response);
      });
    });
    return promise;
  },
  post(path, data) {
    const promise = new Promise((resolve, reject) => {
      fetch(urlFor(path), {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded',
          uid: defaultHeaders
        },
        body: recombine(data) || {}
      }).then((response) => {
        if (response.status === 403) {
          window.localStorage.removeItem('uid');
          window.location = `${oauthUrl}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}`;
        } else {
          resolve(response.json());
        }
      }, (response) => {
        reject(response);
      });
    });
    return promise;
  }
});

module.exports = request();
