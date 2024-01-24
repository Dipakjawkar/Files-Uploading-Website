import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { toast } from 'react-toastify';


function Signin() {
  const [user, setUser] = useState({ email: "", password: "" })
  const history = useNavigate()
  const { setIsLoggedIn, isLoggedIn, loginUser, setLoginUser } = useAuth()

  const onInputeChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const onSubmitButton = async () => {
    const { email, password } = user;
    try {
      const res = await axios.post('/api/v1/user/signin', {
        email, password
      })
      if (res.data.success === true) {
        setLoginUser(res.data.user)
        toast("Login Successful !")
        history("/")
      } else {
        toast(res.data.message)
      }

    } catch (e) {
      toast("Server Not Working !")
    }
    setUser({ email: "", password: "" })
  }
  return (
    <div className="section1">
      <div className="form-card">
        <h2 className="form-title">Signin</h2>
        <br />
        <div className="form-input-lable">Email</div>
        <input type="text" className="form-input" name="email" value={user.email} onChange={onInputeChange} />
        <br />
        <div className="form-input-lable">Password</div>
        <input type="text" className="form-input" name="password" value={user.password} onChange={onInputeChange} />
        <br />
        {/* <div class="form-input-btn">Name</div> */}
        <div className="flex-center">
          <button className="form-btn" onClick={onSubmitButton} >SIGNIN</button>
        </div>
        <p>
          You Have a Account ? <a href="/">Signup</a>
        </p>
      </div>
    </div>

  )
}

export default Signin