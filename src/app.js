const express=require('express');
const app=express();

app.get('/user',(req,res)=>{
    res.send({firstname:'Namrata',lastname:'Singh'});
});
app.post('/user',(req,res)=>{
    res.send('Post request is successful');
});
app.delete('/user',(req,res)=>{
    res.send('Delete request is successful');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
