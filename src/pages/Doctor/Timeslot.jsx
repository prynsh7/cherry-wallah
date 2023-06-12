import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { TimePicker } from 'antd';
import { AppointmentAPI } from '../../apis/appointmentAPI';


function Timeslot() {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseModal = () => setIsOpen(false)
  const handleOpenModal = () => setIsOpen(true)
  const [count, setCount] = useState({})
  const navigate = useNavigate()
  return (
    <div className='flex flex-col'>
      <Modal className='bg-neutral-1' isOpen={isOpen} handleSubmit={handleCloseModal} handleCancel={handleCloseModal}>
        <div className='flex justify-center items-center'>
          <TimePicker.RangePicker className='w-[400px] h-[40px]' />
        </div>
      </Modal>

      <div className="flex justify-between items-center ">
        <p className='text-Medium+/Label/Large-Strong'>Appointments</p>
      </div>

      <div className='grid grid-cols-7 mt-[30px] border-y-2 py-4'>
        <div className='grid-col-1 text-Small/Title/xSmall'>Monday</div>
        <div className='grid-col-1 text-Small/Title/xSmall'>Tuesday</div>
        <div className='grid-col-1 text-Small/Title/xSmall'>Wednesday</div>
        <div className='grid-col-1 text-Small/Title/xSmall'>Thursday</div>
        <div className='grid-col-1 text-Small/Title/xSmall'>Friday</div>
        <div className='grid-col-1 text-Small/Title/xSmall'>Saturday</div>
        <div className='grid-col-1 text-Small/Title/xSmall'>Sunday</div>
      </div>

      <div className='grid grid-cols-7 py-4 border-b-2 '>
        <div className='grid-col-1'><Button onClick={handleOpenModal} type='outlined' label={'add timeslot'}></Button></div>
        <div className='grid-col-1'><Button type='outlined' label={'add timeslot'}></Button></div>
        <div className='grid-col-1'><Button type='outlined' label={'add timeslot'}></Button></div>
        <div className='grid-col-1'><Button type='outlined' label={'add timeslot'}></Button></div>
        <div className='grid-col-1'><Button type='outlined' label={'add timeslot'}></Button></div>
        <div className='grid-col-1'><Button type='outlined' label={'add timeslot'}></Button></div>
        <div className='grid-col-1'><Button type='outlined' label={'add timeslot'}></Button></div>
      </div>
    </div>
  )
}

export default Timeslot