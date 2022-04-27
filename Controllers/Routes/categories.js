const router = require("express").Router();
const mongoose = require("mongoose");
const CategorySchema =  require("../../Models/Category");

const Category = mongoose.model("Category", CategorySchema);

// Add a category
router.post("/", async(req,res)=>{
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }catch(err){
        res.status(500).json(err);
    }
})

// Fetch all cat
router.get("/", async(req,res)=>{
    try{
        const cats = await mongoose.model("Category").find();
        res.status(200).json(cats);
    }catch(err){
        res.status(500).json(err);
    }
})
















module.exports = router;