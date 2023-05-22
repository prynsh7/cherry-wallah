import React, { useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import Button from '../../components/Button/Button'



const DoctorDetails = () => {
    const navigate = useNavigate()

    return (
        <div className=''>
            <div className='container mx-auto px-[12px]'>
                <p className='text-Medium+/Label/Large-Strong'>Doctor Details</p>

                <div className='py-[32px]'>
                    <div className='bg-[#ffff] border-primary-2 border-2 flex p-[20px] rounded-[10px] justify-between items-center'>
                        <div className='flex items-center gap-6 '>
                            <div className='text-center'>
                                <img src={DoctorProfile} alt="" />
                            </div>
                            <div>
                                <h3 className='text-Medium+/Label/Large-Strong text-[#007E85]'>Dr. Priyansh Raj</h3>
                                <p className='text-Small/Title/xSmall text-neutral-8'>Skin Specialist</p>
                                <p className='mt-2 text-Small/Title/xxSmall text-neutral-8 '>Ratings 3.0</p>
                                <div className='felx '>
                                    <i class="bi bi-star-fill p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star-fill p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star-fill p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star p-[2px] text-[#6EAB36]"></i>
                                </div>
                            </div>

                        </div>
                        <div className='mr-6'>
                            <Button label={'Active'} type='outlined' />
                        </div>
                    </div>
                </div>

                <div className='pb-[32px]'>
                    <div className='pb-[32px] gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Basic info</h2>
                            </div>

                            <div className='font-semibold flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Full Name <br />Aditya Anand</p>
                                <p>Specialization<br />Ayurveda Medicine and Surgery</p>
                                <p>Gender<br />Male</p>
                                <p>City <br />Mysore</p>
                            </div>
                        </div>

                        <div className=' border-2  border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Establishment Details</h2>
                            </div>

                            <div className='font-semibold flex py-[12px] gap-20 px-[30px] text-primary-7'>
                                <p>Establishment <br />Lorem Ipsum Dolor</p>
                                <p>Degree<br />Ayurveda Medicine and Surgery</p>
                                <p>Establishment Name<br />Not Specified</p>
                                <p>City<br />Not Specified</p>
                                <p>Locality<br />Not Specified</p>
                                <p>State<br />Not Specified</p>
                                
                            </div>
                        </div>

                        <div className=' border-2  border-primary-2 rounded'>
                            <div className='flex justify-between items-center text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Profile Section</h2>
                            </div>

                            <div className='font-semibold flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Profile <br />Dentist</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Medical Registration</h2>
                            </div>

                            <div className='font-semibold flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Registration Number <br />12344252334233</p>
                                <p>Registration Council <br />loremipsum@gmail.com</p>
                                <p>Registration Date <br />20-04-23</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Educational Details</h2>
                            </div>

                            <div className='font-semibold flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Degree <br />Bachelor of Ayurvedic Medicine and Surgery</p>
                                <p>College/University <br />KLE TECH UNIVERSITY</p>
                                <p>Year of completion <br />2015-12-9</p>
                                <p>Year of Experiences <br />5 years</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorDetails