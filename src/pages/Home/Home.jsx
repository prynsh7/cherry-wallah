import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import NavbarLogin from '../../components/Navbar/NavbarLogin'



const Home = () => {

  return (
    <div>
    <NavbarLogin multimenu={true}/>
      <Outlet/>
    <Footer/>
    </div>
  )


}

export default Home