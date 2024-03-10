let express=require("express")
let cors=require("cors")
let bodyparser=require("body-parser")
let mongoose=require("mongoose")
let data=require("./Schema/Registerschema")
mongoose.connect("mongodb://127.0.0.1:27017/employees")
mongoose.connection
.once("open",()=>{console.log("db connected");})
.on("err",()=>{console.log("db failed to connect");})
let app=express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('photos'))
//--------------------multer-------------------------
const multer  = require('multer')
const path=require("path")
// const { log } = require("console")
const storage = multer.diskStorage({
    destination:(req, file, cb)=> {
      cb(null,"photos/pics")
    },
    filename:(req, file, cb)=> {
     cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
 //-----------------------------------multer -------------------
app.post("/register",upload.single('image'),(req,res)=>{
    // res.end("heloo")
   console.log(req.file);
   
 
    data.findOne({email:req.body.email})
    .then((x)=>{
       if(x){
        res.json("useremail is already in use")
       }
       else{
       
        const db = new data({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            gender: req.body.gender,
            role: req.body.role,
            dob: req.body.dob,
            phoneno: req.body.phoneno,
            address: req.body.address,
            company: req.body.company,
            Salary: req.body.Salary,
            image: req.file.filename // Add image filename here
        });
       
        // let db=new data(req.body)
        db.save()
        .then(()=>{res.json("data saved in db");})
        .catch(()=>{res.json("data failed to save in db")})
       }

    })
    .catch(()=>{})

})
app.get("/emp",(req,res)=>{
    data.find()
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json("failed to get the data from db")})
})
app.get("/emp/:id",(req,res)=>{
    let id=req.params.id
    data.findOne({_id:id})
    .then((y)=>{res.json(y);})
    .catch((err)=>{res.json("failed to fetch the data")})

})
app.get("/edit/:id",(req,res)=>{
    let id=req.params.id
    data.findOne({_id:id})
    .then((z)=>{
                 res.json(z);
                 })
    .catch(()=>{res.json("failed to fetch the data")})
    
})
app.put("/update/:id",upload.single('image'),(req,res)=>{
    let id=req.params.id
    console.log(req.body);
    let obj={
        ...req.body,
        image:req.file.filename

    }
    
    data.updateOne({_id:id},obj)
    .then(()=>{res.json("data updated in db");})
    .catch((err)=>{res.json("failed to update the data in db")})
})
app.delete("/delete/:id",(req,res)=>{
    let id=req.params.id
    data.deleteOne({_id:id})
    .then(()=>{res.json("data deleted in db");})
    .catch((err)=>{res.json("failed to delete the data in db")})

})
app.get("/filter/:name",(req,res)=>{
  let name= req.params.name
      data.find({fname:name})
      .then((x)=>{
            //  console.log(x);
          
             if(x[0]!=null){
               
                res.json(x)
             }
             else {
                res.json("user not found")
               
             }
      })
      .catch(()=>{})
})
app.listen("444",()=>{
    console.log("ur port is running");
})  