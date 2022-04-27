const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const PostSchema = require("../../Models/Post");
//const User = new mongoose.model("User", UserSchema);

//const Post = new mongoose.model("Post", PostSchema);

//update
router.put("/:id", async(req, res)=>{
        if(req.body.userId === req.params.id){
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            const updatedUser = await mongoose.model('User').findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },{new: true});
            res.status(200).json(updatedUser)  
        }else{
            res.status(401).json("You can update only your account");
        }
} )

//DELETE
router.delete("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id){
        const user = await mongoose.model('User').findById(req.params.id);
        if(!user){
            res.status(404).json("User not found");
        }else{
            await mongoose.model('Post').deleteMany({username: user.username});
        }
        await mongoose.model('User').findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...");
    }else{
        res.status(401).json("You can delete only your account");
    }
} );

//GET User
router.get("/:id", async(req,res)=>{
    try{
        const user = await mongoose.model('User').findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;