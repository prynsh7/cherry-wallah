export const ROUTES = {
    Home: '/',
    About: '/about',
    Produts: '/products',
    ProductDetail: '/products/:id',
    DoctorsList: '/DoctorsList',
    DoctorProfile: '/DoctorProfile',
    UpcomingAppointment: '/UpcomingAppointment',
    CompletedAppoinment: '/CompletedAppoinment',
    Appointment: '/Appointment',
    AppointmentPD: '/AppointmentPD',

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
    User:{
        root:'/user',
        address:'/user/address',
        password:'/user/password',
        coupons:'/user/coupons',
        loyaltyPoints:'/user/loyalty-points',
    }
}