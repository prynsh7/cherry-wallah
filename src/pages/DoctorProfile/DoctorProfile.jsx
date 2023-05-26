import React, { useEffect, useState } from 'react'
import DoctorProfilepic from '../../assets/images/doctorlist.png'
import Modal from '../../components/Modal/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import TimeSlots from '../../components/TimeSlots/TimeSlots'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { DoctorAPI } from '../../apis/doctorAPI'

const DoctorProfile = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)
    const handleOpenModal = () => setIsOpen(true)

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    const [timeSlot, setTimeSlot] = useState()

    const timeSlots = [
        {
            id: 1,
            mode:"Morning",
            slots: [
                {
                    id: 1,
                    time: "10:00 AM"
                },
                {
                    id: 2,
                    time: "10:30 AM"
                },
                {
                    id: 3,
                    time: "11:00 AM"
                },
                {
                    id: 4,
                    time: "11:30 AM"
                },
                {
                    id: 5,
                    time: "12:00 PM"
                },
            ]
        },
        {
            id: 2,
            mode:"Afternoon",
            slots: [
                {
                    id: 6,
                    time: "12:30 PM"
                },
                {
                    id: 7,
                    time: "01:00 PM"
                },
                {
                    id: 8,
                    time: "01:30 PM"
                },
                {
                    id: 9,
                    time: "02:00 PM"
                },
                {
                    id: 10,
                    time: "02:30 PM"
                },
            ]
        },
        {
            id: 3,
            mode:"Evening",

            slots: [
                {
                    id: 11,

                    time: "03:00 PM"
                },
                {
                    id: 12,
                    time: "03:30 PM"
                },
                {
                    id: 13,
                    time: "04:00 PM"
                },
                {
                    id: 14,
                    time: "04:30 PM"
                },
                {
                    id: 15,
                    time: "05:00 PM"
                },
            ]
        }
    ]

    const getDoctorById = async () => {
        try {
            setLoading(true)

            const res = await DoctorAPI.getDoctorById(id)

            if (res.success) {
                console.log("doctor get success", res.data)
                setData(res.data.doctor)
            }

        } catch (err) {
            console.log("error fetching doctors", err)
            const errMsg = err?.response?.data?.message || err?.message || "Some error occured"
            toast.error(errMsg)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDoctorById()
    }, [])

    const handleTimeSlot = (e) => {
        setTimeSlot(e)
    }

    return (
        <div className='bg-neutral-4'>
            {
                loading && <Loader />
            }
            <ToastContainer />

            <Modal width={'50%'} className='bg-neutral-1' isOpen={isOpen}
                handleSubmit={() => {
                    if(!timeSlot) return toast.error("Please select a time slot")
                    handleCloseModal()
                    navigate(ROUTES.User.Appointment,{state:{doctor:data,timeSlot:timeSlot}})
                }}
                handleCancel={handleCloseModal}>
                <TimeSlots handleTimeSlot={handleTimeSlot} timeSlot={timeSlot} timeSlots={timeSlots}/>
            </Modal>

            <div className='container mx-auto py-[60px]'>

                <div className='py-5'>
                    <div className='p-5 flex gap-6 justify-center items-center rounded-[8px]'>
                        <div className='relative flex items-center'>
                            <i class="bi bi-geo-alt absolute pl-[12px] text-primary-5"></i>
                            <input className="border-[1px] rounded-[4px] p-[10px] pl-[35px]" placeholder="Enter City" />
                        </div>
                        <div className='relative flex items-center'>
                            <i class="bi bi-search absolute pl-[12px] text-primary-5"></i>
                            <input className="border-[1px] rounded-[4px] p-[10px] pl-[35px]  w-[420px]" placeholder="Search doctors, clinics, hospitals, etc." />
                        </div>
                        <button className="py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]">
                            Search
                        </button>
                    </div>
                </div>

                <div className='bg-primary-2 flex justify-between p-[18px] items-center'>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='bg-primary-1 px-[25px] py-[6px]'>
                            <h3>Video Consultant</h3>
                        </button>

                        <button className='bg-primary-1 px-[25px] py-[6px]'>
                            <h3>Video Consultant</h3>
                        </button>

                        <button className=''>
                            <h3>All Filter</h3>
                        </button>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <h3>Sort By</h3>
                        <button className='bg-primary-1 px-[25px] py-[6px]'><h3>Availability</h3></button>
                    </div>
                </div>

                <div className='bg-[#ffff] flex px-[28px] mx-[85px] py-[40px] rounded-[14px] justify-center items-center mt-[36px]'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div>
                            <img className='pb-[6px]' src={DoctorProfilepic} alt="" />
                        </div>

                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>{data?.name}</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                            <div className='relative flex items-center mt-[14px]'>
                                <i class="bi bi-patch-check absolute text-[#6EAB36] pr-[14px]"></i>
                                <p className='text-[#6EAB36] pl-[22px]'>Medical Registration Verified</p>
                            </div>
                            <p>Dr. Hanshika Raj has over 12 years of experience as a Herbal Medicine Specialist. He has done Bachelor of Ayurveda, Medicine and Surgery (BAMS).</p>
                            <div className='mt-[16px]'>
                                <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]' onClick={handleOpenModal}>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffff]  mx-[85px] py-[30px] rounded-[14px] mt-[36px]'>
                    <div className='text-Small/Title/Small text-[#007E85] px-[28px]'>Doctor info</div>
                    <p className='mt-[6px] px-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione praesentium dignissimos quam accusantium, consectetur illum assumenda tempore libero sit repellat quibusdam aliquam odit atque asperiores reiciendis nemo odio non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis quaerat corporis dignissimos. Pariatur consectetur deserunt vero ratione optio deleniti excepturi vitae ipsum unde? Repellat ducimus dolorem quo provident sint?</p>
                </div>

                <div className='bg-[#ffff]  mx-[85px] py-[30px] rounded-[14px] mt-[36px]'>
                    <div className='text-Small/Title/Small text-[#007E85] px-[28px] mb-[14px]'>Patient Stories for Dr. Hanshika Raj</div>
                    <div className='border-y-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>

                    <div className='border-b-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>

                    <div className='border-b-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>

                    <div className='border-b-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DoctorProfile
