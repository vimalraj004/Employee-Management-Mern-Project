let mongoose=require("mongoose")
let dataschema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    gender:String,
    role:String,
    dob:String,
    phoneno:Number,
    address:String,
    company:String,
    Salary:Number,
    image:String  
})
let data=mongoose.model("newemployee",dataschema)
module.exports=data