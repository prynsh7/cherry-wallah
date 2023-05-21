import React from 'react'
import Button from 'antd';
import { Select, Space } from 'antd';
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/RouterConfig';


function Doctor() {

    const [count, setCount] = React.useState({})

    const navigate = useNavigate()

    const [appointment, setAppointment] = React.useState([
        {
            id:1,
            name:'Aditya Anand',
            phone:'+91 8651439657',
            email:'adityaanand1245@gmail.com',
            specialization:'Eye specialist',
        },
        {
            id:2,
            name:'Aditya Anand',
            phone:'+91 8651439657',
            email:'adityaanand1245@gmail.com',
            specialization:'Eye specialist',
        },
        {
            id:3,
            name:'Aditya Anand',
            phone:'+91 8651439657',
            email:'adityaanand1245@gmail.com',
            specialization:'Eye specialist',
        },
        {
            id:4,
            name:'Aditya Anand',
            phone:'+91 8651439657',
            email:'adityaanand1245@gmail.com',
            specialization:'Eye specialist',
        },
    ])
    

    const columns = [
        {
            title: 'Doctor Name',
            dataIndex: 'name',
            key: 'name',
            render: (index) => {
                return <p className='cursor-pointer' 
                onClick={(e) => {
                    navigate(ROUTES.Admin.DoctorDetails)
                }}
                >{index}</p>
            }
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Specialization',
            dataIndex: 'specialization',
            key: 'specialization',
            render: (text) => <p>{text.split("T")[0]} </p>,
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
                    >Verified</button>
                </div>
                </>
            },
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

        <div className='flex flex-col'>
            <div className='flex gap-2'>
                <Select
                    className='rounded-[4px] py-[4px]'
                    defaultValue={'Active'}
                    options={[
                        {
                            value: 'a',
                            label: 'a'
                        }
                    ]} />

                <Select
                    className='rounded-[4px] py-[4px]'
                    defaultValue={'Today'}
                    options={[
                        {
                            value: 'a',
                            label: 'a'
                        }
                    ]} />
                <Select
                    className='rounded-[4px] py-[4px]'
                    defaultValue={'All Filter'}
                    options={[
                        {
                            value: 'a',
                            label: 'a'
                        }
                    ]} />
            </div>
            <div className="flex justify-between items-center mt-[24px]">
                <p className='text-Medium+/Label/Large-Strong'>Doctor Details</p>
                <input type="text" placeholder="Search" className="border-[1px] border-[#E9E9E9] rounded-[4px] py-[5px] h-[100%] px-[10px] h-[40px]" />
            </div>

            <div className='mt-[30px]'>
                <Table columns={columns} dataSource={appointment} />
                <CustomPagination currentPage={1} />
            </div>

        </div>
    )
}

export default Doctor