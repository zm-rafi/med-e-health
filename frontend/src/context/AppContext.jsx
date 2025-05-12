import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([])
  const[token,setToken]=useState('')

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message || "Failed to fetch doctors.");
      }
    } catch (error) {
      console.error("Error fetching doctor data:", error);
      toast.error(error.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  const value = {
    doctors,
    currencySymbol,
    token,setToken,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
