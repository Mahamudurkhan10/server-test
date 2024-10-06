const express = require('express');
const app = express()
const port = 5000
app.use(express.json())
const users = [];
app.post("/users",async(req,res) =>{
     const user  = req.body;
     
    
     users.push(user)
     res.status(200).json({
          message:"user successfully",
          sucess: true,
          data: users
     })

})
app.get('/users',async(req,res)=>{
     const users = [{name:"mahim",roll:"578019",id:1},{name:'sharif',roll:"577951",id:2},]
     res.status(200).json({
          message:"user successfully",
          sucess: true,
          data: users
     })
})
app.get('/user/:id',async(req,res)=>{
     const users = [{name:"mahim",roll:"578019",id:1},{name:'sharif',roll:"577951",id:2},]
     const singleUser = users.find(user => user.id === Number(req.params.id))
     res.status(200).json({
          message:"user successfully",
          sucess: true,
          data: singleUser
     })
})
app.get('/users/:id',async(req,res)=>{
     const users = [{name:"mahim",roll:"578019",id:1},{name:'sharif',roll:"577951",id:2},]
     const singleUser = users.filter(user => user.id !== Number(req.params.id))
     res.status(200).json({
          message:"user successfully deleted",
          sucess: true,
          data: singleUser
     })
})
app.get('/',(req,res)=>{
     res.send("the server is runnig ")
})
app.listen(port,()=>{
     console.log(`the server is runnig on ${port}`)
})