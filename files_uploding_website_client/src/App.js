import React from 'react'
import Navbar from './componets/Navbar'
import Signup from './componets/Signup'
import Contact from './componets/Contact'
import Signin from './componets/Signin'
import Home from './componets/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './componets/Footer'
import { AuthProvider } from './context/authContext'
import Admin from './componets/Admin'
import UploadUrl from './componets/UploadUrl'
import Profile from './componets/Profile'
const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/dashbord' element={<Admin />}></Route>
          <Route path='/url/:id' element={<UploadUrl />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
        <Footer/>
        </AuthProvider>
    </>
  )
}

export default App