const express=require("express")
const app=express()

const path=require("path")
const http=require("http")
const {Server} =require("socket.io")

const io=new Server(server)
app.use(express.static(path.resolve("")))

app.get("/board",(req,res)=>{
    return res.sendFile("Bond.jsx")
})

server.listen(3000,()=>{
    console.log("port connected to 3000")
})

