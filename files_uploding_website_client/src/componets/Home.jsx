import React from 'react'
import cloud from '../img/cloud.webp'
import lock from '../img/lock.webp'
import man1 from '../img/man1.webp'
import pc from '../img/pc.webp'
import time from '../img/time.webp'
import woman1 from '../img/woman1.webp'
import woman2 from '../img/woman2.webp'
import Upload from './Upload'
function Home() {
  return (
    <>
      <>
        <div className="section1" >
          <h1>Upload files, share them easily</h1>
          <p>
            File upload made easy. Upload files up to 50MB and transfer files easily
          </p>
          <br />
          <Upload />
          <br />
          <p>
            Your files will be stored for maximum 30 days as a free user. Premium
            users can upload files and store them forever.
          </p>
        </div>{" "}
        <br />
        <div className="section2">
          <h2 className="section-title">FAQ</h2>
          <br />
          <div className="grid-sections">
            <div className="card">
              <h2>Is it free ?</h2>
              <br />
              <p>
                Uploading your files is totally free. You can upload files up to 10 GB
                as a free user but your files can be stored for maximum 30 days if you
                are a free user. You can optionally purchase a premium account to
                increase file size and storage up to 1 TB and store them forever.
              </p>
            </div>
            <div className="card">
              <h2>What can I upload ?</h2>
              <br />
              <p>
                Uploading your files is totally free. You can upload files up to 10 GB
                as a free user but your files can be stored for maximum 30 days if you
                are a free user. You can optionally purchase a premium account to
                increase file size and storage up to 1 TB and store them forever.
              </p>
            </div>
            <div className="card">
              <h2>How do I share ? </h2>
              <br />
              <p>
                It is really easy to share your files. After you complete an upload, a
                download link will be generated. You can share this link with anyone
                and when they visit this link they will see a download button and get
                your files easily.
              </p>
            </div>
          </div>
        </div>
        <div className="section3" id='sec3'>
          <div className="info-section">
            <img src={cloud} alt="cloud png" />
            <div className="info">
              Upload any kind of file up to 50MB without any restriction or necessity
              to register. With the high speed easyupload.io servers, file upload will
              never be the same again. Register for free to keep track of your
              uploaded files or other advance features.
            </div>
          </div>
          <div className="info-section">
            <div className="info">
              Password-protect your uploaded files to keep your files secure. With
              access control, you will be sure that only the people you want can
              download your files.
            </div>
            <img src={lock} alt="cloud png" />
          </div>
          <div className="info-section">
            <img src={time} alt="cloud png" />
            <div className="info">
              With expire duration option, you can set your files to expire after some
              amount of time. This way, your files will only be on our servers for the
              duration you set. You can select durations of 7 days,15 days,30 days or
              unlimited days.
            </div>
          </div>
          <div className="info-section">
            <div className="info">
              Uploading your files is totally free. You can upload files up to 10 GB
              as a free user but your files can be stored for maximum 30 days if you
              are a free user. You can optionally purchase a premium account to
              increase file size and storage up to 500 GB and store them forever.
            </div>
            <img src={pc} alt="cloud png" />
          </div>
        </div>
        <div className="section4">
          <div className="grid-sections">
            <div className="card">
              <img src={man1} alt="man img" />
              <br />
              <h2>Boris V.</h2>
              <br />
              <p>
                Amazing service ! We were tired of sending large files via e-mail and
                getting errors. Now, everything solved. Thanks for the great idea.
              </p>
            </div>
            <div className="card">
              <img src={woman1} alt="man img" />
              <br />
              <h2>Eva N. </h2>
              <br />
              <p>
                Instead of using an external hard-disk, I am using easyupload.io with
                huge storage space. I can download them whenever I need them.
              </p>
            </div>
            <div className="card">
              <img src={woman2} alt="man img" />
              <br />
              <h2>Veronica D.</h2>
              <br />
              <p>
                Thanks for providing this service, I don't need to send my files one
                by one to each of my friends anymore.
              </p>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default Home