import React from 'react'
import { useNavigate } from 'react-router-dom'

const TempButton = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/Checkout')
    }
  return (
    <div>
    <center><button style={{width: '286px',height:'50px',padding: '10px',backgroundColor:'red'}} 
            onClick={handleClick}>Book Now</button></center>
    </div>
  )
}

export default TempButton