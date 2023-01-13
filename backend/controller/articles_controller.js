const express = require('express')
const article = express.Router()
const Article = require('../models/article.js')


article.get('/', (req, res) => {
      Article.find()
          .then(foundArticle => {
              res.send(foundArticle)
          })
          .catch(err => {
              console.log(err) 
              res.render('error404')
            })
  })         
  
article.get('/:id', (req, res) => {
      Article.findById(req.params.id)
          .then(foundArticles => {
              res.send(foundArticles)
              })
              .catch(err => {
                  console.log(err) 
                  res.render('error404')
                })
          })
  
article.post('/', (req, res) => {
      Article.create (req.body)
      res.redirect('/articles')
      // .then(foundArticle => {
      //     res.send(foundArticle)
      // })
      .catch(err => {
          console.log(err) 
          res.render('error404')
        })
  })
  
article.delete('/:id', (req, res) => {
      Article.findByIdAndDelete(req.params.id) 
        .then(deletedArticle => { 
          res.status(303).redirect('/articles')
          // res.json(deletedArticle)
        })
        .catch(err => {
          console.log(err) 
          res.render('error404')
        })
  })
  
article.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body) 
      .then(updatedArticle => { 
        res.redirect(`/articles/${req.params.id}`) 
        // res.json(updatedArticle)
      })
      .catch(err => {
        console.log(err) 
        res.render('error404')
      })
  })

  // export
module.exports = article