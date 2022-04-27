const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const postRoute = require("./Routes/posts");
const catRoute = require("./Routes/categories");
const multer = require("multer");

// App initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose.connect('mongodb://localhost/newsPortalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=> console.log("database connection done"))
    .catch((err)=> console.log(err))

// FOR uploading Image
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, "images")
    },filename:(req,file,cb)=>{
        cb(null, "Hello.jpeg");
    }
});

const upload = multer({storage: storage});
app.post("/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("File has benn uploaded");
})

// application routes
app.use("/", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", catRoute);


//default error handler
function errroHandler(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

app.listen(4000, ()=>{
    console.log("app listening at port 4000")
})