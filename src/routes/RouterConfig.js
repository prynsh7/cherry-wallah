export const ROUTES = {
    Home: '/',
    About: '/about',
    Produts: '/products',
    ProductDetail: '/products/:id',


    Login: '/auth/login',
    Register: '/auth/signup',
    UserRegister: '/auth/register',
    DoctorRegister: '/auth/register-doctor',
    Doctor: {
        root: '/doctor',
        patients: '/doctor/patients',
        appointments: '/doctor/appointments',
        chats: '/doctor/chats',
        calender: '/doctor/calender',
        settings: '/doctor/settings',
    },
    User: {
        root: '/user',
        About: '/user/about',
        DoctorsList: '/user/DoctorsList',
        DoctorProfile: '/user/DoctorProfile',
        UpcomingAppointment: '/user/UpcomingAppointment',
        CompletedAppoinment: '/user/CompletedAppoinment',
        Appointment: '/user/Appointment',
        AppointmentPD: '/user/AppointmentPD',
        AppointmentConfirmation: '/user/AppointmentConfirmation',
        CompletedAppointmentDetails: '/user/CompletedAppointmentDetails',
        AppointmentReportDetailsField: '/user/AppointmentReportDetailsField',
        UserSettings: '/user/UserSettings',
    }
}