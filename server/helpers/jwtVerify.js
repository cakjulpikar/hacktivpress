var jwt = require('jsonwebtoken')

var jwtVerify = function (req,res,next) {
  jwt.verify(req.headers.token, 'manintheironmask', function (err,decoded) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      console.log("Decoded");
      req.decoded = decoded
      console.log(req.decoded);
      next()
    }
  })
}

module.exports = jwtVerify;
