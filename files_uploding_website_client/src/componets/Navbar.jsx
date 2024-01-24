import React, { useEffect, useState } from 'react'
import cloud from '../img/cloud.webp'
import man from '../img/man1.webp'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import axios from 'axios';
import { toast } from 'react-toastify';

function Navbar() {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const { loginUser, setLoginUser, loading } = useAuth();
  const logoutSubmit = async ()=>{
    try{
      const res = await axios.get('/api/v1/user/signout')
      if(res.data.success===false){
        toast("Error !")
      }else{
        setLoginUser(undefined)
        toast("Signout Successful !")
        history("/")
      }
    }catch{

    }

  }
  const verifyUser = async ()=>{
    try{
      const res = await axios.get('/api/v1/user/verify')
      if(res.data.success === false){
        console.log(res)
      }else{
        setLoginUser(res.data.user);
      }
    }catch{

    }
    
  }
  useEffect( ()=>{
    verifyUser()
  },[])

  const nav = () => {

    if (!loginUser) {
      return (
        <>
          <li><Link style={{ textDecoration: 'none' }} to='/signin'>Signin</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to='/signup'>Signup</Link></li>
        </>
      )
    } else {
      return (
        <>
          <li onClick={()=>history('/dashbord')}>Dashbord</li>
          <li onClick={logoutSubmit}>Logout</li>
          <div class="user-nav-login" onClick={()=>history('/profile')}>
            <img src={man} alt="user image" />
            <div>
              <h3>{loginUser.name}</h3>
              <p>{loginUser.email}</p>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <header>
        <div className="title">
          <img style={{ height: 25, padding: "0 5px" }} src={cloud} alt="" />
          Fill Uploding
        </div>
        {loading ? <>
          <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set your desired background color and opacity
        zIndex: 9999, // Set a high z-index to ensure it's on top
      }}
    >
      <CircularProgress />
    </Box>
        </>:<></>}
        <div className="menu">
          <ul className="main-menu">
            <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
            {
              nav()
            }

          </ul>
        </div>
      </header>

    </>
  )
}

export default Navbar