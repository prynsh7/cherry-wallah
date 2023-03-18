import React from 'react'
import Navbar from '../Navbar'
import SideNav from '../User/Navbar'
import Footer from '../Footer'

const UserLayout = ({ children }) => {
    return (
        <div className='bg-neutral-3'>
            <Navbar multimenu={false}/>
            <div className='container mx-auto px-[20px] py-[50px] min-h-screen grid grid-cols-12 gap-[20px]'>
                <div className='col-span-3'>
                    <SideNav />
                </div>
                <div className="col-span-9">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserLayout