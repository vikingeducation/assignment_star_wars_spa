export default url => {
  url = url.split("/");
  return url.slice(-1)[0] ? url.slice(-1)[0] : url.slice(-2, -1)[0];
};
