import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
  const [user, setUser] = useState({name:"",email:"",password:"",cpassword:""})
  const history = useNavigate()
  const onInputeChange  = (e) =>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const onSubmitButton = async () =>{
    const {email, password,name,cpassword} = user;
    if(password!==cpassword){
      return toast("Password and Cpassword Not same !")
    }
    try{
      const res = await axios.post('/api/v1/user/signup',{
        email, password, name
      })
      if(res.data.success===true){
        toast("Signup Successful !")
        history("/signin")
      }else{
        toast(res.data.message)
      }
    }catch(e){
      toast("Server Not Working !")
    }
    setUser({name:"",email:"",password:"",cpassword:""})
  }
  return (
    <div className="section1">
      <div className="form-card">
        <h2 className="form-title">Signup</h2>
        <br />
        <div className="form-input-lable">Name</div>
        <input type="text" className="form-input"  name="name" value={user.name} onChange={onInputeChange} />
        <br />
        <div className="form-input-lable">Email</div>
        <input type="text" className="form-input"  name="email" value={user.email} onChange={onInputeChange} />
        <br />
        <div className="form-input-lable">Password</div>
        <input type="text" className="form-input"  name="password" value={user.password} onChange={onInputeChange} />
        <br />
        <div className="form-input-lable">C-Password</div>
        <input type="text" className="form-input" name="cpassword" value={user.cpassword} onChange={onInputeChange} />
        <br />
        {/* <div class="form-input-btn">Name</div> */}
        <div className="flex-center">
          <button className="form-btn" onClick={onSubmitButton} >SIGNUP</button>
        </div>
        <p>
          I have an Account <a href="/">Signin</a>
        </p>
      </div>
    </div>

  )
}

export default Signup