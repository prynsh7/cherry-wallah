import React from 'react'
import Button from '../../components/Button/Button'
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';

function Dashboard() {
  const [count, setCount] = React.useState({})

  const [appointment, setAppointment] = React.useState([])

  const columns = [
    {
      title: 'Patient Name',
      dataIndex: 'title',
      key: 'name',
      render: (_, record) => <a href='javascript:void(0)'
      >{record.title}</a>
    },
    {
        title: 'Doctor Name',
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
      title: 'Date & Time',
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
    <div className='flex flex-col'>
    <div className="flex justify-between ">
      <p className='text-Medium+/Label/Large-Strong'>Dashboard</p>
    </div>
      <div className="mt-[20px]">
        <div className="grid md:grid-cols-3 grid-cols-1  gap-[20px]">
          <div className="p-[20px] rounded-[4px] bg-dashboard-home-2 bg-center">
            <div className="flex items-center font-semibold text-[#fff]"><img src="/assets/work.png" alt="" />
              <p className='text-Medium+/Label/Medium'>Total Doctors</p>
            </div>
            <h6 className="text-white text-[2em] font-semibold mt-[20px]">{count?.totalJobs || '0'}</h6>
          </div>
          <div className="p-[20px] rounded-[4px] bg-dashboard-home-3 bg-center">
            <div className="flex items-center font-semibold text-[#fff]"><img src="/assets/dashboard/activejob.svg" alt="" />
              <p className='text-Medium+/Label/Medium'>Total Patients</p>
            </div>
            <h6 className="text-white text-[2em] font-semibold mt-[20px]">{count?.activeJobs || '0'}</h6>
          </div>
          <div className="p-[20px] rounded-[4px] bg-dashboard-home-1 bg-center">
            <div className="flex items-center font-semibold text-[#fff]"><img src="/assets/work.png" alt="" />
              <p className='text-Medium+/Label/Medium'>Total Revenue</p>
            </div>
            <h6 className="text-white text-[2em] font-semibold mt-[20px]">{count?.savedJobs || '0'}</h6>
          </div>
        </div>
      </div>

      <div className="mt-[30px] flex justify-between items-center">
        <h6 className="text-Medium+/Label/Medium ">Upcoming Appointments</h6>
        <Button type='primary' label='View All' />
      </div>

      <div className='mt-[30px]'>
        <Table columns={columns} dataSource={appointment} />
        <CustomPagination currentPage={1} />
      </div>

    </div>
  )
}

export default Dashboard