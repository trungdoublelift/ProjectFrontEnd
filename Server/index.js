const express = require("express");
const app = new express();
const config = require("./config");
const Database = require("./database");
const db = new Database();
const body=require('body-parser')
const cors = require("cors");
app.use(cors());
app.use(body.json())
app.listen(config.PORT, config.HOST, (req, res) => {
  console.log("server is running at:" + config.HOST + ":" + config.PORT);
});


app.put("/updateProfile",async(req,res)=>{
  const {id,name,rank,salary}=req.body
  try{
    let result =await db.updateProfile(id,name,rank,salary)
    res.send("Cập nhật thông tin nhân viên thành công");
  }catch(err){
    console.log(err)
    res.send("Không thể cập nhật thông tin nhân viên")
  }
})

app.post("/getEmployeeInfo",async (req,res)=>{
    const {id}=req.body;
    console.log(id);
    try{
      let result=await db.getEmployeeInfo(id)
      res.send(result);
    }catch(err){
      console.log(err);
    }
})
app.post("/deleteEmployee",async(req,res)=>{
  const {id}=req.body
  console.log(id);
  try{
    let result = await db.deleteEmployee(id);
    res.send("Xóa nhân viên");
    
  }catch(err){
    console.log(err)
    res.send("Không thể xóa nhân viên");
  }
})
app.post("/addEmployee",async (req,res)=>{
  const {id,name,rank,salary}=req.body;
  try{
    let result=await db.addEmployee(id,name,rank,salary)
  }catch(err){
    console.log(err);
    res.send("Không thể thêm")
  }
})