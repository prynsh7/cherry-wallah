import React from 'react'
import Button from '../../../components/Button/Button'
import { Calendar as CustomCalendar } from 'antd';

function Calendar() {
  const [count, setCount] = React.useState({})

  const [appointment, setAppointment] = React.useState([])

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };


  return (
    <div className='flex flex-col '>
      <div className="flex justify-between items-center ">
        <p className='text-Medium+/Label/Large-Strong'>Calendar</p>
      </div>


      <div className="mt-[30px] flex justify-between items-center ">
        <h6 className="text-Medium+/Label/Medium ">{""}</h6>
        {/* <Button type='primary' label='+ Add Patient' /> */}
      </div>

      <div className='mt-[30px] max-h-[70vh] overflow-scroll'>
        <CustomCalendar className='h-[80vh]' fullscreen={true} onPanelChange={onPanelChange} />
      </div>

      <div className='py-6'>
        <p className='text-Medium+/Label/Large-Strong'>Pick a time slot</p>
      </div>

      <div className='flex flex-col'>
        <h3 className='text-[16px] font-bold m-[4px]'>Session 1</h3>
        <div className='flex gap-6'>
          <div className='flex justify-between w-[50%] rounded-[4px] p-[12px] bg-neutral-4'>
            <p className='mx-2'>Start time</p>
            <p className='mx-2'>09:30 AM</p>
          </div>
          <div className='flex justify-between w-[50%] rounded-[4px] p-[12px] bg-neutral-4'>
            <p className='mx-2'>Start time</p>
            <p className='mx-2'>09:30 AM</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-2'>
        <h3 className='text-[16px] font-bold m-[4px]'>Session 2</h3>
        <div className='flex gap-6'>
          <div className='flex justify-between w-[50%] rounded-[4px] p-[12px] bg-neutral-4'>
            <p className='mx-2'>Start time</p>
            <p className='mx-2'>09:30 AM</p>
          </div>
          <div className='flex justify-between w-[50%] rounded-[4px] p-[12px] bg-neutral-4'>
            <p className='mx-2'>Start time</p>
            <p className='mx-2'>09:30 AM</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between p-[12px] mt-[24px] bg-neutral-4 rounded-[8px]'>
            <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'> <span className='text-primary-7'>Cancel</span> </button>
            <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'><span className='text-primary-7'>Save</span> </button>
          </div>
    </div>
  )
}

export default Calendar