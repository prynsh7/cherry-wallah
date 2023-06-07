import React, { useEffect } from 'react'
import Button from '../../../components/Button/Button'
import { Table, message } from 'antd';
import CustomPagination from '../../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/RouterConfig'
import { AppointmentAPI } from '../../../apis/appointmentAPI';

function Appointments() {
  const [count, setCount] = React.useState({})
  const navigate = useNavigate()



  const [appointment, setAppointment] = React.useState([])

  const getData = async () => {
    try {
      const res = await AppointmentAPI.getAppointments()
      if (res.success) {
        const arr = []
        for (const iterator of res.data.appointments) {
          const obj = {
            id: iterator._id,
            name: iterator.patient_details.fullname,
            phone: iterator.patient_details.phone_number,
            email: iterator.patient_details.email,
            date_time: iterator.appointment_time,
            status: iterator.status
          }

          arr.push(obj)
        }
        console.log('arr', arr);
        setAppointment(arr)
      }
    }
    catch (err) {
      console.log(err);
    }
    finally {
      console.log('finally');
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (index, v) => {
        return <p className='cursor-pointer'
          onClick={(e) => {
            console.log(index, v);
            navigate(ROUTES.Doctor.AppointmentReport + '/' + v.id)
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
          >{record.status}</button>
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

  useEffect(() => {
    getData()
  }, [])


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