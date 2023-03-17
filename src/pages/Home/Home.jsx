import React from 'react'
import Navbar from '../../components/Navbar'
import Category from '../../components/User/Category'
import Footer from '../../components/Footer'
import Button from '../../components/Button/Button'

const Home = () => {

    return (
      <div>
        <Navbar/>
        <Category/>
        <Button text={"Hello"}/>
        <Footer/>
      </div>
    )

  
}

export default Home