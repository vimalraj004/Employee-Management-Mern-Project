import React, { useEffect, useState } from 'react'
import { TextField, Button, InputAdornment, IconButton, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'

const Editpage = () => {

    let [fname, setfname] = useState("")
    let [lname, setlname] = useState("")
    let [email, setemail] = useState("")
    let [gender, setgender] = useState("")
    let [role, setrole] = useState("")
    let [dob, setdob] = useState("")
    let [phoneno, setphoneno] = useState("")
    let [address, setaddress] = useState("")
    let [company, setcompany] = useState("")
    let [Salary, setsalary] = useState("")
    let[image,setimage]=useState()
    let navigate = useNavigate()
    let payload = {
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
    let userid = useParams()
    useEffect(() => {
        axios.get(`http://localhost:444/edit/${userid.id}`)
            .then((z) => {
                console.log("start to edit", z);
                setfname(z.data.fname);
                setlname(z.data.lname);
                setemail(z.data.email);
                setgender(z.data.gender);
                setrole(z.data.role);
                setdob(z.data.dob);
                setphoneno(z.data.phoneno);
                setaddress(z.data.address);
                setcompany(z.data.company);
                setsalary(z.data.Salary)
                setimage(z.data.image)
          
            })
            .catch((err) => { console.log("wait for edit", err); })
    }, [])
    let Update = () => {
        // console.log(fname,lname,email,gender,role,dob,phoneno,address,company,Salary);
        const payload1 = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
            payload1.append(key, value);
        });
        
        // Append the image separately
        payload1.append('image', image);

        axios.put(`http://localhost:444/update/${userid.id}`, payload1)
            .then((res) => { console.log("data updated", res); })
            .catch((err) => { console.log("data failed to update", err); })
        navigate(`/aboutme/${userid.id}`)
    }
    let getimage=(e)=>{
        console.log(e.target.files[0]);
          setimage(e.target.files[0])
      }
    return (
        <div className='h-[120vh] w-[100%]  bg-gradient-to-r from-slate-500 to-slate-800'>
            <nav className='h-[10vh] w-[100%] bg-black text-white text-center text-[40px] font-bold'>Edit you profile</nav>
            <div className='h-[90vh] w-[100%] flex justify-center items-center'>
                <form className='h-[105vh] w-[30%] border-2 flex flex-col justify-center items-center rounded-[30px] bg-white' >
                    <TextField value={fname} onChange={(e) => { setfname(e.target.value) }} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Fist-Name" type='text' variant="outlined" />
                    <TextField value={lname} onChange={(e) => { setlname(e.target.value) }} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Last-Name" type='text' variant="outlined" />
                    <TextField value={email} onChange={(e) => { setemail(e.target.value) }} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Email" type='email' variant="outlined" />
                    <FormLabel className='w-[70%] text-white'>Gender :</FormLabel>
                    <RadioGroup value={gender} onChange={(e) => { setgender(e.target.value) }}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />

                    </RadioGroup>
                    <FormLabel className='w-[70%] text-white'>D.O.B :</FormLabel>
                    <TextField onChange={(e) => { setdob(e.target.value) }} value={dob} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="" type='date' variant="outlined" />
                    <TextField onChange={(e) => { setrole(e.target.value) }} value={role} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Role" variant="outlined" />
                    <TextField onChange={(e) => { setphoneno(e.target.value) }} value={phoneno} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Phone-no" variant="outlined" type='number' />
                    <TextField onChange={(e) => { setaddress(e.target.value) }} value={address} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Address" multiline variant="outlined" />
                    <TextField onChange={(e) => { setcompany(e.target.value) }} value={company} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Company" variant="outlined" />
                    <TextField onChange={(e) => { setsalary(e.target.value) }} value={Salary} style={{ marginTop: "5px", border: "2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="Salary" variant="outlined" type='number' />
                    {/* <FormLabel className='w-[70%]'>Profile Pic :</FormLabel> */}
                    {/* <TextField onChange={(e)=>{setpic(e.target.value)}} value={pic} style={{ border:"2px solid white" }} className='text-white  w-[70%]' size='small' id="outlined-basic" label="" variant="outlined" type='image' /> */}
                    <FormLabel className='w-[70%]'>Profile Pic :</FormLabel>
                    <input onChange={getimage} type="file" />
                    <Button onClick={Update} style={{ marginTop: "10px" }} variant="outlined">Update</Button>


                </form>
            </div>
        </div>
    )
}

export default Editpage