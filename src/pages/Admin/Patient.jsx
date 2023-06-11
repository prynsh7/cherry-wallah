import React, { useEffect } from 'react'
import { Select } from 'antd';
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/RouterConfig';
import { AdminAPI } from '../../apis/adminAPI';


function Patient() {



    const navigate = useNavigate()

    const [patients, setPatients] = React.useState([])

    const getData = async () => {
        const res = await AdminAPI.getPatients();
        if (res.success) {
            console.log(res);
            const arr = [];
            for (const i of res.data.patients) {
                const obj = {
                    id: i._id,
                    name: i.name,
                    phone: i.phone,
                    email: i.email,
                    last_appointment: '22-02-22',
                }
                arr.push(obj)
            }
            setPatients(arr)
        }
    }


    useEffect(() => {
        getData()
    }, [])


    const columns = [
        {
            title: 'Patient Name',
            dataIndex: 'name',
            key: 'name',
            render: (index) => {
                return <p className='cursor-pointer'
                    onClick={(e) => {
                        navigate(ROUTES.Admin.PatientDetails)
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
            title: 'Last Appointment',
            dataIndex: 'last_appointment',
            key: 'last_appointment',
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
                    >Active</button>
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
                <p className='text-Medium+/Label/Large-Strong'>Patient Details</p>
                <input type="text" placeholder="Search" className="border-[1px] border-[#E9E9E9] rounded-[4px] py-[5px] h-[100%] px-[10px] h-[40px]" />
            </div>

            <div className='mt-[30px]'>
                <Table columns={columns} dataSource={patients} />
                <CustomPagination currentPage={1} />
            </div>

        </div>
    )
}

export default Patient