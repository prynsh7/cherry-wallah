import React from 'react'
import card1 from '../../assets/images/Home/card1.png'
const services = () => {
    return (
        <div className='bg-neutral-4'>
            <div className='container mx-auto px-[32px] py-[64px]'>
                <div className='text-center'>
                    <span className='text-Medium+/Title/Medium font-bold text-neutral-8'>Services we provide </span>
                    <p className='mt-1 text-neutral-9 text-Medium+/Paragraph/Medium-strong'>Join us today and unlock the power of this timeless system of medicine to enhance your physical, mental, and spiritual well-being.</p>
                </div>
                <div className='pt-10 grid sm:grid-cols-4 gap-6'>
                    <div className=' grid-col-1'>
                        <div className='bg-neutral-2 w-[100%] h-[100%] p-4 rounded-[24px]'>
                            <img className='w-[100%]' src={card1} alt="" />
                            <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>Video Consultancy</h2>
                            <p className='mt-1.5'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm vel facilisis volutpat est velitolm.</p>
                        </div>
                    </div>

                    <div className='grid-col-1'>
                        <div className='bg-neutral-2 w-[100%] h-[100%] p-4 rounded-[24px]'>
                            <img className='w-[100%]' src={card1} alt="" />
                            <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>Chat</h2>
                            <p className='mt-1.5'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm vel facilisis volutpat est velitolm.</p>
                        </div>
                    </div>

                    <div className='grid-col-1'>
                        <div className='bg-neutral-2 w-[100%] h-[100%] p-4 rounded-[24px]'>
                            <img className='w-[100%]' src={card1} alt="" />
                            <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>Yoga</h2>
                            <p className='mt-1.5'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm vel facilisis volutpat est velitolm.</p>
                        </div>
                    </div>

                    <div className='grid-col-1'>
                        <div className='bg-neutral-2 w-[100%] h-[100%] p-4 rounded-[24px]'>
                            <img className='w-[100%]' src={card1} alt="" />
                            <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>Medicine</h2>
                            <p className='mt-1.5'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm vel facilisis volutpat est velitolm.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default services