import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Chatbot from './chatbot'
const Home = () => {
  return (
    <div>
    <Header/>
    <Chatbot/>
    <SpecialityMenu/>
    <TopDoctors/>
    </div>
  )
}

export default Home