const express = require("express")
const app=express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors")
app.use(cors())
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "GFVTYF56467T78VGVsdexrfdctgfygy76t)(78tgyuhj"

const mongoUrl = "mongodb+srv://epics:musHthLtzAtQ00JY@cluster0.29ynjbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("Connected to databse");
})
.catch((e)=>{
    console.log(e)
})

require("./userdetails");
const User = mongoose.model("UserInfo");
app.post('/register', async(req,res)=>{
    const {name, email,password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const olduser =await User.findOne({email});
        if(olduser){
          return res.send({error: "User Exists"})
        }
        await User.create({
            name,
            email,
            password:encryptedPassword,
        });
        res.send({status:"ok"})
    }catch(error) {
        res.send({status:"error"})
    }
})

app.post("/login-user",async (req,res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.send({error: "User Not Found"})
    }
    if (await bcrypt.compare(password,user.passwrd)){
        const token = jwt.sign({}, JWT_SECRET)
    
    if (res.status(201)){
        return res.json({status:"ok", data:token});
    }else{
        return res.json({error:"error"})
    }
}
    res.json({status:"error", error:"Invalid Password"})
});

app.listen(5000,()=>{
    console.log("Server Started");
});

// app.post("/post",async (req,res)=>{
//     console.log(req.body);
//     const {data}=req.body;

//     try{
//         if(data=="harshu"){
//             res.send({status:"ok"})
//         }else{
//             res.send({status:"User not found"})
//         }
//     }catch (error){
//         res.send({status: "error, Something went wrong try again"})
//     }
// });

// require("./userdetails");
// const User = mongoose.model("UserInfo");

// app.post("/register",async(req,res)=>{
//     const {name,email,password} = req.body;
//     try{
//         await User.create({
//             name:name,
//             email,
//             password:password,
//     });
//     res.send({status:"ok"})
//     }catch (error){
//         res.send({status:"error"})
//     }
// });