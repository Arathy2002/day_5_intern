var mongoose = require("mongoose");
var schema = mongoose.Schema({
    Name:String,
    Age:Number,
    Contact:Number,
    Salary:Number,
    Department:String
})
var EmployeeModel = mongoose.model("employee",schema);
module.exports=EmployeeModel;