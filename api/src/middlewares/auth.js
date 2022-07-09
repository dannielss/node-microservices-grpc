const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'supersecret');

    const { id } = data;

    req.userId = id;

    return next();
  } catch(err) {
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;
