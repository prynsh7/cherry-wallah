import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import SideNav from '../User/Navbar'
import Footer from '../Footer'
import NavbarLogin from '../Navbar/NavbarLogin'
import NavbarPatient from '../Navbar/NavbarPatient'
import { ROUTES } from '../../routes/RouterConfig'

const UserLayout = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (!user) {
            window.location.href = ROUTES.Login
        }
    }, [])

    return (
        user && user.role === 'patient' ? <div className='bg-neutral-3'>
            <NavbarPatient user={user} isAuth={true} />

            <div className="col-span-12">
                {children}
            </div>
        </div>
            : null

    )
}

export default UserLayout