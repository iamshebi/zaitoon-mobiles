const { json, authed, configured, ENV } = require('./_lib');
module.exports = async (req, res) => {
  const c = configured();
  json(res, 200, { authed: authed(req), setup: c, email: authed(req) ? ENV().email : null });
};
