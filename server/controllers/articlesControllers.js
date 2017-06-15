var articleModel = require('../models/articles')

var postArticle = function (req,res) {
  articleModel.create({
    title: req.body.title.
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



module.exports = {
  postArticle
};
