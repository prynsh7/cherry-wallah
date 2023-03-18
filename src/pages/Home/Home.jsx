import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import UserLayout from '../../components/User/Layout'
import { Outlet } from 'react-router-dom'



const Home = () => {

  return (
    <div>
    <Navbar/>
      <Outlet/>
    <Footer/>
    </div>
  )


}

export default Home