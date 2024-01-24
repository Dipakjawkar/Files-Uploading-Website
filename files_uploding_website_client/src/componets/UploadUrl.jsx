import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import cloudImg from '../img/cloud.webp'
import axios from 'axios';
import { toast } from 'react-toastify';

function UploadUrl() {

  const [data, setData] = useState();
  const { id } = useParams();

  const getData = async () => {
    try{
      const res = await axios.get("/api/v1/file/"+id)
      if (res.data.success === true) {
        setData(res.data.file);
        console.log(res.data.file)
      }
    }catch(e){
      return toast("error")
    }
    
  }


  const handleDownload = () => {
    // Simulate a click on an anchor with the download attribute
    const downloadLink = document.createElement('a');
    downloadLink.href = data.uri;
    downloadLink.download = data.name || 'downloaded_file';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <div className="section1">
        {
          data ? <>
          
          <div className="card">
          
          <div className="card">
            
            <p>File Name : {data.name}</p>
          </div>

          <p>File Size : {data.size}</p>
          <p>Date : 13-07-2001</p>
          <p>Views : {data.views.length} </p>
          <br />
          <img className='img-url-section' src={data.uri} alt="" />
          <br />
          <div className='card'>{window.location.host}/url/{data._id}</div>
          <br />
          <div className="btn-group">
         
            <button onClick={()=>{
              navigator.clipboard.writeText(`${window.location.host}/url/${data._id}`)
              toast("clipboard !")
            }} className="btn" >Copy</button>
            <button onClick={handleDownload} className="btn" download >Download</button>
          </div>

        </div>
          
          </> : <></>
        }

      </div>
    </>
  )
}

export default UploadUrl