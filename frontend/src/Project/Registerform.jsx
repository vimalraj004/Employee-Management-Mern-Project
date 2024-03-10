import React, { useState } from 'react'
import { TextField,Button,InputAdornment, IconButton,FormControlLabel,Radio,RadioGroup, FormLabel } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registerform = () => {
    let[fname,setfname]=useState("")
    let[lname,setlname]=useState("")
    let[email,setemail]=useState("")
    let[gender,setgender]=useState("")
    let[role,setrole]=useState("")
    let[dob,setdob]=useState("")
    let[phoneno,setphoneno]=useState("")
    let[address,setaddress]=useState("")
    let[company,setcompany]=useState("")
    let[Salary,setsalary]=useState("")

    let[fnamecolor,setfnamecolor]=useState(true)
    let[lnamecolor,setlnamecolor]=useState(true)
    let[emailcolor,setemailcolor]=useState(true)
    let[rolecolor,setrolecolor]=useState(true)
    let[phonenocolor,setphonenocolor]=useState(true)
    let[addresscolor,setaddresscolor]=useState(true)
    let[companycolor,setcompanycolor]=useState(true)
    let[Salarycolor,setsalarycolor]=useState(true)

    let[image,setimage]=useState()
    
    let navigate=useNavigate()
     let payload={
      fname,
      lname,
      email,
      gender,
      role,
      dob,
      phoneno,
      address,
      company,
      Salary,
      

     }
    

     let regex=/.+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    let register=(e)=>{
      e.preventDefault()
        // console.log(fname,lname,email,gender,role,dob,phoneno,address,company,Salary);
       
        if(fname.length>4&&lname.length>=1&&email.match(regex)&&role.length>=5&&phoneno.length==10&&address.length>8&&company.length>=4&&Salary.length>4){
          
          const payload1 = new FormData();
          Object.entries(payload).forEach(([key, value]) => {
              payload1.append(key, value);
          });
          
          // Append the image separately
          payload1.append('image', image);
          
           axios.post("http://localhost:444/register",payload1) 
          .then((res)=>{console.log("data posted",res);
                        // console.log(res.data);
                      if(res.data=="useremail is already in use"){
                        alert("useremail is already in use")
                      }
                    else{
                      navigate("/emp")
                    }})
          .catch((err)=>{console.log("data failed to post",err);})
         
        }
        else{
             if(fname.length>4){
              setfnamecolor(true)
             }
             else{
              setfnamecolor(false)
             }
             if(lname.length>=1){
              setlnamecolor(true)
             }
             else{
              setlnamecolor(false)
             }
             if(email.match(regex)){
              setemailcolor(true)
             }
             else{
              setemailcolor(false)
             }
             if(role.length>=5){
              setrolecolor(true)
             }
             else{
              setrolecolor(false)
             }
             if(phoneno.length==10){
              setphonenocolor(true)
             }
             else{
              setphonenocolor(false)
             }
             if(address.length>8){
              setaddresscolor(true)
             }
             else{
              setaddresscolor(false)
             }
             if(company.length>=4){
              setcompanycolor(true)
             }
             else{
              setcompanycolor(false)
             }
             if(Salary.length>4){
              setsalarycolor(true)
             }
             else{
              setsalarycolor(false)
             }
        }
     
    }
    let getfname=(e)=>{
         setfname(e.target.value)
         if(e.target.value.length>=4){
          setfnamecolor(true)
         }
         else{
          setfnamecolor(false)
         }
    }
    let getlname=(e)=>{
        setlname(e.target.value)
        if(e.target.value.length>=1){
          setlnamecolor(true)
         }
         else{
          setlnamecolor(false)
         }
    }
    let getemail=(e)=>{
        setemail(e.target.value)
        if(e.target.value.match(regex)){
          setemailcolor(true)
         }
         else{
          setemailcolor(false)
         }
    }
    let getrole=(e)=>{
        setrole(e.target.value)
        if(e.target.value.length>=5){
          setrolecolor(true)
         }
         else{
          setrolecolor(false)
         }
    }
    let getphoneno=(e)=>{
      setphoneno(e.target.value)
      if(e.target.value.length==10){
        setphonenocolor(true)
       }
       else{
        setphonenocolor(false)
       }
    }
    let getaddress=(e)=>{
      setaddress(e.target.value)
      if(e.target.value.length>8){
       setaddresscolor(true)
       }
       else{
       setaddresscolor(false)
       }
    }
    let getcompany=(e)=>{
      setcompany(e.target.value)
      if(e.target.value.length>=4){
       setcompanycolor(true)
       }
       else{
       setcompanycolor(false)
       }
    }
    let getsalary=(e)=>{
      setsalary(e.target.value)
      if(e.target.value.length>4){
        setsalarycolor(true)
       }
       else{
        setsalarycolor(false)
       }
    }
    let getimage=(e)=>{
      console.log(e.target.files[0]);
        setimage(e.target.files[0])
    }
  return (
    <div className='h-[120vh] w-[100%]  bg-gradient-to-r from-slate-500 to-slate-800'>
              <nav className='h-[10vh] w-[100%] bg-black text-white text-center text-[40px] font-bold'>Welcome to Register page</nav>
            <div className='h-[90vh] w-[100%] flex justify-center items-center'>
            <form className='h-[105vh] w-[30%] mt-[10%] border-2 flex flex-col justify-center items-center rounded-[30px] bg-white' >
             <TextField helperText={fnamecolor?"":"please fill the fname"} color={fnamecolor?"primary":"error"} required value={fname} onChange={getfname}  style={{marginTop:"5px", border:"2px solid white"}}  className='text-white  w-[70%]' size='small' id="outlined-basic" label="Fist-Name" type='text' variant="outlined" />
             <TextField helperText={lnamecolor?"":"please fill the lname"} color={lnamecolor?"primary":"error"} required value={lname} onChange={getlname} style={{marginTop:"5px", border:"2px solid white"}}  className='text-white  w-[70%]' size='small' id="outlined-basic" label="Last-Name" type='text' variant="outlined" />
             <TextField helperText={emailcolor?"":"please fill the email"} color={emailcolor?"primary":"error"} required value={email} onChange={getemail} style={{marginTop:"5px", border:"2px solid white"}}  className='text-white  w-[70%]' size='small' id="outlined-basic" label="Email" type='email' variant="outlined" />
             <FormLabel className='w-[70%] text-white'>Gender :</FormLabel>
             <RadioGroup value={gender}  onChange={(e)=>{setgender(e.target.value)}}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel  value="female" control={<Radio />} label="Female" />
              <FormControlLabel  value="male" control={<Radio />} label="Male" />
              <FormControlLabel  value="Other" control={<Radio />} label="Other" />
              
            </RadioGroup>
            <FormLabel className='w-[70%] text-white'>D.O.B :</FormLabel>
                <TextField required onChange={(e)=>{setdob(e.target.value)}} value={dob} style={{marginTop:"5px", border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="" type='date' variant="outlined" />
                <TextField helperText={rolecolor?"":"please fill the role"} color={rolecolor?"primary":"error"} required onChange={getrole} value={role} style={{marginTop:"5px", border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Role" variant="outlined" />
                <TextField helperText={phonenocolor?"":"please fill the phoneno"} color={phonenocolor?"primary":"error"} required onChange={getphoneno} value={phoneno} style={{marginTop:"5px", border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Phone-no" variant="outlined" type='number' />
                <TextField helperText={addresscolor?"":" please fill the address"} color={addresscolor?"primary":"error"} required onChange={getaddress} value={address} style={{marginTop:"5px", border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Address" multiline variant="outlined" />
                <TextField helperText={companycolor?"":"please fill the company"} color={companycolor?"primary":"error"} required onChange={getcompany} value={company} style={{marginTop:"5px", border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Company" variant="outlined" />
                <TextField helperText={Salarycolor?"":" please fill the salary"} color={Salarycolor?"primary":"error"} required onChange={getsalary} value={Salary} style={{marginTop:"5px", border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Salary" variant="outlined" type='number' />
                <FormLabel className='w-[70%]'>Profile Pic :</FormLabel>
                {/* <TextField  style={{ border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="" variant="outlined" type='file' /> */}
                <input onChange={getimage} type="file" />
                <Button onClick={register} style={{marginTop:"10px"}} variant="outlined">Register</Button>
                

             </form>
             {/* <img src={image} height="100px" width="100px" alt="" /> */}
            </div>
    </div>
  )
}

export default Registerform
