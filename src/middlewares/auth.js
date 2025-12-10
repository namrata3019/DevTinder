//middleware 
const express = require('express');

const app = express();

const adminAuthorization=app.use("/admin",(req,res,next)=>{
    // const token = req.headers['authorization'];
    // req.token = token;
    // next();
    const token=req.headers['authorization'];
    if (!token || token !== "admin123") {
        return res.status(403).send("Forbidden");
    } else {
        next();
    }
});

const userAuthorization=app.use("/user",(req,res,next)=>{
    const token=req.headers['authorization'];
    if (!token || token !== "user123") {
        return res.status(403).send("Forbidden");
    } else {
        next();
    }
});

module.exports = { adminAuthorization, userAuthorization };
