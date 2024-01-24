import React, { useState } from 'react'
import upload from '../img/upload-icon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Upload() {

    const [file, setFile] = useState();
    const { loginUser, setLoginUser, setLoading } = useAuth()
    const notify = (a) => toast(a);
    const history = useNavigate();
    const fileUpload = (e) => {
        const formData = new FormData();
        setFile(e.target.files[0])

    }


    const uploadBtn = async () => {

        if (!loginUser) {
            setFile("")
            setLoading(false)
            return toast("Please Login !")
        }
        if (file.size > 50 * 1024 * 1024) {
            setLoading(false)
            setFile("")
            return toast("file size must be below 50 Mb")

        }
        const formData = new FormData();
        formData.append('file', file);
        setLoading(true)
        try {
            let res = await fetch('/api/v1/file/upload', {
                method: "POST",
                body: formData
            })
            res = await res.json()
            console.log(res);
            toast("Upload Sucessful !")
            setFile("");
            history(`/url/${res.file._id}`)
        } catch (e) {

            notify("Error !")
        }
        setLoading(false)

    }

    return (
        <div className="upload-file" id="file-name">
           
            {!file ? <>
                <input className="file-input" type="file" onChange={fileUpload} />
                <img
                    style={{ height: 40, filter: "invert(100%)" }}
                    src={upload}
                    alt="uploading"
                />
                <div>
                    <h2>Click Here to upload files</h2>
                    <p>(Max 50 files and below 50mb)</p>
                </div>
            </> : <>
                <img style={{ height: 40, filter: "invert(100%)" }} src={upload} alt="uploading" />
                <p>name: {file.name}</p>
                <p>size: {(file.size / 1024) / 1024} MB</p>
                <p> Type: {file.type} </p>
                <br />
                <button id="upload-btn" onClick={uploadBtn}>Upload</button>
                <div className="cancel-btn" onClick={() => setFile("")}>X</div>
            </>
            }
        </div>
    )
}

export default Upload