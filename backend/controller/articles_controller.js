const express = require('express')
const article = express.Router()
const Article = require('../models/article.js')


article.get('/', (req, res) => {
  Article.find()
    .then(foundArticle => {
      res.send(foundArticle)
    })
    .catch(err => {
      res.render('error404')
    })
})

//GET POST
// article.get("/:id", async (req, res) => {
//   try {
//     const post = await Article.findById(req.params.id);
//     res.status(200).json(post)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

article.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(foundArticle => {
      res.send(foundArticle)

    })
    .catch(err => {
      res.render('error404')
    })
})

//CREATE NEW ARTICLE
article.post('/', (req, res) => {
  Article.create(req.body)
    .then(foundArticle => {
      res.send(foundArticle)
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//DELETE ARTICLE
article.delete('/:id', (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(deletedArticle => {
      res.status(303).redirect('/article')
    })
    .catch(err => {
      res.render('Delete unsuccessful')
    })
})


//EDIT/UPDATE ARTICLE
article.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedArticle => {
      res.redirect(`/article/${req.params.id}`)
    })
    .catch(err => {
      res.render('error404')
    })
})

// export
module.exports = article