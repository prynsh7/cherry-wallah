import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home';

import { ROUTES } from './RouterConfig';
import UserLayout from '../components/Layout/UserLayout'
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import UserRegister from '../pages/Auth/UserRegister';
import RegisterDoctor from '../pages/Auth/RegisterDoctor';
import DoctorLayout from '../components/Layout/DoctorLayout';
import DoctorHome from '../pages/Doctor';
import NotFound from '../pages/NotFound/NotFound';
import Patients from '../pages/Doctor/Patients/Patients';
import Appointments from '../pages/Doctor/Appointments/Appointments';
import Chat from '../pages/Doctor/Chat/Chat';
import Calender from '../pages/Doctor/Calender/Calender';
import Settings from '../pages/Doctor/Settings/Settings';
import About from '../pages/About/About';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import NavbarLogin from '../components/Navbar/NavbarLogin';
import DoctorsList from '../pages/DoctorsList/DoctorsList';
import DoctorProfile from '../pages/DoctorProfile/DoctorProfile';
import UpcomingAppointment from '../pages/UpcomingAppointment/UpcomingAppointment';
import CompletedAppoinment from '../pages/CompletedAppoinment/CompletedAppoinment';

const Router = () => {

  const RouteWithoutRole = () => {
    return (
      <>

        <NavbarLogin />
        <Outlet />
        <Footer />
      </>
    );
  }

  const RouteWithUser = ({ Element }) => {
    return (
      <>
        <UserLayout>
          <Outlet />
        </UserLayout>
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithoutRole />}>
          <Route index element={<Home />}></Route>
          <Route exact path={ROUTES.About} element={<About />}></Route>
          <Route exact path={ROUTES.DoctorsList} element={<DoctorsList />}></Route>
          <Route exact path={ROUTES.DoctorProfile} element={<DoctorProfile />}></Route>
          <Route exact path={ROUTES.UpcomingAppointment} element={<UpcomingAppointment />}></Route>
          <Route exact path={ROUTES.CompletedAppoinment} element={<CompletedAppoinment />}></Route>
          {/* <Route index element={<RouteWithRole Element={Category} />}></Route>
        <Route index path="" element={<RouteWithRole Element={Category} />}></Route>
        <Route exact path={ROUTES.Produts} element={<RouteWithRole Element={Products} />}></Route>
        <Route exact path={ROUTES.ProductDetail} element={<RouteWithRole Element={ProductPage} />}></Route> */}

        </Route>

        <Route exact path={ROUTES.Login} element={<Login />}></Route>
        <Route exact path={ROUTES.Register} element={<Register />}></Route>
        <Route exact path={ROUTES.UserRegister} element={<UserRegister />}></Route>
        <Route exact path={ROUTES.DoctorRegister} element={<RegisterDoctor />}></Route>



        <Route exact path={ROUTES.Doctor.root} element={<DoctorLayout />}>
          <Route index path="" element={<DoctorHome />}></Route>
          <Route exact path={ROUTES.Doctor.patients} element={<Patients />}></Route>
          <Route exact path={ROUTES.Doctor.appointments} element={<Appointments />}></Route>
          <Route exact path={ROUTES.Doctor.chats} element={<Chat />}></Route>
          <Route exact path={ROUTES.Doctor.calender} element={<Calender />}></Route>
          <Route exact path={ROUTES.Doctor.settings} element={<Settings />}></Route>

          <Route path='*' element={<NotFound />} />
        </Route>

        {/*
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>



        //User Profile
        <Route exact path={ROUTES.User.root} element={<RouteWithUser Element={User} />}></Route>
        <Route exact path={ROUTES.User.address} element={<RouteWithUser Element={UserAddresses} />}></Route>
        <Route exact path={ROUTES.User.password} element={<RouteWithUser Element={UserPassword} />}></Route>
        <Route exact path={ROUTES.User.coupons} element={<RouteWithUser Element={UserCoupons} />}></Route>
        <Route exact path={ROUTES.User.loyaltyPoints} element={<RouteWithUser Element={UserLoyaltyPoints} />}></Route> */}
      </Routes>
    </div>
  )
}

export default Router