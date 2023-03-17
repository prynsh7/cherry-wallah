import React from 'react'
import Navbar from '../../components/Navbar'
import Category from '../../components/User/Category'
import Footer from '../../components/Footer'
import UserLayout from '../../components/User/Layout'
import Button from '../../components/Button/Button'
import {BsFillFunnelFill} from 'react-icons/bs'


const Home = () => {

  return (
    <UserLayout>
      <Category />
    </UserLayout>
  )


}

export default Home