import React, { useEffect, useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import CustomPagination from '../../components/Pagination/Pagination'
import { Pagination } from 'antd'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import TimeSlots from '../../components/TimeSlots/TimeSlots'
import { AppointmentAPI } from '../../apis/appointmentAPI'
import avatar from '../../assets/images/avatars/avatar.avif'

const UpcomingAppointment = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)
    const handleOpenModal = () => setIsOpen(true)

    const [data, setData] = useState([])

    const getData = async() => {
        try {
            const res =await AppointmentAPI.getAppointments()
            console.log(data)
            if(res.success) setData(res.data.appointments)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return (

        <div className='bg-neutral-4 pb-[60px]'>
            <Modal width={'50%'} className='bg-neutral-1' isOpen={isOpen}
                handleSubmit={() => {
                    handleCloseModal()
                    navigate(ROUTES.User.Appointment)
                }}
                handleCancel={handleCloseModal}>
                <TimeSlots />
            </Modal>
            <div className='container mx-auto px-3'>

                <div className='py-5'>
                    <div className='bg-[#CFE1DF] py-2 px-6 rounded-lg flex justify-between items-center'>
                        <h4 className='font-semibold text-primary-6'>You have a upcoming appointment on 17th May 2023<a href="#" className='pl-[30px] font-semibold text-primary-6'>Click here to view more</a></h4>
                        <i className='bi bi-x text-primary-10 text-[22px] cursor-pointer'></i>
                    </div>
                </div>

                <div className='px-[34px] pb-[20px]'>
                    <span className='text-Medium+/Title/Small pt-[36px]'>My Appointments</span>
                </div>

                <div className='grid sm:grid-cols-3 gap-6 px-[34px] '>
                    <div className=' gap-6 p-[40px] grid-col-1 bg-[#ffff] text-Medium+/Title/xSmall flex flex-col justify-center items-center'><span>Upcoming Appointments</span> <span className='text-[#FF9900] text-Medium+/Title/Large'>0</span></div>
                    <div className=' gap-6 p-[40px] grid-col-1 bg-[#ffff] text-Medium+/Title/xSmall flex flex-col justify-center items-center'><span>Completed Appointments</span><span className='text-primary-6 text-Medium+/Title/Large'>{data?.length}</span></div>
                    <div className=' gap-6 p-[40px] grid-col-1 bg-[#ffff] text-Medium+/Title/xSmall flex flex-col justify-center items-center'><span>Cancelled Appointments</span><span className='text-[#FF0000] text-Medium+/Title/Large'>0</span></div>
                </div>

                <div className='flex px-[34px] pt-[30px] gap-6 text-Medium+/Paragraph/Medium-Strong'>
                    <button>Upcoming</button>
                    <button>Completed</button>
                    <button>Cancelled</button>
                </div>

                {data.map((item, index) => {
                    return <div className='bg-[#ffff] flex p-[24px] mx-[32px] mt-[18px] rounded-[10px] justify-between items-center'>
                        <div className='flex justify-center items-center gap-6 '>
                            <div className='text-center'>
                                <img className='pb-[6px] max-w-[200px] aspect-square rounded-full' src={item?.doctor?.profile_image || avatar} alt="" />
                            </div>
                            <div>
                                <h3 className='text-Small/Title/Medium text-[#007E85]'>{item?.doctor?.name}</h3>
                                <p className='text-Small/Title/xSmall text-neutral-8'>{item?.doctor?.profile_name}</p>
                                <div className='border-2 p-[4px] rounded mt-2'>
                                    <span>{item?.appointment_date} - {item?.appointment_time}</span>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={handleOpenModal} className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'><i class="bi bi-calendar pr-[8px]"></i>Reschedule</button>
                        </div>
                    </div>

                })}

            </div>
            <div className='flex mx-auto mt-[60px] w-[fit-content]'>
                <CustomPagination />
            </div>
        </div>
    )
}

export default UpcomingAppointment