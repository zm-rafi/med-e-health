import React from 'react'
import {Route,Routes} from 'react-router-dom'
import "tailwindcss";
import Home from './pages/Home';
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appoinment from './pages/Appoinment'
import MyProfile from './pages/MyProfile'
import MyAppoinments from './pages/MyAppointments'
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appoinments' element={<MyAppoinments />} />
        <Route path='/appoinment/:docId' element={<Appoinment />} />
      </Routes>
    </div>
  )
}

export default App