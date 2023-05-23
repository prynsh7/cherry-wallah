import React from 'react'
import Auth from '../../components/Layout/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/index';
import OtpInput from '../../components/OtpInput/OtpInput';
import { ROUTES } from '../../routes/RouterConfig';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png'
import { AuthAPI } from '../../apis/authAPI';


const Regsiter = () => {

    const navigate = useNavigate()

    const [profile, setProfile] = React.useState('')

    const [data, setData] = React.useState({
        phone: ''
    })

    const [OTPReqId, setOTPReqId] = React.useState('')

    const [loading, setLoading] = React.useState(false)

    const [step, setStep] = React.useState(1)

    const [otpSent, setOtpSent] = React.useState(false)
    const [otp, setOtp] = React.useState('')

    const [confirmation, setConfirmation] = React.useState(false)

    const sendOTP = async () => {
        if (!data.phone) {
            return toast.error('Please enter phone number')
        }
        

        try {
            setLoading(true)
            const res = await AuthAPI.postSendOtp(data)
            if (res.success) {
                setOtpSent(true)
                setOTPReqId(res.data.requestId)
            }
        } catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            setLoading(false)
        }

    }

    const verifyOTP = async () => {
        if (!otp) return toast.error('Please enter OTP')

        try {
            setLoading(true)
            const res = await AuthAPI.postVerifyOtp({ otp, requestId: OTPReqId })
            if (res.success) {
                if (!res.data.newUser) return toast.error('User already exists')
                sessionStorage.setItem('xtoken', res.data.requestToken)
                navigate(ROUTES.UserRegister, { state: { phone: data.phone, profile: profile } })
            }
        } catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            setLoading(false)
        }


    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }
    return (
        <Auth>
            <div className="md:w-[100%] w-[100%] min-w-[100%] px-[36px] py-[32px] h-[100%] m-auto flex  justify-center">
                {
                    loading ? <Loader /> : null
                }
                <ToastContainer />


                <div className='items-center w-[100%] flex flex-col'>

                    <img src={logo} className='h-[80px] mb-[30px]'></img>


                    <span className=" text-center text-Medium+/Title/Small text-primary-6">Create DigiAyu Account</span>

                    {
                        step == 1 ? <div className="w-[100%] input-animation mt-[60px]">
                            <p className='text-center text-Medium+/Label/Large'>Select Your Profile</p>

                            <div className='flex gap-[20px] my-[45px]'>
                                <div className='hover:animate-shake-fast cursor-pointer bg-primary-1 w-[50%] aspect-square rounded-[8px] flex items-center justify-center flex flex-col gap-[15px]'
                                    onClick={() => {
                                        setStep(2);
                                        setProfile('patient')

                                    }}
                                >
                                    <i className="bi bi-person-fill text-primary-6 text-[20px]"></i>
                                    <p className='text-Medium+/Label/Small text-primary-8'>I am patient</p>
                                </div>

                                <div className='hover:animate-shake-fast cursor-pointer bg-primary-1 w-[50%] aspect-square rounded-[8px] flex items-center justify-center flex flex-col gap-[15px]'
                                    onClick={() => {
                                        setStep(2);
                                        setProfile('doctor')
                                    }}
                                >
                                    <i className="bi bi-hospital text-primary-6 text-[20px]"></i>
                                    <p className='text-Medium+/Label/Small text-primary-8'>I am doctor</p>
                                </div>
                            </div>
                        </div>
                            : null
                    }

                    {
                        step == 2 ?

                            <div className="input-animation mt-[90px]">
                                <div className="flex flex-col">
                                    <label className="text-[#333333] opacity-70 text-[14px]">Mobile No.</label>
                                    <input name="phone" value={
                                        data.phone
                                    } disabled={otpSent} onChange={(e) => {
                                        if (e.target.value.length <= 10) {
                                            handleChange(e)
                                        }
                                    }} className="border-[1px] rounded-[4px] p-[10px] mt-[5px]" placeholder="Enter Mobile No." />
                                </div>

                                {
                                    otpSent ? <div className="flex flex-col mt-[10px]">
                                        <label className="text-[#333333] opacity-70 text-[14px]">Enter OTP</label>
                                        <OtpInput value={otp} valueLength={6} onChange={(e) => setOtp(e)} />
                                    </div> : null

                                }



                                {!otpSent ? <div className="flex flex-row items-start justify-between gap-[10px] mt-[10px]">
                                    <input type="checkbox" name="" id="" onChange={(e) => setConfirmation(prev => !prev)} />
                                    <p className='text-[12px]'>By Checking this box, you confirm you are above 18 years of age and are agreeing to our <span className='underline cursor-pointer' onClick={() => {
                                        // router.push('/termsandconditions')
                                    }}>Terms of services</span></p>
                                </div> : null}

                                <button type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[30px]"
                                    onClick={(e) => {
                                        e.preventDefault()

                                        if (!confirmation) {
                                            toast.error('Please accept terms and conditions')
                                            return
                                        }

                                        {
                                            otpSent ? verifyOTP() : sendOTP();
                                        }
                                    }}
                                >{
                                        otpSent ? 'Verify OTP' : 'Send OTP'
                                    }</button>
                            </div>
                            : null
                    }


                    <p className='mt-[20px]' onClick={() => {
                        navigate(ROUTES.Login)
                    }} >Already have an account? <span className='underline text-primary-7 cursor-pointer'>Login</span></p>
                </div>

            </div>
        </Auth>
    )
}

export default Regsiter