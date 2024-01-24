import React, { useState } from 'react'
import userImg from '../img/man1.webp'
import { useAuth } from '../context/authContext'
import { colors } from '@mui/material';
function Profile() {
    const [edit, setEdit] = useState(false);
    const { loginUser } = useAuth()
    return (
        <div className='section1'>
            <div className="card">
                <img src={userImg} alt="" />
                {
                    edit ? <>
                        <h1><input type="text" style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "white",
                            textAlign:"center",
                            outline:"none",

                            fontSize: "inherit", // Optionally, use the same font size as h1
                        }} value={loginUser.name} /></h1>
                        <p>{loginUser.email}</p>
                
                        <div className="flex-center">
                            <button className="form-btn" onClick={() => setEdit(false)}>SAVE</button>
                        </div>
                    </> :
                        <>
                            <h1>{loginUser && loginUser.name}</h1>
                            <p>{loginUser && loginUser.email}</p>
                            <i>********</i>
                            <div className="flex-center">
                                <button className="form-btn" onClick={() => setEdit(true)}>EDIT</button>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Profile