export const ROUTES = {
    Home: '/',
    About: '/about',
    Services: '/services',
    Contact: '/contact',
    Doctors: '/doctors',
    DoctorDetails: '/doctors/detail/:id',
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
        Refrral: '/doctor/Refrral',
        Timeslot: '/doctor/Timeslot',
        AppointmentHistory: '/doctor/AppointmentHistory',
        AppointmentReport: '/doctor/AppointmentReport',
        AppointmentReportDetailsField: '/doctor/AppointmentReportDetailsField',
    },
    User: {
        root: '/user',
        About: '/user/about',
        DoctorsList: '/user/doctors',
        DoctorProfile: '/user/doctor/:id',
        UpcomingAppointment: '/user/UpcomingAppointment',
        CompletedAppoinment: '/user/CompletedAppoinment',
        Appointment: '/user/Appointment',
        AppointmentPD: '/user/AppointmentPD',
        AppointmentConfirmation: '/user/AppointmentConfirmation',
        CompletedAppointmentDetails: '/user/CompletedAppointmentDetails',
        AppointmentReportDetailsField: '/user/AppointmentReportDetailsField',
        UserSettings: '/user/UserSettings',
        AppintmentInfo: '/user/AppintmentInfo',
    },
    Admin: {
        root: '/admin',
        Dashboard: '/admin/dashboard',
        Admin: '/admin/Admin',
        Doctor: '/admin/Doctor',
        DoctorDetails: '/admin/Doctor/id',
        PatientDetails: '/admin/Patient/id',
        AppointmentDetails: '/admin/AppointmentDetails',
        AppointmentList: '/admin/AppointmentList',
        Patient: '/admin/Patient'
    }
}