import React from 'react'
import Navbar from '../../components/Navbar'
import Category from '../../components/User/Category'
import Footer from '../../components/Footer'
import Button from '../../components/Button/Button'
import {BsFillFunnelFill} from 'react-icons/bs'
import MainLayout from '../../components/Layout/MainLayout'


const Home = () => {

  return (
    <MainLayout>
      <Category />
    </MainLayout>
  )


}

export default Home