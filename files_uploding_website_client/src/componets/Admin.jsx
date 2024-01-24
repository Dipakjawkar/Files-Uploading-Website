import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Admin() {
    const [data, setData] = useState();
    const [views, setViews] = useState(0);
   const history = useNavigate()

    const getData = async () => {
        try {
            const res = await axios.get("/api/v1/file/get")
            if (res.data.success === true) {
                setData(res.data.files)
                // data.map((val)=>{
                //    return setViews(views + val.views.length)
                // })
                // setViews(data.views.length)
            }
        } catch {
            alert("error !")
        }
    }



    useEffect(() => {
        getData()
    }, [])


    const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='n-section'>
            <div className="d-cards">
                <div className="d-card">
                    <div className="d-card-title">
                        <p>Views</p>
                        <h1>
                            {data &&
                                data.map((val) => val.views.length)
                                    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                            }
                        </h1>
                    </div>
                </div>
                <div className="d-card">
                    <div className="d-card-title">
                        <p>Links</p>
                        <h1>{data && <>{data.length}</>}</h1>
                    </div>
                </div>
            </div>
            <br /><br />
            <h1>DashBord</h1>
            <br />
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th className='table-file'>File Name</th>
                            <th className='table-link'>Link Link</th>
                            <th className='table-view'>Views</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && currentItems.map((e) => {
                                return <><tr onClick={()=>history(`/url/${e._id}`)} >
                                    <td className='table-file'>{e.name}</td>
                                    <td className='table-link' >{window.location.host}/url/{e._id}</td>
                                    <td className='table-view'>{e.views.length}</td>
                                    {/* <td>
                                        <div className="d-btn-group">
                                            <div className="btn">Statistic</div>
                                        </div>
                                    </td> */}
                                </tr></>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <div className="navigation-bottom">
            {data ? <>
            <div className="pagination">
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                <div key={index}>
                  <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                </div>
              ))}
            </div>
          </> : []}
            </div>
            <br />
            <br />
        </div>
    )
}

export default Admin