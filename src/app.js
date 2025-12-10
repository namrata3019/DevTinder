const express = require('express');

const app = express();
const {adminAuthorization,userAuthorization}= require('./middlewares/auth');

app.use("/admin",adminAuthorization);
app.post("/user/login",(req,res)=>{
    res.send("User Login Successful");
});



app.get("/admin/getAllData", (req, res) => {
    
    res.status(200).send("Admin Data");
});

app.get("/admin/deleteUser",(req,res)=>{
    res.send("User Deleted");
});
app.get("/user/getProfile",userAuthorization,(req,res)=>{
    res.send("User Profile Data");
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
