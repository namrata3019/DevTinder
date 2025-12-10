const express = require('express');

const app = express();
     //good way is to use try catch block in each request handler

app.get("/data", (req, res) => {
    try {
        //logic to fetch data
        throw new Error("xyz");
        res.send("Here is your data");
        
    } 
    catch (error) {
        res.status(500).send("Something went wrong!");
    }
});
//always use a global error handling middleware at the end of all routes
app.use("/", (err,req,res,next) => {
    if (err) {
        //log the error
        console.error(err);
        res.status(500).send("Something went wrong!");
    }
})
   
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
