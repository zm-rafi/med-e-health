import React, { useContext } from 'react';
import Login from './pages/login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext.jsx';
import Navbar from './components/Navbar.jsx';
import Slidebar from './components/Slidebar.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointments from './pages/Admin/AllAppointments.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import DoctorsList from './pages/Admin/DoctorsList.jsx';

const App = () => {
  const { aToken } = useContext(AdminContext);  // Make sure the variable name is consistent here
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Slidebar/>
        <Routes>
          <Route path='/admin-dashboard'  element={<Dashboard/>}/>
          <Route path='/all-appoinements'  element={<AllAppointments/>}/>
          <Route path='/add-doctor'  element={<AddDoctor/>}/>
          <Route path='/doctor-list'  element={<DoctorsList/>}/>

        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
