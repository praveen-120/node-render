const express=require('express');
const port=process.env.port || 3000;
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello world');
    res.end();
})
app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})