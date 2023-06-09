import React, { useEffect, useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import Button from '../../components/Button/Button'
import { AdminAPI } from '../../apis/adminAPI';

const AppointmentDetails = () => {

    const {appointmentId} = useParams()
    
    
    
    const getData= async ()=>{
        const res = await AdminAPI.getAppointmentDetails(appointmentId)
        if (res.success) {
            console.log(res);
        }
    } 
    useEffect(() => {
        getData()
    }, [])

    
    return (
        <div>

            <div className='container mx-auto px-[12px]'>
                <p className='text-Medium+/Label/Large-Strong'>Patient Details</p>
                <div className='pt-[32px]'>
                    <div className='bg-[#ffff] border-primary-2 border-2 flex p-[20px] rounded-[10px]'>
                        <div className='flex items-center gap-6 '>
                            <div className='text-center'>
                                <img src={DoctorProfile} alt="" />
                            </div>
                            <div className='font-semibold flex gap-28 px-[30px] text-primary-7'>
                                <h3>Full Name <br />Aditya Anand</h3>
                                <h3>Date of Birth <br />12th August 2023</h3>
                                <h3>Gender <br />Male</h3>
                                <h3>Blood Group <br />A+</h3>
                            </div>

                        </div>

                    </div>
                    <div className='mt-[24px]'>
                        <p className='mb-[32px] text-Medium+/Label/Large-Strong'>Doctor Details</p>
                        <div className='bg-[#ffff] border-primary-2 border-2 flex p-[20px] rounded-[10px]'>
                            <div className='flex items-center gap-6 '>
                                <div className='text-center'>
                                    <img src={DoctorProfile} alt="" />
                                </div>
                                <div className='font-semibold flex gap-28 px-[30px] text-primary-7'>
                                    <h3>Full Name <br />Aditya Anand</h3>
                                    <h3>Specialization <br />12th August 2023</h3>
                                    <h3>Gender <br />Male</h3>
                                    <h3>City <br />Bengluru</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
               
                <div className='py-[32px]'>
                    <div className='gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className='mt-[20px] flex justify-between'>
                            <h3 className='text-Medium+/Label/Large-Strong text-[black]'>Diagnosis Report</h3>
                        </div>
                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Vital Sign</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Weight <br />40 Kg</p>
                                <p>BP (mm Hg) <br />120/80</p>
                                <p>Pulse (heart beat/min) <br />99</p>
                                <p>Temperature <br />102</p>
                                <p>Respiratory Rate <br />40</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Clinical Notes</h2>
                            </div>

                            <div className='flex py-[12px] gap-20 px-[30px] text-primary-7'>
                                <p>Instrunction <br />This is  a long instruction and it is a dummy test instruction</p>
                                <p>Complain<br />No Complains</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='flex justify-between items-center text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Prescription</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Drugs <br />Tab. Dolo (650mg)</p>
                                <p>Dosage and Frequency <br />1 - 0 1</p>
                                <p>Duration <br />4 Day(s)</p>
                                <p>Instruction <br />After Meal</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Treatment Plan</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Procedure <br />ECG</p>
                                <p>Cost (₹) <br />₹ 1000</p>
                                <p>Discount <br />₹ 24(s)</p>
                                <p>Cost (₹) <br />₹ 976</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Lab Orders</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Lab Test <br />ECG</p>
                                <p>Instruction <br />No food before test</p>
                                <p>Attachment <br />Download reports</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AppointmentDetails