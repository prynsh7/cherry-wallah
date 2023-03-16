import React from 'react'
import companyLogo from '../assets/images/navbar-icons/company-logo.png'
import facebook from '../assets/images/footer/facebook.png'
import instagram from '../assets/images/footer/instagram.png'
import twitter from '../assets/images/footer/twitter.png'


const Footer = () => {
    return (
        <div className='h-[25.5rem] text-[white] bg-Foundation/primary/primary-6 flex gap-[3.75rem] justify-between items-start px-[5rem] py-[4rem]'>

            <div>
                <img src={companyLogo} alt="" />
            </div>

            <div className=''>

                <div className='capitalize text-Small/Title/Medium'>know Us</div>
                <div className='flex flex-col gap-y-[1.25rem] text-Medium+/Paragraph/Large mt-[1.5rem]'>
                    <div>Our Story</div>
                    <div>Contact Us</div>
                    <div>Locate Us</div>
                    <div>Blog</div>
                </div>

            </div>
            <div className=' self-start'>

                <div className='capitalize text-Small/Title/Medium'>Need Help</div>
                <div className='flex flex-col gap-y-[1.25rem] text-Medium+/Paragraph/Large mt-[1.5rem]'>
                    <div>FAQ</div>
                    <div>Cancellation and refund</div>
                    <div>Privacy Policy</div>
                    <div>Terms and condition</div>
                </div>

            </div>
            <div className=' self-start'>

                <div className='capitalize text-Small/Title/Medium'>More Info</div>
                <div className='flex flex-col gap-y-[1.25rem] text-Medium+/Paragraph/Large mt-[1.5rem]'>
                    <div>Offers</div>
                    <div>Download app</div>
                </div>

            </div>
            <div className=' self-start'>

                <div className='capitalize text-Small/Title/Medium'>Find us</div>
                <div className='flex flex-col  gap-y-[1.25rem] mt-[1.5rem]'>
                    <div className='flex gap-x-[8px]'>

                        <img src={facebook} alt="" />

                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <i class="bi bi-youtube"></i>
                    </div>
                    <div className='capitalize text-Small/Title/Medium'>subscribe newsletter</div>

                    <div>
                        <input type="email" placeholder='Enter your email' className='p-5 pr-10 h-[3rem] rounded  bg-Foundation/primary/primary-1' />
                    </div>

                    <div className='grow'>
                        <button className='text-Medium+text-Medium+/Label/Small-Strong w-[100%] mx-auto py-[1rem] rounded-lg bg-Foundation/primary/primary-9 text-[white]'>
                            Subscribe
                        </button>
                    </div>
                </div>


            </div>

        </div>




    )
}

export default Footer