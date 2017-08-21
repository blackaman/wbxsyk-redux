import queryString from './query-string';

const authorization = () => {
  const uid = window.localStorage.getItem('uid');
  const clientId = 2551552862;
  const redirectUrl = 'http://test.weibo.xsyk.cccwei.com';
  const code = queryString('code');
  if (!uid && !code) {
    window.location = `https://api.weibo.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}`;
  }
};
export default authorization;
