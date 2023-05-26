import React, { useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import { toast } from 'react-toastify'
const Appointment = () => {
    const navigate = useNavigate()

    const [step, setStep] = useState(1)

    const [phone, setPhone] = useState('')

    const [appointmentfor, setAppointmentfor] = useState('myself')

    const [patientDetails, setPatientDetails] = useState({
        fullname: '',
        phone_number: '',
        email: '',
    })


    return (
        <div className='bg-neutral-4'>

            <div className='container mx-auto py-[60px]'>

                <div className='grid sm:grid-cols-2 gap-10 px-20'>
                    <div className='col-span-1 bg-neutral-1 p-[40px] rounded-[12px]'>
                        <div className='border-b-2 py-[12px]'>
                            <span className='text-Medium+/Title/Small pt-[36px]'>Appointment on</span>
                        </div>
                        <div className='border-b-2 py-[12px] flex'>
                            <i class="bi bi-calendar-event pr-[8px] text-[#5E912E]"></i>
                            <p>On April 23, 2023</p>
                        </div>
                        <div className='gap-4 flex pt-[20px] '>
                            <div className='text-center'>
                                <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            </div>
                            <div>
                                <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                                <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                                <p>BAMS, India</p>
                            </div>
                        </div>
                    </div>

                    {
                        step === 1 ?
                            <div className='col-span-1'>
                                <div className='flex flex-col  w-[75%] mx-[auto] my-[auto]'>
                                    <h3 className='text-Medium+/Title/Small'>Enter your phone number</h3>
                                    <input value={phone} type='number' onChange={e => { setPhone(e.target.value) }} className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" placeholder="Phone Number" />
                                    <p className='mt-[15px]'>You will receive an OTP shortly. <br />
                                        We will send appointment-related communications on this number.</p>
                                    <button
                                        onClick={() => {
                                            if (!phone || phone.length < 10) return toast.error('Please enter a valid phone number');
                                            setStep(2)
                                        }
                                        }
                                        type="submit"
                                        className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[20px]">Continue</button>
                                </div>
                            </div>
                            :
                            null
                    }


                    {
                        step === 2 ?
                            <div className='col-span-1'>
                                <div className='flex flex-col gap-2 w-[75%] mx-[auto] my-[auto]'>
                                    <h3 className='text-Medium+/Title/Small'>Patient Details</h3>
                                    <p className=''>This appointment is for :</p>
                                    <div className='flex bg-neutral-1 p-[12px] rounded cursor-pointer' onClick={() => setAppointmentfor('myself')}>
                                        <div className='bg-[none] border border-primary-6 rounded-full h-[22px] w-[22px] p-[4px]'>
                                            {
                                                appointmentfor === 'myself' ?
                                                    <div className='w-[100%] h-[100%] border rounded-full bg-primary-6'></div>
                                                    :
                                                    <div className='w-[100%] h-[100%] border border-primary-6 rounded-full bg-[none]'></div>
                                            }
                                        </div>
                                        <span className='pl-[6px] text-primary-6'>Myself</span>
                                    </div>

                                    <div className='flex bg-neutral-1 p-[12px] rounded-[4px] cursor-pointer' onClick={() => setAppointmentfor('other')}>
                                        <div className='bg-[none] border border-primary-6 rounded-full h-[22px] w-[22px] p-[4px]'>
                                            {
                                                appointmentfor === 'other' ?
                                                    <div className='w-[100%] h-[100%] border rounded-full bg-primary-6'></div>
                                                    :
                                                    <div className='w-[100%] h-[100%] border border-primary-6 rounded-full bg-[none]'></div>
                                            }
                                        </div>
                                        <span className='pl-[6px] text-primary-6'>Someone else</span>
                                    </div>

                                    {
                                        appointmentfor === 'other' ?
                                            <>
                                                <div>
                                                    <p>Please provide the following information about user :</p>
                                                    <input 
                                                    className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" 
                                                    placeholder="Full Name" 
                                                    value={patientDetails.fullname}
                                                    onChange={e => setPatientDetails({...patientDetails, fullname: e.target.value})}
                                                    />
                                                    <input 
                                                    className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" 
                                                    placeholder="Phone Number" 
                                                    value={patientDetails.phone_number}
                                                    onChange={e => setPatientDetails({...patientDetails, phone_number: e.target.value})}
                                                    />
                                                    <input 
                                                    className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" 
                                                    placeholder="Email Address" 
                                                    value={patientDetails.email}
                                                    onChange={e => setPatientDetails({...patientDetails, email: e.target.value})}
                                                    />
                                                </div>
                                                <div>
                                                    <p>Has the patient taken the Covid-19 vaccination?</p>
                                                    <div className='flex items-center'>
                                                        <div className='bg-[none] border border-primary-6 rounded-full h-[14px] w-[14px]  '></div>
                                                        <p className='pl-[4px]'>Yes</p>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <div className='bg-[none] border border-primary-6 rounded-full h-[14px] w-[14px]'></div>
                                                        <p className='pl-[4px]'>No</p>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <div className='bg-[none] border border-primary-6 rounded-full h-[14px] w-[14px]'></div>
                                                        <p className='pl-[4px]'>Partially</p>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            null
                                    }


                                    <button onClick={() => { navigate(ROUTES.User.AppointmentConfirmation) }} type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[20px]">Next</button>
                                </div>
                            </div>
                            :
                            null
                    }

                </div>

            </div>

        </div>
    )
}

export default Appointment