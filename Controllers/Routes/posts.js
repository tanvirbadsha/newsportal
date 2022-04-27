const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../../Models/User");
const PostSchema = require("../../Models/Post");
//const User = new mongoose.model("User", UserSchema);

const Post = new mongoose.model("Post", PostSchema);

//Create new Post
router.post("/", async (req, res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})

//Update post
router.put("/:id", async( req, res)=>{
    try{
        const post = await mongoose.model('Post').findById(req.params.id);
        
            if(post.username === req.body.username){
                try{
                    const updatePost = await mongoose.model('Post').findByIdAndUpdate(req.params.id, {
                        $set: req.body
                    }, {new: true});
                    res.status(200).json(updatePost)
                }catch(err){
                    res.status(500).json(err);

                }
                
            }else{
            res.status(401).json("You can update only your post")
    }}catch(err){
        res.status(500).json(err);
    }
})

// Delete Post
router.delete("/:id", async( req, res)=>{
    try{
        const post = await mongoose.model('Post').findById(req.params.id);
        
            if(post.username === req.body.username){
                try{
                    await post.delete();
                    res.status(200).json("Post has been deleted")
                }catch(err){
                    res.status(500).json(err);

                }
                
            }else{
            res.status(401).json("You can delete only your post")
    }}catch(err){
        res.status(500).json(err);
    }
})

//GET Post
router.get("/:id", async(req,res)=>{
    try{
        const post = await mongoose.model('Post').findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})

// Get all post
router.get("/", async(req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await mongoose.model('Post').find({username})
        }else if(catName){
            posts = await mongoose.model('Post').find({categories:{
                $in: [catName]
            }})
        } else{
            posts = await mongoose.model('Post').find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;