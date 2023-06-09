import React from 'react'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import DoctorProfile from '../../assets/images/doctorlist.png'
import TimeSlots from '../../components/TimeSlots/TimeSlots'
import { useLocation } from 'react-router-dom'
import { IMAGE_CONSTANT } from '../../utils/imageConstant'


const AppointmentConfirmation = () => {
    const { state } = useLocation()
    const { appointment, doctor } = state
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)
    const handleOpenModal = () => setIsOpen(true)
    return (
        <div className='bg-neutral-4 min-h-[95vh]'>
            <Modal width={'50%'} className='bg-neutral-1' isOpen={isOpen} handleSubmit={handleCloseModal} handleCancel={handleCloseModal}>
                <TimeSlots />
            </Modal>
            <div className='container mx-auto py-[60px]'>

                <div className='grid sm:grid-cols-2 gap-10 px-20'>
                    <div className='col-span-1 bg-neutral-1 p-[40px] rounded-[12px]'>
                        <div className='border-b-2 py-[12px]'>
                            <span className='text-Medium+/Title/Small pt-[36px]'>Appointment on</span>
                        </div>
                        <div className='border-b-2 py-[12px] flex'>
                            <i class="bi bi-calendar-event pr-[8px] text-[#5E912E]"></i>
                            <p>{state?.timeSlot?.time}</p>
                        </div>
                        <div className='gap-4 flex pt-[30px] items-center '>
                            <div className='text-center h-[150px] w-[150px] rounded-full overflow-hidden'>
                                <img className='pb-[6px] object-cover' src={doctor?.profile_image || IMAGE_CONSTANT.DoctorPlaceholder} alt="" />
                            </div>
                            <div>
                                <h3 className='text-Small/Title/Medium text-[#007E85]'>{doctor?.name}</h3>
                                <p className='text-Small/Title/xSmall text-neutral-8'>{doctor?.profile_name}</p>
                                <p>{doctor?.educational_degree}, {doctor?.educational_college}</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid-col-1'>
                        <div className='flex flex-col  w-[75%] mx-[auto] my-[auto]'>
                            <h3 className='text-Medium+/Title/Small'><i class="bi bi-patch-check-fill p-[4px] text-[#5E912E]"></i>Appointment confirmed</h3>
                            <p className='mt-[16px]'>Your appointment ID is {appointment._id}</p>
                            <p>We have sent you an SMS with details.</p>
                            <h3 className='text-primary-6 mt-[16px]'>Patient Name</h3>
                            <h3>{appointment.patient_name}</h3>
                            <h3 className='text-primary-6 mt-[12px]'>Mobile</h3>
                            <h3>{appointment.patient_phone}</h3>
                            <div className='flex gap-6'>
                                <button type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[50%] py-[8px] mt-[20px]">Cancel Appointment</button>
                                <button onClick={handleOpenModal} type="submit" className="bg-linear text-Medium+/Paragraph/Medium text-[#fff] rounded-[4px] w-[50%] py-[8px] mt-[20px]">Reschedule Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default AppointmentConfirmation