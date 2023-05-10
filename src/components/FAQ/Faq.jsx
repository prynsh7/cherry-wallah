import React from 'react'
import Accordian from './Accordian'

const Faq = () => {
    return (
        <div className='FAQ'>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[60px]">
                <div className="col-span-2 mx-auto text-center">
                    <div className='text-Small/Title/xLarge md:text-Medium+/Title/xLarge text-primary-6'>
                        Frequently <br /> Asked Questions
                    </div>
                    <div className='text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large md:mt-[20px] mt-[8px] text-Neutral70'>
                       Everything you need to know about the Ayurveda Treatment. 
                    </div>
                </div>
                <div className="col-span-2 md:mt-[0px] mt-[32px] bg-neutral-1 rounded-[8px] ">
                    <Accordian />
                </div>
            </div>
        </div>
    )
}

export default Faq