var jwt = require('jsonwebtoken')

var jwtVerify = function (req,res,next) {
  jwt.verify(req.headers.token, proccess.env.JWT_SECRET, function (err,decoded) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      req.decoded = decoded
      next()
    }
  })
}

module.exports = jwtVerify;
