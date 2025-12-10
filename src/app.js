const express=require('express');
const app = express();

app.use("/user",
    (req, res, next) => {
        console.log("first call")
        next();
                // res.send('Request URL:', req.originalUrl); will throw error if next() is used as cannot set headers after they are sent

    },
    [// can send array of middlewares
        (req, res, next) => {
        console.log("middle call")
        next();
    },
    (req, res,next) => {
        console.log("third call")
        // res.send('Request URL:', req.originalUrl);
        next();
    }


    ],
    (req, res) => {
        console.log("second call")
        res.send('Request Type:',req.method);
    }   
)

// app.get("/user/:userId",(req,res)=>{
//     res.send({firstname:'Namrata',lastname:'Singh'});
// });

// app.post('/user',(req,res)=>{
//     res.send('Post request is successful');
// });
// app.delete('/user',(req,res)=>{
//     res.send('Delete request is successful');
// });
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
