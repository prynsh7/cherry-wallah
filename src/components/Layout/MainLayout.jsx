import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const MainLayout = ({children}) => {
  return (
    <div>
            <Navbar />
            <div className="container mx-auto px-[20px] py-[50px]">
                {children}
            </div>
            <Footer />
        </div>
  )
}

export default MainLayout