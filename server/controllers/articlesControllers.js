var articleModel = require('../models/articles')
var ObjectId = require('mongoose').ObjectId

var postArticle = function (req,res) {
  articleModel.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author : req.decoded._id
  }, function (err,result) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      res.send(result)
    }
  })
}

var updateArticle = function (req,res) {
  articleModel.findOne({
    _id: ObjectId(req.params.id),
    author: req.decoded._id
  }, function (err,result) {
    if (err) {
      res.send({err: `${err}`})
    } else {
      result.title = result.title || req.body.title
      result.content = result.content || req.body.content
      result.category = result.category || req.body.category
      result.save(function (err,updated) {
        if (err) {
          res.send({'err' : `${err}`})
        } else {
          res.send({msg: `Patch article ${req.params.id} success`})
        }
      })
    }
  })
}

var deleteArticle = function (req,res) {
  console.log("Masuk Delete");
  articleModel.delete({
    _id: ObjectId(req.params.id),
    author: req.decoded._id
  }, function (err) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      res.send({msg: `Delete article ${req.params.id} success`})
    }
  })
}

var getArticles = function (req,res) {
  articleModel.find({}, function (err,result) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      res.send(result)
    }
  })
}

var getArticle = function (req,res) {
  articleModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err,result) {
    if (err) {
      res.send({'err' : `${err}`})
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  postArticle,
  updateArticle,
  deleteArticle,
  getArticles,
  getArticle
};
