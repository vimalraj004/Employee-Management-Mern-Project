import axios from 'axios'
import React, { useEffect, useState } from 'react'
import profile from "./Assets/51e0d5aa27808ce689e3dd5a5cd7685a.jpg"
import { Link, useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField,Search } from '@mui/material';
import { Filter } from '@mui/icons-material';


const Employees = () => {
    let [data,setdata]=useState([])
    let[Search,setsearch]=useState("")
    let[remove,setremove]=useState(0)
    // let[img,setimg]=useState()
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:444/emp")
        .then((x)=>{console.log("i got the data");
                    console.log(x);
                    setdata(x.data)
                    // setimg(x.data[0].img);
                  })
        .catch(()=>{console.log("i didnt get the data");})
    },[remove])
    
     let find=()=>{
      // let finddata= data.filter((x)=>{
           
      //   return x.fname==Search
           
      //     })
     
      //        console.log(finddata);// array
      //        if(Search.length>0){
      //         if(finddata[0]!=null){
      //           setdata(finddata)
      //          }
      //          else{
      //           alert("user not found")
      //          }
      //        }
      //        else{
      //         alert("fill the searchbox")
      //        }
           
       if(Search.length>0){
        axios.get(`http://localhost:444/filter/${Search}`)
        .then((res)=>{console.log("data sended for filter",res)
                      if(res.data=="user not found"){
                        alert("user not found")
                      }
                      else{
                        setdata(res.data)
                      };})
        .catch((err)=>{console.log("failed to send the data for filter",err);})
  
       }
       else{
        alert("fill the box")

       }
           

     }
     let logout=()=>{
      localStorage.clear()
      navigate("/")
     }
  
  return (
    <div >
            <nav className='text-white bg-black h-[10vh] text-[30px] text-center font-bold flex'> 
            <div className='h-[100%] w-[10%] '><Button onClick={logout} className='border-2'  style={{border:"2px solid white",color:"white",marginTop:"10px"}}>Logout</Button></div>
            <div className='h-[100%] w-[30%]  ml-[100px] text-center'>welcome to Employees page</div>
            <div className='h-[100%] w-[30%] flex ml-[50px]  '><TextField value={Search} onChange={(e)=>{ setsearch(e.target.value)
            if(e.target.value.length==0){
              setremove(remove+1)
            }
           }} className='text-white h-[50%] w-[100%] bg-white' style={{marginTop:"20px",color:"white"}} placeholder='search' size='small' variant='outlined' type='search'></TextField><Button onClick={find} style={{height:"38px",marginLeft:"20px",border:"2px solid white",marginTop:"20px" ,color:"white"}} variant='outlined'>Find</Button></div>
            <div className='h-[100%] w-[20%] '><Button size='small' variant="outlined" style={{color:"white",border:"2px solid white",marginTop:"20px"}}><AddIcon></AddIcon> <Link to="/Reg">Add Employee</Link></Button></div></nav>
            <div className=' bg-gradient-to-r from-slate-500 to-slate-800 w-[100%] flex flex-wrap items-center justify-evenly'>
            {data.map((y)=>{
                return(
                    <div >
                         <section className='h-[50vh] w-[300px] bg-black border-2 rounded-[20px] ml-[10px] mt-[10px] flex flex-col items-center justify-center cursor-pointer  transform scale-100 hover:scale-105 transition-transform duration-1500'>
                            <img src={`http://localhost:444/pics/`+y.image} className='h-[20vh] w-[50%]  rounded-[100px] bg-white hover:animate-spin'></img>
                           <h1 className='text-white mt-[10px]'>Name :{y.fname}</h1>
                           <h2 className='text-white mt-[10px]'>Role:{y.role}</h2>
                            <p className='text-white mt-[10px]'>CompanyName :{y.company}</p>
                            <button className='h-[40px] w-[140px] rounded-[30px] cursor-pointer bg-transparent border-2 text-white mt-[10px]'><Link to={`/aboutme/${y._id}`}>About ME</Link></button>

                         </section>
                    </div>
                )
            })}
            </div>
    </div>
  )
}

export default Employees
