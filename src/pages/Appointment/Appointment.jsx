import React from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
const Appointment = () => {
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
                        <div className='flex flex-col  w-[75%] mx-[auto] my-[auto]'>
                            <h3 className='text-Medium+/Title/Small'>Enter your phone number</h3>
                            <input className="border-[1px] rounded-[4px] p-[10px] w-[100%] mt-2" placeholder="Phone Number" />
                            <p className='mt-[15px]'>You will receive an OTP shortly. <br />
                                We will send appointment-related communications on this number.</p>
                            <button type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[100%] py-[8px] mt-[20px]">Continue</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Appointment