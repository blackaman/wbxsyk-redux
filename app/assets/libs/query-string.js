const queryString = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const r = window.location.search.substr(1).match(reg);
  let rs = '';
  if (r !== null) {
    rs = unescape(r[2]);
  } else {
    rs = null;
  }
  return rs;
};

export default queryString;
