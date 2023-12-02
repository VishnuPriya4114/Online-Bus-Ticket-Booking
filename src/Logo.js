import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './HOME/Image/logo.jpeg'

const Logo = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/Signin')
    }
  return (
    <center>
    <motion><img onClick={handleClick}  src={logo} /></motion>
    </center>
  )
}

export default Logo