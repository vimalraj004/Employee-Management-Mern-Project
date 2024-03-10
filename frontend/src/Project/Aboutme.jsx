import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import profile from "./Assets/51e0d5aa27808ce689e3dd5a5cd7685a.jpg"
import { TextField,Button,InputAdornment, IconButton,FormControlLabel,Radio,RadioGroup, FormLabel } from '@mui/material'

const Aboutme = () => {
   let userid= useParams()
   let [details,setdetails]=useState("")
   let navigate=useNavigate()
  //  let [refresh,setrefresh]=useState(false)
  //  let [company,setcompany]=useState("")
  //  let [address,setaddress]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:444/emp/${userid.id}`)
        .then((x)=>{console.log("i got the data");
                        setdetails(x.data);
                        // setcompany(x.data.company);
                        // setaddress(x.data.address)
                  })
        .catch(()=>{console.log("i didnt get the date");})
        // setrefresh(true)

    },[])
    let Delete=(Y)=>{
        axios.delete(`http://localhost:444/delete/${Y}`)
        .then((B)=>{console.log("data deleted",B);})
        .catch(()=>{console.log("data cant delete");})
        navigate("/emp")
    }
  return (
    <div>
        <nav className='h-[10vh] w-[100%] bg-black text-white text-[40px] font-bold text-center'> Welcome to {details.fname} profile page</nav>
        <div className='h-[90vh] w-[100%] bg-gradient-to-r from-slate-500 to-slate-800 flex'>
          <section className='h-[100%] w-[40%]  flex flex-col justify-center items-center'>
              <img src={`http://localhost:444/pics/`+details.image} alt=""  style={{height:"500px", width:"400px", borderRadius:"50%"}}/>
              <div>
              <Button style={{marginTop:"20px", color:"white",background:"blue"}} variant='outlined'><Link to={`/edit/${details._id}`}>Edit profile</Link></Button>
              <Button onClick={()=>{Delete(details._id)}} style={{marginTop:"20px", color:"white",marginLeft:"20px" ,background:"red"}} variant='outlined'><Link>Delete</Link></Button>
              </div>
          </section>
          <section className='h-[100%] w-[60%] flex flex-col justify-center '>
            <div className='border-2 border-black shadow-md shadow-black rounded-[20px]'>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>First-Name : {details.fname}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Last-Name : {details.lname}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>E-mail :{details.email}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Gender :{details.gender}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Role :{details.role}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Phone no :{details.phoneno}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>D.O.B :{details.dob}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Company :{details.company}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Salary :{details.Salary}</h1>
            <h1 className='text-white ml-[40px] text-[20px] font-bold mt-[10px]'>Address :{details.address}</h1>
           

         

            </div>
   
          </section>

        </div>

      
      
    </div>
  )
}

export default Aboutme
