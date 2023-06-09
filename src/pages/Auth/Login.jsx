import React from 'react'
import Auth from '../../components/Layout/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/index';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

import { ROUTES } from '../../routes/RouterConfig';
import { AuthAPI } from '../../apis/authAPI';
import OtpInput from '../../components/OtpInput/OtpInput';


const Login = () => {

    const [data, setData] = React.useState({
        phone: '',
        password: '',
    })

    const navigate = useNavigate();

    const [otpSent, setOtpSent] = React.useState(false)

    const [otp, setOtp] = React.useState('')

    const [loginType, setLoginType] = React.useState('otp')

    const [loading, setLoading] = React.useState(false)

    const [confirmation, setConfirmation] = React.useState(false)

    const [otpReqId, setOtpReqId] = React.useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {

        if (!data.phone || !data.password) {
            return toast.error("Please fill all the details")
        }

        try {
            setLoading(true)
            const res = await AuthAPI.postLogin(data)
            console.log(res);
            if (res.success) {
                toast.success('Registered Successfully')
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('refreshToken', res.data.refreshToken)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                if (res.data.user.role === 'doctor') {
                    if (res.data.doctor.profile_completed) navigate(ROUTES.Doctor.root)
                    else navigate(ROUTES.DoctorRegister)
                }
                if (res.data.user.role === 'patient') navigate(ROUTES.Home)
                if (res.data.user.role === 'admin') {
                    navigate(ROUTES.Admin.root)
                    console.log('here');
                }
            }
        }
        catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || err.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            setLoading(false)
        }

    }

    const sendOtp = async () => {
        try {
            setLoading(true)
            const res = await AuthAPI.postSendOtp({ phone: data.phone })
            if (res.success) {
                toast.success('OTP Sent Successfully')
                setOtpSent(true)
                setOtpReqId(res.data.requestId)
            }
        }
        catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || err.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            setLoading(false)
        }
    }


    const verifyOtp = async () => {
        try {
            setLoading(true)
            const res = await AuthAPI.postVerifyOtp({ requestId: otpReqId, otp: otp,  })
            if (res.success) {

                toast.success('OTP Verified Successfully')
                sessionStorage.setItem('token', res.data.token)
                if(res.data.newUser) return toast.error('User Not Registered, Please Register First')
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('refreshToken', res.data.refreshToken)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                if (res.data.user.role === 'doctor') {
                    console.log(res.data.doctor);
                    if (res.data.doctor?.profile_completed) navigate(ROUTES.Doctor.root)
                    else navigate(ROUTES.DoctorRegister)
                }
                if (res.data.user.role === 'patient') navigate(ROUTES.Home)
            }
        }
        catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || err.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            setLoading(false)
        }
    }



    return (
        <Auth>
            <div className="md:w-[100%] min-w-[100%]  w-[100%] px-[36px] py-[32px] h-[100%] m-auto flex  justify-center">
                {
                    loading ? <Loader /> : null
                }
                <ToastContainer />


                <div className='items-center w-[100%] flex flex-col'>

                    <img src={logo} className='h-[80px] mb-[30px]'></img>


                    <span className=" text-center text-Medium+/Title/Small text-primary-6">Log in to DigiAyu</span>

                    <div className="w-[100%] input-animation mt-[90px] flex flex-col gap-[10px]">
                        <div className="flex flex-col">
                            <label className="text-[#333333] opacity-70 text-[14px]">Email / Mobile No.</label>
                            <input value={data.phone} name="phone" onChange={(e) => {
                                if (e.target.value.length < 11) {
                                    handleChange(e)
                                }
                            }} className="border-[1px] rounded-[4px] p-[10px] mt-[5px]" placeholder="Enter Email" />
                        </div>

                        {
                            loginType === "password" ?
                                <div className="flex flex-col">
                                    <label className="text-[#333333] opacity-70 text-[14px]">Password</label>
                                    <input value={data.password} type='password' name="password" onChange={handleChange} className="border-[1px] rounded-[4px] p-[10px] mt-[5px]" placeholder="Enter Password" />
                                </div>
                                : 
                                null
                            }
                        {
                            loginType === "otp" && otpSent?
                            <div className="flex flex-col">
                                <label className="text-[#333333] opacity-70 text-[14px]">Enter OTP</label>
                                        <OtpInput value={otp} valueLength={6} onChange={(e) => setOtp(e)} />
                            </div>
                            :
                            null
                        }


                        {
                            loginType === "password" ?
                                <div className="flex flex-row items-center gap-[10px] mt-[10px]">
                                    <input type="checkbox" checked={false} name="" id="" onChange={(e) => setLoginType('otp')} />
                                    <p className='text-[12px] text-primary-6'>Login with OTP instead of password</p>
                                </div> :
                                <div className="flex flex-row items-center gap-[10px] mt-[10px]">
                                    <input type="checkbox" checked={false} name="" id="" onChange={(e) => setLoginType('password')} />
                                    <p className='text-[12px] text-primary-6'>Login with password instead of OTP</p>
                                </div>
                        }

                        <button type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[30px]"
                            onClick={(e) => {
                                e.preventDefault()
                                {
                                    loginType === "password" ? handleSubmit() : loginType === "otp"&&!otpSent ? sendOtp() : verifyOtp()
                                }
                            }}
                        >{
                                loginType === "password" ? "Login" : loginType === "otp"&&!otpSent ? "Send OTP" : "Verify OTP"
                            }</button>
                    </div>


                    <p className='mt-[20px]' onClick={() => {
                        navigate(ROUTES.Register)
                    }} >Don't Have an Account? <span className='underline cursor-pointer text-primary-6'>Register</span></p>
                </div>

            </div>
        </Auth>
    )
}

export default Login