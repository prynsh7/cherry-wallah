import React from 'react'
import Button from '../../components/Button/Button'
import Checkbox from 'antd/es/checkbox/Checkbox'
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
const Contact = () => {
    return (
        <div className='bg-neutral-4'>
            <div className='container mx-auto px-[32px] py-[64px]'>
                <div className='text-center'>
                    <span className='text-Medium+/Title/Medium font-bold text-neutral-8'>Contact Us</span>
                    <p className='mt-1 text-neutral-9 text-Medium+/Paragraph/Medium-strong'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className='flex justify-center gap-8 mt-[34px]'>
                    <div className="w-[460px] flex flex-col">
                        <label className="text-[#333333] opacity-70 text-[16px]">First name</label>
                        <input className=' border-[1px] rounded-[4px] p-[10px] mt-[5px]' placeholder='Enter your first name' type="name" />
                    </div>
                    <div className="w-[460px] flex flex-col">
                        <label className="text-[#333333] opacity-70 text-[16px]">Last name</label>
                        <input className=' border-[1px] rounded-[4px] p-[10px] mt-[5px]' placeholder='Enter your last name' type="name" />
                    </div>
                </div>
                <div className='flex justify-center gap-8 mt-[16px]'>
                    <div className="w-[460px] flex flex-col">
                        <label className="text-[#333333] opacity-70 text-[16px]">Email</label>
                        <input  className=' border-[1px] rounded-[4px] p-[10px] mt-[5px]' placeholder='Enter your email' type="name" />
                    </div>
                    <div className="w-[460px] flex flex-col">
                        <label className="text-[#333333] opacity-70 text-[16px]">Phone number</label>
                        <input className=' border-[1px] rounded-[4px] p-[10px] mt-[5px]' placeholder='Enter your phone number' type="name" />
                    </div>
                </div>
                <div className='flex justify-center mt-[16px]'>
                    <div className="w-[962px] flex flex-col">
                        <label className="text-[#333333] opacity-70 text-[16px]">Choose a topic</label>
                        <select className='h-[40px]'
                            style={{
                                width: '100%',
                                height: '40px',
                                marginTop: '5px',
                                borderRadius: '4px',
                            }} name="" id="">

                        </select>
                    </div>
                </div>
                <div className=' flex justify-center mt-[16px]'>
                    <div className="w-[970px] flex flex-col">
                        <label className="text-[#333333] opacity-70 text-[16px]">Message</label>
                        <textarea className='mt-[5px] p-[12px] rounded-[4px]' placeholder='Type your message...' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className='flex pl-[250px] mt-[18px]'>
                <Checkbox onChange={onChange}>I accept the terms</Checkbox>
                </div>
                <div className='flex justify-center mt-[32px]'>
                    <Button className={'w-[250px]'} type='primary' label={'Submit'}></Button>
                </div>
            </div>
        </div>
    )
}

export default Contact