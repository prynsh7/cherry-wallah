import { useState } from 'react'
import Button from '../../../components/Button/Button'
import { Select, Table, Radio } from 'antd';
import Modal from '../../../components/Modal/Modal'
import CustomPagination from '../../../components/Pagination/Pagination';

function Patients() {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseModal = () => setIsOpen(false)
  const handleOpenModal = () => setIsOpen(true)


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

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='flex flex-col'>

      <Modal width={'80%'} className='bg-neutral-1' isOpen={isOpen} handleSubmit={handleCloseModal} handleCancel={handleCloseModal}>
        <p className='text-Medium+/Label/Large-Strong'>Add Patients</p>
        <div className='grid grid-cols-3 gap-3 mt-[14px]'>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>Patient Name</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Patient Name' />
          </div>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>Mobile Number</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Mobile Number ' />
          </div>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>Email</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Email Address ' />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 mt-[14px]'>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong'>Gender</label>
            <div className="col-span-1 pb-2">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
                <Radio value={3}>Others</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>DOB</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='DD/MM/YYYY' />
          </div>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong'>Blood Group</label>
            <Select
              className=' w-[100%] rounded-[4px] py-[4px]'
              defaultValue={'Select your blood group'}
              options={[
                {
                  value: 'a',
                  label: 'a'
                }
              ]} />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 mt-[14px]'>
            <div className='col-span-1'>
              <label className='text-Medium+/Label/Small-Strong mb-2'>Language Preference</label>
              <Select
              className=' w-[100%] rounded-[4px] py-[4px]'
              defaultValue={'Select your language'}
              options={[
                {
                  
                  value: 'a',
                  label: 'a'
                }
              ]} />
            </div>
            <div className='col-span-1'>
              <label className='text-Medium+/Label/Small-Strong mb-2'>Occupation</label>
              <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Occupation' />
            </div>
            <div className='col-span-1'>
              <label className='text-Medium+/Label/Small-Strong mb-2'>Referred by</label>
              <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Referrer Name' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3 mt-[14px]'>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>Street Address</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Address' />
          </div>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>Pincode</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Pincode ' />
          </div>
          <div className='col-span-1'>
            <label className='text-Medium+/Label/Small-Strong mb-2'>City</label>
            <input className='outline-none border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter City' />
          </div>
        </div>

      </Modal>

      <div className="flex justify-between items-center">

        <p className='text-Medium+/Label/Large-Strong'>Patients</p>

        <div className="flex gap-[10px] flex-row items-center">
          <input type="text" placeholder="Search" className="border-[1px] border-[#E9E9E9] rounded-[4px] py-[5px] h-[100%] px-[10px] h-[40px]" />
          <Button onClick={handleOpenModal} type='primary' label='+ Add Patient' />
        </div>

      </div>


      {/* <div className="mt-[30px] flex justify-between items-center">
        <h6 className="text-Medium+/Label/Medium ">{""}</h6>
        
      </div> */}

      <div className='mt-[30px]'>
        <Table columns={columns} dataSource={appointment} />
        <CustomPagination currentPage={1} />
      </div>

    </div>
  )
}

export default Patients