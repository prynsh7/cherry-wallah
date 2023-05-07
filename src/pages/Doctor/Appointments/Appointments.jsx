import React from 'react'
import Button from '../../../components/Button/Button'
import { Table } from 'antd';
import CustomPagination from '../../../components/Pagination/Pagination';

function Appointments() {
  const [count, setCount] = React.useState({})

  const [appointment, setAppointment] = React.useState([])

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
      title: 'Date & Time',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => <p>{text.split("T")[0]} </p>,
    },
    {
      title: 'Status',
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
      <div className="flex justify-between items-center ">
        <p className='text-Medium+/Label/Large-Strong'>Appointments</p>

        <div className="flex gap-[10px] flex-row items-center">
          <input type="text" placeholder="Search" className="border-[1px] border-[#E9E9E9] rounded-[4px] py-[5px] h-[100%] px-[10px] h-[40px]" />
        </div>
      </div>


      <div className="mt-[30px] flex justify-between items-center">
        <h6 className="text-Medium+/Label/Medium ">{""}</h6>
        {/* <Button type='primary' label='+ Add Patient' /> */}
      </div>

      <div className='mt-[30px]'>
        <Table columns={columns} dataSource={appointment} />
        <CustomPagination currentPage={1} />
      </div>

    </div>
  )
}

export default Appointments