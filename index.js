//import
var express = require("express")
var cors = require("cors")
require("./connection")
var empModel=require("./model/employee")
//initialise
var app=express()

//mid
app.use(express.json());
app.use(cors());

//api

//add employee
app.post("/add",async(req,res)=>{
    try {
        await empModel(req.body).save();
        res.send({message:"Data added!"});
    } catch (error) {
        console.log(error)
    }
    })
//view employee
app.get('/view',async(req,res)=>{
    try {
        var data = await empModel.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

//api to delete
app.delete('/remove/:i',async(req,res)=> {
    
    // console.log(req.params.a)
    try {
      var id=req.params.i
      await empModel.findByIdAndDelete(id)
      res.send({message:"data deleted successfully"})
    } catch (error) {
        console.log(error);
    }
})
//api to update
app.put('/edit/:id',async(req,res)=>{
    try {
        var id=req.params.id
        var data = await empModel.findByIdAndUpdate(id,req.body)
        res.send({message:"data updated successfully",data})
    } catch (error) {
        console.log(error);
    }
})


//port 
app.listen(3008,()=>{
    console.log("Port is up and running!!!")
})