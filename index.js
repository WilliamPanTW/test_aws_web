import express from "express"

const app =express();

app.listen(5001,()=>console.log("api running on 501"))

app.get("/",(req,res)=>res.json("my api running"))