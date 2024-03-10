import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protect = (x) => {
    let navigate=useNavigate()
    let Data=x.data
    useEffect(()=>{
     let entry=   localStorage.getItem("entry")
     if(!entry){
        navigate("/")
     }
    })
  return (
    <div>
        <Data/>
    </div>
  )
}

export default Protect