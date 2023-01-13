const article = require('express').Router()
const db = require('../models/')
const { Article } = db


article.get('/', async (req, res) => {
  try{ 
    const foundArticles = await Article.findAll()
    res.status(500).json (foundArticles)  
  } catch (error) {
    res.status(500).json(error)
  }
  })   
  
article.get('/:id', async (req, res) => {
    try {
        const foundArticle = await Article.findOne({
            where: { Article_id: req.params.id }
        })
        res.status(200).json(foundArticle)
    } catch (error) {
        res.status(500).json(error)
    }
})
  
// article.get('/:article_id', async (req, res) => {
//   const article_id = Number(req.params.article_id)
//     if (isNaN(article_id)) {
//         res.status(404).json({ message: `Invalid id "${article_id}"` })
//     } else {
//         const foundArticle = await Article.findOne({
//             where: { article_id: article_id },
//         })
//         if (!foundArticle) {
//             res.status(404).json({ message: `Can't find "${article_id}"` })
//         } else {
//             res.json(foundArticle)
//         }
//     }
//       // Article.findOne(req.params.id)
//       //     .then(foundArticles => {
//       //         res.send(foundArticles)
//       //         })
//       //         .catch(err => {
//       //             console.log(err) 
//       //             res.render('error404')
//       //           })
//     })
  
article.post('/', async (req, res) => {
  article.post('/', async (req, res) => {
    try {
        const newArticle = await Article.create(req.body)
        res.status(200).json({
            message: 'New Article Added',
            data: newArticle
        })
    } catch(err) {
        res.status(500).json(err)
    }
  })
  // try {
  //   const foundArticle = await Article.create()
  //   res.status(200).json (foundArticle)
  // } catch (error) {
  //   res.status(500).json(error)
  // }
  })

article.put('/:id', async (req, res) => {
    try {
        const updatedArticle = await Article.update(req.body, {
            where: {
                article_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Update Successful`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// article.put('/:article_id', async (req, res) => {
//     let article_id = Number(req.params.article_id)
//     if (isNaN(article_id)) {
//         res.status(404).json({ message: `Invalid id "${article_id}"` })
//     } else {
//         const foundArticle = await Article.findOne({
//             where: { articleId: article_id},
//         })
//         if (!foundArticle) {
//             res.status(404).json({ message: `Can't find id "${article_id}"` })
//         } else {
//             Object.assign(foundArticle, req.body)
//             await foundArticle.save()
//             res.json(foundArticle)
//         }
//     }
    
//   })
    

article.delete('/:id', async (req, res) => {
  try {
      const deletedArticle = await Article.destroy({
          where: {
              article_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Delete Successful`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})


// article.delete('/:article_id', async (req, res) => {
//     const article_id = Number(req.params.article_id)
  
//     if (isNaN(article_id)) {
//         res.status(404).json({ message: `Invalid id "${article_id}"` })
//     }  else {
//         const foundArticle = await Article.findOne({
//             where: { article_id: article_id }
//         })
//         if (!foundArticle) {
//             res.status(404).json({ message: `Can't find  id "${article_id}" for place with id "${article_id}"` })
//         } else {
//             await foundArticle.destroy()
//             res.json(foundArticle)
//         }
//     }
    // article.delete('/:id', async (req, res) => {
    //   try {
    //     const foundArticle = await Article.findByIdAndDlete()
    //     res.status(200).json (foundArticle)
    //   } catch (error) {
    //     res.status(500).json(error)
    //   }
    // })
  


  
  // export
module.exports = article


