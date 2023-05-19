export const BASE_URL = process.env.REACT_APP_ENVIRONMENT === "development" ? "http://localhost:8000/api/" : "https://digi-ayu-backend-e0gv.onrender.com/api/";


////////////////////////////////////////////
////////////////   AUTH    /////////////////
////////////////////////////////////////////
export const REGISTER_DOCTOR = "auth/signup/doctor";
export const REGISTER_PATIENT = "auth/signup/patient";