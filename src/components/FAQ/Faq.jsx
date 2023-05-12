import React from 'react'
import Accordian from './Accordian'

const Faq = () => {
    return (
        <div className='FAQ'>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[60px]">
                <div className="col-span-2 mx-auto text-center">
                    <div className='text-Medium+/Title/Medium font-bold text-neutral-8'>
                        Frequently Asked Questions
                    </div>
                    <div className='text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large md:mt-[20px] mt-[8px] text-Neutral70'>
                       Everything you need to know about the Ayurveda Treatment. 
                    </div>
                </div>
                <div className="col-span-2 md:mt-[0px] mt-[32px] flex items-center justify-center  rounded-[8px] ">
                    <Accordian />
                </div>
            </div>
        </div>
    )
}

export default Faq