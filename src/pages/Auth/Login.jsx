import React from 'react'
import Auth from '../../components/Layout/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/index';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

import { ROUTES } from '../../routes/RouterConfig';


const Login = () => {

    const [data, setData] = React.useState({
        phone: ''
    })

    const navigate = useNavigate();

    const [otpSent, setOtpSent] = React.useState(false)

    const [loginType, setLoginType] = React.useState('otp')

    const [loading, setLoading] = React.useState(false)

    const [confirmation, setConfirmation] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
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
                            <input name="phone" onChange={handleChange} className="border-[1px] rounded-[4px] p-[10px] mt-[5px]" placeholder="Enter Email" />
                        </div>

                        {
                            loginType === "password" ?
                                <div className="flex flex-col">
                                    <label className="text-[#333333] opacity-70 text-[14px]">Password</label>
                                    <input name="password" onChange={handleChange} className="border-[1px] rounded-[4px] p-[10px] mt-[5px]" placeholder="Enter Password" />
                                </div>
                                : null
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
                                toast.error('Some error occured')
                            }}
                        >{
                                loginType === "password" ? "Login" : "Send OTP"
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