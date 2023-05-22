import React from 'react'
import Button from '../../../components/Button/Button'
import { Table } from 'antd';
import CustomPagination from '../../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouterConfig'

function Appointments() {
  const [count, setCount] = React.useState({})
  const navigate = useNavigate()
  const [appointment, setAppointment] = React.useState([
    {
      id: 1,
      name: 'Aditya Anand',
      phone: '8651439657',
      email: 'adityaanand1245@gmail.com',
      date_time: '22/02/22 05:30PM'
    },
    {
      id: 2,
      name: 'Aditya Anand',
      phone: '8651439657',
      email: 'adityaanand1245@gmail.com',
      date_time: '22/02/22 05:30PM'
    },
    {
      id: 3,
      name: 'Aditya Anand',
      phone: '8651439657',
      email: 'adityaanand1245@gmail.com',
      date_time: '22/02/22 05:30PM'
    },
    {
      id: 4,
      name: 'Aditya Anand',
      phone: '8651439657',
      email: 'adityaanand1245@gmail.com',
      date_time: '22/02/22 05:30PM'
    },
    {
      id: 5,
      name: 'Aditya Anand',
      phone: '8651439657',
      email: 'adityaanand1245@gmail.com',
      date_time: '22/02/22 05:30PM'
    },
    {
      id: 6,
      name: 'Aditya Anand',
      phone: '8651439657',
      email: 'adityaanand1245@gmail.com',
      date_time: '22/02/22 05:30PM'
    },

  ])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (index) => {
        return <p className='cursor-pointer'
            onClick={(e) => {
                navigate(ROUTES.User.AppointmentReportDetailsField)
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
      title: 'Date & Time',
      dataIndex: 'date_time',
      key: 'date_time',
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
      <div className="flex justify-between items-center ">
        <p className='text-Medium+/Label/Large-Strong'>Appointments</p>

        <div className="flex gap-[10px] flex-row items-center">
          <input type="text" placeholder="Search" className="border-[1px] border-[#E9E9E9] rounded-[4px] py-[5px] h-[100%] px-[10px] h-[40px]" />
        </div>
      </div>


      {/* <div className="flex justify-between items-center">
        <h6 className="text-Medium+/Label/Medium ">{""}</h6>
        <Button type='primary' label='+ Add Patient' />
      </div> */}

      <div className='mt-[30px]'>
        <Table columns={columns} dataSource={appointment} />
        <CustomPagination currentPage={1} />
      </div>

    </div>
  )
}

export default Appointments