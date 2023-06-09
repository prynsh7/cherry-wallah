import React, { useEffect } from 'react'
import Auth from '../../components/Layout/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/index';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

import { ROUTES } from '../../routes/RouterConfig';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';
import { AuthAPI } from '../../apis/authAPI';


const UserRegister = () => {

    const [data, setData] = React.useState({
        phone: '',
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        gender: '',
        password: '',
    })

    const navigate = useNavigate();

    const location = useLocation();

    const { state } = location;

    const [loading, setLoading] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        try {
            const res = data?.profile == "patient" ? await AuthAPI.postRegisterPatient({ ...data, name: data.first_name + ' ' + data.last_name }) : await AuthAPI.postRegisterDoctor({ ...data, name: data.first_name + ' ' + data.last_name })

            if (res.success) {
                toast.success('Registered Successfully')
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('refreshToken', res.data.refreshToken)
                localStorage.setItem('user', JSON.stringify(res.data.user))

                setTimeout(() => {
                    data?.profile === 'doctor' ? navigate(ROUTES.DoctorRegister) :
                        navigate(ROUTES.User.root)
                }, 1000)

            }
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (state?.phone) {
            setData(prev => ({ ...prev, phone: state.phone }))
            setData(prev => ({ ...prev, profile: state.profile }))
        }
    }, [state])
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
                            <Input name='first_name' label="First Name" placeholder='Enter First Name' value={data.first_name} handleChange={handleChange} />
                            <Input name='last_name' label="Last Name" placeholder='Enter Last Name' value={data.last_name} handleChange={handleChange} />
                            <div className='col-span-2'>
                                <Input name='email' label="Email" placeholder='Enter Email' value={data.email} handleChange={handleChange} />
                            </div>
                            <div className='col-span-2'>
                                <Input disabled name='phone' value={data.phone} label="Phone" handleChange={handleChange} placeholder='Enter Phone' />
                            </div>

                            <div className='col-span-1'>
                                <Input name='age' value={data.age} handleChange={handleChange} label="Age" type='number' placeholder='Enter Age' />
                            </div>
                            <div className='col-span-1'>
                                <Select handleChange={(e) => {
                                    console.log(e);
                                    setData(prev => ({
                                        ...prev,
                                        gender: e
                                    }))
                                }}
                                    label={"Gender"}
                                    options={[
                                        {
                                            label: "Male",
                                            value: "male"
                                        },
                                        {
                                            label: "Female",
                                            value: "female"
                                        },
                                        {
                                            label: "Other",
                                            value: "other"
                                        }
                                    ]} />
                            </div>
                            <div className='col-span-2'>
                                <Input type='password' name='password' value={data.password} label="password" handleChange={handleChange} placeholder='Enter Password' />
                            </div>


                        </div>






                        <button type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[30px]"
                            onClick={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }}
                        >Submit</button>
                    </div>



                </div>

            </div>
        </Auth>
    )
}

export default UserRegister