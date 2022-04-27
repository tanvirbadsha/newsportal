const router = require("express").Router();
const mongoose = require("mongoose")
const UserSchema = require("../../Models/User");
const bcrypt = require('bcrypt');

const User = new mongoose.model("User", UserSchema);

//REGISTER
router.post("/register", async(req, res)=>{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })
        await newUser.save((err)=>{
            if(err){
                res.status(500).json({error: "There was a server side error"});
            }else{
                res.status(200).json({message: "User has been created succesfully"});
            }
        })
} )

// Login
 router.post("/login", async(req, res)=>{
     const user =await User.findOne({
         username: req.body.username});
         //!user && res.status(400).json("Wrong credentials!");

         
         //!validate && 
         if(!user){
            res.status(400).json("Wrong credentials!");
         }else{
            const validate = await bcrypt.compare(req.body.password, user.password);
            if(!validate){
                res.status(400).json("Wrong credentials!");
            }else{
                const { password, ...others } = user._doc;
                res.status(200).json(others);
            }

         }
 } )

module.exports = router;