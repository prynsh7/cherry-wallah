import React, { useEffect } from 'react'
import Button from '../../components/Button/Button';
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import { AdminAPI } from '../../apis/adminAPI';


function AppointmentList() {
  const [count, setCount] = React.useState({})
  const navigate = useNavigate()
  const [appointments, setAppointments] = React.useState([])

  const getData = async () => {
    const res = await AdminAPI.getAppointments();
    if (res.success) {
      console.log(res);
      const arr = [];
      for (const i of res.data.appointments) {
        const obj = {
          appointment: i._id,
          date_time: i.date+" - "+i.time,
        }
        arr.push(obj)
      }
      setAppointments(arr)

    }
  }

  useEffect(() => {
    getData()
  }, [])

  const columns = [
    {
      title: 'Appointment',
      dataIndex: 'appointment',
      key: 'appointment',
      render: (index) => {
        return <p className='cursor-pointer'
          onClick={(e) => {
            navigate(ROUTES.Admin.AppointmentDetails+"/"+index)
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
      title: 'Date & Time',
      dataIndex: 'date_time',
      key: 'date_time',
      render: (text) => <p>{text?.split("T")[0]} </p>,
    },
    {
      title: 'Total Revenue',
      dataIndex: 'total_revenue',
      key: 'total_revenue',
      render: (text) => <p>{text?.split("T")[0]} </p>,
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
        <p className='text-Medium+/Label/Large-Strong'>Appointment Details</p>

        <div className="flex gap-[10px] flex-row items-center">
          <input type="text" placeholder="Search" className="border-[1px] border-[#E9E9E9] rounded-[4px] py-[5px] h-[100%] px-[10px] h-[40px]" />
        </div>
      </div>


      <div className="mt-[30px] flex justify-between items-center">
        <h6 className="text-Medium+/Label/Medium ">{""}</h6>
        {/* <Button type='primary' label='+ Add Patient' /> */}
      </div>

      <div className='mt-[30px]'>
        <Table columns={columns} dataSource={appointments} />
        <CustomPagination currentPage={1} />
      </div>

    </div>
  )
}

export default AppointmentList