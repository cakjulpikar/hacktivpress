var articleModel = require('../models/articles')
var ObjectId = require('mongodb').ObjectId;

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
      result.title = req.body.title || result.title
      result.content = req.body.content || result.content
      result.category = req.body.category || result.category
      result.save(function (err,updated) {
        if (err) {
          res.send({'err' : `${err}`})
        } else {
          res.send(updated)
        }
      })
    }
  })
}

var deleteArticle = function (req,res) {
  console.log("Masuk Delete");
  console.log(req.decoded._id);
  articleModel.deleteOne({
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
  console.log("Masuk Get Article");
  console.log(req.params.id);
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
