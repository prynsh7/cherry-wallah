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
import Appointment from '../pages/Appointment/Appointment';
import AppointmentPD from '../pages/Appointment/AppointmentPD';
import AppointmentConfirmation from '../pages/Appointment/AppointmentConfirmation';
import CompletedAppointmentDetails from '../pages/Appointment/CompletedAppointmentDetails';
import AppointmentReportDetailsField from '../pages/Appointment/AppointmentReportDetailsField';
import UserSettings from '../pages/User/UserSettings';
import NavbarPatient from '../components/Navbar/NavbarPatient';



const Router = () => {

  const RouteWithoutRole = () => {

    const user = JSON.parse(localStorage.getItem('user'))


    return (
      <>
        <NavbarPatient isAuth={user ? true : false} />
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

        <Route exact path={ROUTES.Login} element={<Login />}></Route>
        <Route exact path={ROUTES.Register} element={<Register />}></Route>
        <Route exact path={ROUTES.UserRegister} element={<UserRegister />}></Route>
        <Route exact path={ROUTES.DoctorRegister} element={<RegisterDoctor />}></Route>

        <Route exact path={ROUTES.Home} element={<RouteWithoutRole />}>
          <Route index element={<Home />}></Route>
          <Route exact path={ROUTES.About} element={<About />}></Route>
          <Route exact path={"*"} element={<NotFound />}></Route>
        </Route>

        // PATIENT ROUTES
        <Route exact path={ROUTES.User.root} element={<RouteWithUser />}>
          <Route index element={<Home />}></Route>
          <Route exact path={ROUTES?.User?.About} element={<About />}></Route>
          <Route exact path={ROUTES?.User?.DoctorsList} element={<DoctorsList />}></Route>
          <Route exact path={ROUTES?.User?.DoctorProfile} element={<DoctorProfile />}></Route>
          <Route exact path={ROUTES?.User?.UpcomingAppointment} element={<UpcomingAppointment />}></Route>
          <Route exact path={ROUTES?.User?.CompletedAppoinment} element={<CompletedAppoinment />}></Route>
          <Route exact path={ROUTES?.User?.Appointment} element={<Appointment />}></Route>
          <Route exact path={ROUTES?.User?.AppointmentPD} element={<AppointmentPD />}></Route>
          <Route exact path={ROUTES?.User?.AppointmentConfirmation} element={<AppointmentConfirmation />}></Route>
          <Route exact path={ROUTES?.User?.CompletedAppointmentDetails} element={<CompletedAppointmentDetails />}></Route>
          <Route exact path={ROUTES?.User?.AppointmentReportDetailsField} element={<AppointmentReportDetailsField />}></Route>
          <Route exact path={ROUTES?.User?.UserSettings} element={<UserSettings />}></Route>


        </Route>





        //DOCTOR ROUTES
        <Route exact path={ROUTES.Doctor.root} element={<DoctorLayout />}>
          <Route index path="" element={<DoctorHome />}></Route>
          <Route exact path={ROUTES.Doctor.patients} element={<Patients />}></Route>
          <Route exact path={ROUTES.Doctor.appointments} element={<Appointments />}></Route>
          <Route exact path={ROUTES.Doctor.chats} element={<Chat />}></Route>
          <Route exact path={ROUTES.Doctor.calender} element={<Calender />}></Route>
          <Route exact path={ROUTES.Doctor.settings} element={<Settings />}></Route>

          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  )
}

export default Router