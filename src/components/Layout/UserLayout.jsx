import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SideNav from '../User/Navbar'
import Footer from '../Footer'
import NavbarLogin from '../Navbar/NavbarLogin'
import NavbarPatient from '../Navbar/NavbarPatient'
import { ROUTES } from '../../routes/RouterConfig'

const UserLayout = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    useEffect(() => {
        if (!user) {
            window.location.href = ROUTES.Login
        }
    }, [localStorage.getItem('user')])

    return (
        user  ? <div className='bg-neutral-3'>
            <NavbarPatient user={user} isAuth={true} />

            <div className="col-span-12">
                {children}
            </div>
        </div>
            : null

    )
}

export default UserLayout