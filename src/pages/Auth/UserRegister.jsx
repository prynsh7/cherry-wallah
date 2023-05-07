import React from 'react'
import Auth from '../../components/Layout/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/index';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

import { ROUTES } from '../../routes/RouterConfig';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';


const UserRegister = () => {

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


                    <span className=" text-center text-Medium+/Title/Small text-primary-6">Create DigiAyu Account</span>

                    <div className="w-[100%] input-animation mt-[90px] flex flex-col gap-[10px]">

                        <div className='grid grid-cols-2 gap-[10px]'>
                            <Input name='first_name' label="First Name" placeholder='Enter First Name' />
                            <Input name='first_name' label="Last Name" placeholder='Enter Last Name' />
                            <div className='col-span-2'>
                                <Input name='email' label="Email" placeholder='Enter Email' />
                            </div>
                            <div className='col-span-2'>
                                <Input name='phone' label="Phone" placeholder='Enter Phone' />
                            </div>

                            <div className='col-span-1'>
                                <Input name='phone' label="Age" type='number' placeholder='Enter Age' />
                            </div>
                            <div className='col-span-1'>
                                <Select label={"Gender"} options={[
                                    {
                                        label : "Male",
                                        value: "male"
                                    },
                                    {
                                        label : "Female",
                                        value: "female"
                                    }
                                ]} />
                            </div>


                        </div>






                        <button type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[30px]"
                            onClick={(e) => {
                                e.preventDefault()
                                toast.error('Some error occured')
                                navigate(ROUTES.DoctorRegister)
                            }}
                        >Submit</button>
                    </div>



                </div>

            </div>
        </Auth>
    )
}

export default UserRegister