import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import DoctorProfile from '../../../assets/images/doctorlist.png'
import { Select, Table, Radio } from 'antd';
import CustomPagination from '../../../components/Pagination/Pagination';
import { useState } from 'react'

const AppointmentHistory = () => {
    const [count, setCount] = useState({})

    const [appointment, setAppointment] = useState([])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'name',
            render: (_, record) => <a href='javascript:void(0)'
            >{record.title}</a>
        },
        {
            title: 'Phone',
            dataIndex: 'applicants_count',
            key: 'applicants_count',
        },
        {
            title: 'Email',
            dataIndex: 'posted_by',
            key: 'posted_by',
        },
        {
            title: 'Last Appointment',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <p>{text.split("T")[0]} </p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                console.log(record)
                return <>   <div className="flex gap-[10px] flex-row items-center">
                    <button className="text-white border-[1px] border-[#F2C347] rounded-[4px] py-[5px] h-[100%] px-[10px]"
                        title='Duplicate job'
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    ><img src="/assets/difference.svg" width={20} /></button>

                    <button className="bg-[#F2C347] text-[12px] whitespace-nowrap text-black rounded-[4px] py-[6px] px-[16px] font-semibold"
                    // onClick={(e) => {
                    //   localStorage.setItem('job', JSON.stringify(record))
                    //   gaHelper.dashboardClickViewApplicants()
                    // }} 
                    >View Applicants</button>
                </div>
                </>
            },
        },
    ];

    
    return (
        <div className='h-[100%] width-[100%]'>
            <div className='flex items-center border-2 border-primary-2 font-semibold bg-neutral-1 rounded p-[12px]'>
                <button><div><i class="bi bi-arrow-left"></i></div></button>
                {/* <Button className={' px-2 py-1'} type='linear' label={<div><i class="bi bi-arrow-left"></i></div>} /> */}
                <h3 className='pl-4'>Patient</h3> <span className='text-primary-6'> #52466246</span>
            </div>
            <div className='flex bg-neutral-1 border-2 border-primary-2 rounded-[10px] my-[24px] justify-between items-center p-[26px]'>
                <div className='flex gap-6 items-center'>
                    <img src={DoctorProfile} alt="" />
                    <p> <span className='font-bold'>Priyansh Raj</span> <br />+91 894352346</p>
                    <p> <span className='font-bold'>Email</span><br /> adityaanand1245@gmail.com</p>
                </div>

                <div>
                    <div className='flex gap-4'>
                        <Button type='linear' label={<div><i class="bi bi-chat pr-2"></i>Start Chat</div>} />
                        <Button type='outlined' label={<div><i class="bi bi-camera-video pr-2"></i>Video Call </div>} />
                    </div>
                </div>

            </div>
            <div className=''>
                <Table columns={columns} dataSource={appointment} />
                <CustomPagination currentPage={1} />
            </div>
        </div>
    )
}

export default AppointmentHistory