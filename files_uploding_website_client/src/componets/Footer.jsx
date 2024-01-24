import React from 'react'
import { ToastContainer } from 'react-toastify'


function Footer() {
  return (
    <footer style={{ position: "relative" }}>
       <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
      <div className="left-footer">
        <div className="title">
          <img style={{ height: 25, padding: "0 5px" }} src="./cloud.webp" alt="" />
          Fill Uploding{" "}
        </div>
        <i>
          <p style={{ fontSize: 10 }}>
            Provide Flexiblity to share files Online...
          </p>
        </i>
        <br />
        <br />
        <p>
          Easyupload.io offers free file upload and transfer service without limits.
          Upload files &amp; share them with your friends and colleagues without
          time, download or bandwidth limit. Easyupload.io offers these services for
          free any without need of registration.
        </p>
      </div>
      <p className="copyright">Copyright © 2023, easyupload.io</p>
    </footer>

  )
}

export default Footer