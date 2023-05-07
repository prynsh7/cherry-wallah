import React from 'react'
import { PhoneFilled, VideoCameraFilled, InfoCircleFilled, CheckOutlined } from '@ant-design/icons'
import Button from '../../../components/Button/Button'


const renderChat = () => {
  return (
    <div className='flex border-[1px] border-neutral-3 cursor-pointer items-center bg-neutral-1 rounded-[8px] py-[10px] px-[5px] hover:shadow-sm hover:border-primary-3'>
      <div className='flex-[0.2]'>
        <div className='w-[40px] h-[40px] rounded-[50%] border-[1px] bg-primary-2'></div>
      </div>
      <div className='flex-[0.6] text-Medium+/Label/Medium text-neutral-10'>
        <p>Priyansh Raj</p>
        <p className='text-Medium+/Paragraph/xSmall text-neutral-6'>This is a message</p>
      </div>
      <div className='flex-[0.2] text-Medium+/Label/xSmall text-neutral-6'>
        20 min
      </div>
    </div>)
}

function Chat() {
  return (
    <div className='flex  gap-[10px] '>
      <div
        className='w-[35%] p-[10px] shadow-md border-[1px] border-primary-2 bg-neutral-1 rounded-[10px] max-h-[80vh] overflow-y-auto'
      >
        <h2 className='mb-[30px] text-Medium+/Paragraph/Large'>Messages</h2>
        <div className='flex flex-col gap-[10px]'>
          {
            [...Array(10)].map((e, i) => renderChat())
          }
        </div>

      </div>

      <div
        className='w-[65%] bg-neutral-1 shadow-md border-[1px] border-primary-2 rounded-[10px] border-[1px] h-[80vh] '
      >
        <div className='flex items-center gap-[15px] border-b-[1px] border-primary-2 p-[10px] '>
          <div className='w-[60px] h-[60px] rounded-[50%] border-[1px] bg-primary-3'></div>
          <div className='flex flex-col'>
            <h6 className='text-Medium+/Label/Medium'>Priyansh raj</h6>
            <p className='text-Medium+/Label/xSmall'>Hubli, karnataka</p>
          </div>
          <div className='flex gap-[20px] ml-auto'>
            <PhoneFilled className="text-[22px] text-primary-6 opacity-[0.8]" />
            <VideoCameraFilled className="text-[22px] text-primary-6 opacity-[0.8]" />
            <InfoCircleFilled className="text-[22px] text-primary-6 opacity-[0.8]" />
          </div>
        </div>

        <div className='h-[100%] relative '>


          <div className='chatbox'>

          </div>


          <div className='p-[20px] absolute bottom-0 translate-y-[-95%] w-[100%]'>
            <div className='border-[1px] border-primary-2 rounded-[8px] flex px-[10px] py-[5px] shadow-md'>
              <input type="text" className="w-[80%] bg-transparent outline-none" placeholder="Type a message" />
              <div className='w-[20%] '>
                <button className='bg-linear flex gap-[10px] justify-center p-[10px] align text-neutral-1 text-Medium+/Label/Small-Strong rounded-[4px] ml-auto'>
                <i className="bi bi-send-fill text-[20px]"></i>
                </button>

              </div>
            </div>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Chat