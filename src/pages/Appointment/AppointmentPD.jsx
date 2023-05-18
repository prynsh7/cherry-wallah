import React from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { useNavigate } from 'react-router-dom'
import {ROUTES} from '../../routes/RouterConfig'
const AppointmentPD = () => {
const navigate=useNavigate()
    return (
        <div className='bg-neutral-4'>

            <div className='container mx-auto py-[60px]'>

                <div className='grid sm:grid-cols-2 gap-10 px-20'>
                    <div className='grid-col-1 bg-neutral-1 p-[40px] rounded-[12px]'>
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

                    <div className='grid-col-1'>
                        <div className='flex flex-col gap-2 w-[75%] mx-[auto] my-[auto]'>
                            <h3 className='text-Medium+/Title/Small'>Patient Details</h3>
                            <p className=''>This appointment is for :</p>
                            <div className='flex bg-neutral-1 p-[12px] rounded'>
                                <div className='bg-[none] border border-primary-6 rounded-full h-[22px] w-[22px] p-[4px]'>
                                    <div className='w-[100%] h-[100%] border rounded-full bg-primary-6'></div>
                                </div>
                                <span className='pl-[6px] text-primary-6'>Myself</span>
                            </div>

                            <div className='flex bg-neutral-1 p-[12px] rounded-[4px]'>
                                <div className='bg-[none] border border-primary-6 rounded-full h-[22px] w-[22px] p-[4px]'>
                                    <div className='w-[100%] h-[100%] border border-primary-6 rounded-full bg-[none]'></div>
                                </div>
                                <span className='pl-[6px] text-primary-6'>Someone else</span>
                            </div>

                           <div>
                            <p>Please provide the following information about user :</p>
                            <input className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" placeholder="Full Name" />
                            <input className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" placeholder="Phone Number" />
                            <input className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" placeholder="Email Address" />
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

                            <button onClick={() => { navigate(ROUTES.AppointmentConfirmation) }} type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[20px]">Next</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AppointmentPD