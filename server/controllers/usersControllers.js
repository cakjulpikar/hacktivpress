var usersModel = require('../models/users')
var hash = require('object-hash')
var jwt = require('jsonwebtoken')

var signup = function (req,res) {
  usersModel.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: hash(req.body.password)
  }, function (err,result) {
    if (err) {
      res.send({'err' : `{err}`})
    } else {
      res.send(result)
    }
  })
}

var signin = function (req,res) {
  usersModel.findOne({
    $or: [{
      username : req.body.identity
    },{
      email : req.body.identity
    }]
  }, function (err,result) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      if (result.length == 0) {
        res.send({msg: `Username or password ${req.body.identity} not found`})
      } else {
        if (hash(req.body.password) == req.body.password ) {
          res.send({token: jwt.sign({_id : result._id}, proccess.env.JWT_SECRET)})
        } else {
          res.send({msg: `Password not match for ${req.body.identity}`})
        }
      }
    }
  })
}

module.exports = {
  signin,
  signup
};
