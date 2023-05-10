import React from 'react'
import { Route, Routes } from 'react-router-dom'

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


const Router = () => {

  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Element />
      </>
    );
  }

  const RouteWithUser = ({ Element }) => {
    return (
      <>
        <UserLayout>
          <Element />
        </UserLayout>
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}>
          {/* <Route index element={<RouteWithRole Element={Category} />}></Route>
        <Route index path="" element={<RouteWithRole Element={Category} />}></Route>
        <Route exact path={ROUTES.Produts} element={<RouteWithRole Element={Products} />}></Route>
        <Route exact path={ROUTES.ProductDetail} element={<RouteWithRole Element={ProductPage} />}></Route> */}

        </Route>
        
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
        <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Login} />}></Route>
        <Route exact path={ROUTES.Register} element={<RouteWithRole Element={Register} />}></Route>
        <Route exact path={ROUTES.UserRegister} element={<RouteWithRole Element={UserRegister} />}></Route>
        <Route exact path={ROUTES.DoctorRegister} element={<RouteWithRole Element={RegisterDoctor} />}></Route>



        <Route exact path={ROUTES.Doctor.root} element={<RouteWithRole Element={DoctorLayout} />}>
          <Route index path="" element={<RouteWithRole Element={DoctorHome} />}></Route>
          <Route exact path={ROUTES.Doctor.patients} element={<RouteWithRole Element={Patients} />}></Route>
          <Route exact path={ROUTES.Doctor.appointments} element={<RouteWithRole Element={Appointments} />}></Route>
          <Route exact path={ROUTES.Doctor.chats} element={<RouteWithRole Element={Chat} />}></Route>
          <Route exact path={ROUTES.Doctor.calender} element={<RouteWithRole Element={Calender} />}></Route>
          <Route exact path={ROUTES.Doctor.settings} element={<RouteWithRole Element={Settings} />}></Route>

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