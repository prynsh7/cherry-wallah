import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../Footer'

const UserLayout = ({ children }) => {
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

export default UserLayout