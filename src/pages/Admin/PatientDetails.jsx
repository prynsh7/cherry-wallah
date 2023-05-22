import React, { useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import Button from '../../components/Button/Button'

const PatientDetails = () => {
    const navigate = useNavigate()
    const [appointment] = React.useState([
        {
            id:1,
            appointment:'#75245432589',
            date:'22/02/22 5:01PM',
            total_revenue:'₹2456',
        },
        {
            id:2,
            appointment:'#75245432589',
            date:'22/02/22 5:01PM',
            total_revenue:'₹2456',
        },
        {
            id:3,
            appointment:'#75245432589',
            date:'22/02/22 5:01PM',
            total_revenue:'₹2456',
        },
        {
            id:4,
            appointment:'#75245432589',
            date:'22/02/22 5:01PM',
            total_revenue:'₹2456',
        },
        {
            id:5,
            appointment:'#75245432589',
            date:'22/02/22 5:01PM',
            total_revenue:'₹2456',
        },
    ])

    const columns = [
        {
            title: 'Appointment',
            dataIndex: 'appointment',
            key: 'appointment',
            render: (index) => {
                return <p className='cursor-pointer'
                    onClick={(e) => {
                        navigate(ROUTES.Admin.PatientDetails)
                    }}
                >{index}</p>
            }
        },
        {
            title: 'Status',
            key: 'status',
            render: (_, record) => {
                console.log(record)
                return <>   <div className="flex flex-row items-center">
                    <button className="bg-[#5BB84C] text-[12px] whitespace-nowrap text-neutral-1 rounded-full py-[6px] px-[16px] font-semibold"
                    // onClick={(e) => {
                    //   localStorage.setItem('job', JSON.stringify(record))
                    //   gaHelper.dashboardClickViewApplicants()
                    // }} 
                    >Completed</button>
                </div>
                </>
            },
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Total Revenue',
            dataIndex: 'total_revenue',
            key: 'total_revenue',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                console.log(record)
                return <>   <div className="flex gap-[10px] flex-row items-center">
                    <button className="text-white py-[5px] h-[100%] px-[10px]"
                        title='option'
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    ><i class="bi bi-three-dots-vertical text-black"></i></button>

                </div>
                </>
            },
        },
    ];
    return (
        <div>

            <div className='container mx-auto px-[12px]'>
                <p className='text-Medium+/Label/Large-Strong'>Patient Details</p>

                <div className='py-[32px]'>
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
                </div>

                <div className='pb-[32px]'>
                    <div className='gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Contact info</h2>
                            </div>

                            <div className='font-semibold flex gap-48 py-[12px] px-[30px] text-primary-7'>
                                <p>Phone Number <br />+918651439657</p>
                                <p>Email ID<br />adimin11234@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Table columns={columns} dataSource={appointment} />
                    <CustomPagination currentPage={1} />
                </div>

            </div>

        </div>
    )
}

export default PatientDetails