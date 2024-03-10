import React, { useState } from 'react'
import { TextField,Button,InputAdornment, IconButton } from '@mui/material'
import { Form, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
  let [username,setusername]=useState("")
  let [userpass,setuserpass]=useState("")

  let navigate=useNavigate()
 let submit=(e)=>{
    e.preventDefault()
    if(username==="vimalraj"&& userpass==="9894"){
          localStorage.setItem("entry",true)
        navigate("/emp")
    }
    else{
      alert("username or password is wrong")
    }
 }

  return (
    <div className='bg-gradient-to-r from-pink-500 to-violet-600 h-[100vh] w-[100%] flex justify-center items-center'>
        <form className=' bg-white h-[50vh] w-[23%] border-2 flex flex-col justify-evenly items-center rounded-[20px]'>
            <h1>Welcome to Login page</h1>
        <TextField value={username} onChange={(e)=>{setusername(e.target.value)}} className='mt-[10px]' size='small' id="outlined-basic" label="Username" variant="outlined" />
        <TextField value={userpass} onChange={(e)=>{setuserpass(e.target.value)}} className='mt-[10px]' size='small' id="outlined-basic" label="password" type="password" variant="outlined" />
       
        
        <Button  onClick={submit}variant="outlined">submit</Button>

        </form>
      
    </div>
  )
}

export default Login
