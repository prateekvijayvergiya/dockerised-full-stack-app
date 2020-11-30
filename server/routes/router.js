const express = require('express')
const router = express.Router() 
const schema = require('../models/postsSchema')
const Posts = schema;

router.get('/posts', async (req, res) => {
    try{
        const posts = await Posts.find()
        res.json(posts)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})


router.post('/posts', async (req, res, next) => {
     const post = new Posts( {
         post: req.body.post,
     })
    try{
        const putData = await post.save()
        res.status(201).send(putData)
    }catch(err){
        res.send({message: err})
    }
})

module.exports = router
