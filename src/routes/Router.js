import React, { useEffect, useState } from 'react'
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
import Refrral from '../pages/Doctor/Refrral/Refrral';
import Timeslot from '../pages/Doctor/Timeslot';
import AppointmentHistory from '../pages/Doctor/AppointmentHistory/AppointmentHistory';
import PatientAppointmentDetails from './../pages/UpcomingAppointment/AppointmentDetails'


// admin
import AdminDashboard from './../pages/Admin/Dashboard'
import Admin from './../pages/Admin/Admin'
import Doctor from './../pages/Admin/Doctor'
import Patient from './../pages/Admin/Patient'
import AppointmentList from './../pages/Admin/AppointmentList'
import DoctorDetails from './../pages/Admin/DoctorDetails'
import PatientDetails from './../pages/Admin/PatientDetails'
import AppointmentDetails from './../pages/Admin/AppointmentDetails'
import AdminLayout from '../components/Layout/AdminLayout';




const Router = () => {

  const RouteWithoutRole = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

   useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
   }, [localStorage.getItem('user')])


    return (
      <>
        <NavbarPatient user={user ? user : null} isAuth={user ? true : false} />
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
          <Route exact path={ROUTES.Doctors} element={<DoctorsList />}></Route>
          <Route exact path={ROUTES.DoctorDetails} element={<DoctorProfile />}></Route>
          <Route exact path={"*"} element={<NotFound />}></Route>
        </Route>

        // PATIENT ROUTES
        <Route exact path={ROUTES.User.root} element={<RouteWithUser />}>
          {/* <Route path="" element={<Home />}></Route> */}
          {/* <Route exact path={ROUTES.User.About} element={<About />} />
          <Route path={ROUTES.User.DoctorsList} element={<DoctorsList />} />
          <Route exact path={ROUTES.User.DoctorProfile} element={<DoctorProfile />} /> */}
          <Route exact path={ROUTES.User.UpcomingAppointment} element={<UpcomingAppointment />} />
          <Route exact path={ROUTES.User.AppintmentInfo+'/:appointmentId'} element={<PatientAppointmentDetails />} />
          <Route exact path={ROUTES.User.CompletedAppoinment} element={<CompletedAppoinment />} />
          <Route exact path={ROUTES.User.Appointment} element={<Appointment />} />
          <Route exact path={ROUTES.User.AppointmentPD} element={<AppointmentPD />} />
          <Route exact path={ROUTES.User.AppointmentConfirmation} element={<AppointmentConfirmation />} />
          <Route exact path={ROUTES.User.CompletedAppointmentDetails} element={<CompletedAppointmentDetails />} />
          <Route exact path={ROUTES.User.AppointmentReportDetailsField} element={<AppointmentReportDetailsField />} />
          <Route exact path={ROUTES.User.UserSettings} element={<UserSettings />} />
          <Route exact path={"*"} element={<NotFound />}></Route>

        </Route>





        //DOCTOR ROUTES
        <Route exact path={ROUTES.Doctor.root} element={<DoctorLayout />}>
          <Route index path="" element={<DoctorHome />}></Route>
          <Route exact path={ROUTES.Doctor.patients} element={<Patients />}></Route>
          <Route exact path={ROUTES.Doctor.appointments} element={<Appointments />}></Route>
          <Route exact path={ROUTES.Doctor.chats} element={<Chat />}></Route>
          <Route exact path={ROUTES.Doctor.calender} element={<Calender />}></Route>
          <Route exact path={ROUTES.Doctor.settings} element={<Settings />}></Route>
          <Route exact path={ROUTES.Doctor.Refrral} element={<Refrral />}></Route>
          <Route exact path={ROUTES.Doctor.Timeslot} element={<Timeslot />}></Route>
          <Route exact path={ROUTES.Doctor.AppointmentHistory} element={<AppointmentHistory />}></Route>
          <Route exact path={ROUTES.Doctor.AppointmentReport+'/:appointmentId'} element={<AppointmentReportDetailsField />}></Route>

          <Route path='*' element={<NotFound />} />
        </Route>

        //ADMIN ROUTES
        <Route exact path={ROUTES.Admin.root} element={<AdminLayout />}>
          <Route index path={ROUTES.Admin.Dashboard} element={<AdminDashboard />}></Route>
          <Route index path={ROUTES.Admin.Admin} element={<Admin />}></Route>
          <Route index path={ROUTES.Admin.Doctor} element={<Doctor />}></Route>
          <Route index path={ROUTES.Admin.DoctorDetails} element={<DoctorDetails />}></Route>
          <Route index path={ROUTES.Admin.PatientDetails} element={<PatientDetails />}></Route>
          <Route index path={ROUTES.Admin.AppointmentDetails} element={<AppointmentDetails />}></Route>
          <Route index path={ROUTES.Admin.Patient} element={<Patient />}></Route>
          <Route index path={ROUTES.Admin.AppointmentList} element={<AppointmentList />}></Route>


          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  )
}

export default Router