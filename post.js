const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// router.get('/', (req, res) => {
//   res.send('we are on home screen');
// });


// Get back the ALL post
router.get('/', async(req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json({message : err});
  }
});

//submits the post into DB
router.post('/', async (req, res) => {
  const post = new Post({
    reading: req.body.reading,
    mood: req.body.mood,
    TYPE: req.body.TYPE
  });
try{
  const savedPost = await post.save()
    res.json(savedPost);
}catch(err){
    res.json({ message: err });
}
});


router.get('/:postid', async (req, res) => {
    try {
      const foundPost = await Post.findById(req.params.postid);
      res.json(foundPost);
    } catch (err) {
      res.json({ message: err });
    }
  });
//delete a post
router.delete('/:postid', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.postid });
        res.json(deletedPost)
}catch(err)
{
    res.json({ message: err });
}
});

  
module.exports = router;
