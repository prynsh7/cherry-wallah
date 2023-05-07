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

    </div>
  )
}

export default Calendar