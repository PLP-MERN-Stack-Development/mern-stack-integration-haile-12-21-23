const jwt = require('jsonwebtoken');
const User = require('../models/User.js');



module.exports = function (req, res, next) {
  const auth = req.header('Authorization');

  if (!auth) {
    return res.status(401).json({ error: 'Access denied. No Authorization header' });
  }

  // ✅ Correctly split the token
  const token = auth.split(' ')[1];


  if (!token) {
    return res.status(401).json({ error: 'Invalid token format' });
  }


  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach decoded payload to request
    req.user = payload;

    next();
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};
