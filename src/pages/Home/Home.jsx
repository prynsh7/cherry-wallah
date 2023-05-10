import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'

import NavbarLogin from '../../components/Navbar/NavbarLogin'
import banner from '../../assets/images/Home/Home.png'
import card1 from '../../assets/images/Home/card1.png'
import test1 from '../../assets/images/Home/test1.jpg'
import Faq from '../../components/FAQ/Faq'


const Home = () => {

  return (
    <div className='bg-neutral-4'>

      <div className="container mx-auto px-3">


        <div className='py-5'>
          <div className='bg-[#CFE1DF] py-2 px-6 rounded-lg flex justify-between items-center'>
            <h4 className='font-semibold text-primary-6'>You have a upcoming appointment on 17th May 2023</h4>
            <i className='bi bi-x text-primary-10 text-[22px] cursor-pointer'></i>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1'>
          <div className='py-5 col-span-1 mt-20 flex flex-col gap-6'>
            <div>
              <span className='text-Medium+/Title/Large font-semibold'>Providing Quality <span className='text-neutral-8'>Healthcare</span> for a <span className='text-[#5E912E]'>Brighter</span> and <span className='text-[#5E912E]'>Healthy</span> Future</span>
              <br />
              <p className='mt-3.5 text-neutral-9 text-Medium+/Paragraph/Large'>Welcome to our Online Ayurveda Consultation platform, where you can connect with certified Ayurveda practitioners and receive personalized guidance on your journey toward optimal health and wellness.</p>
            </div>
            <div>
              <button className="py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]">
                Appointments
              </button>
            </div>
          </div>
          <div className='col-span-1 flex justify-center items-center  '>
            <img className='w-[450px]' src={banner} alt="" />
          </div>
        </div>

        <div className='grid gap-4'>
          <div className='py-5'>
            <span className='text-Medium+/Title/Large font-semibold text-neutral-8'>Find your Doctor</span>
            <p className='mt-1.5 text-neutral-9 text-Medium+/Paragraph/Large'>Say goodbye to the hassle of physical appointments and experience the convenience and comfort of receiving top-quality Ayurveda care from the comfort of your own home.</p>
          </div>

          <div className='py-5'>
            <span className='text-Medium+/Title/Large font-semibold text-neutral-8'>Video Consultation</span>
            <p className='mt-1.5 text-neutral-9 text-Medium+/Paragraph/Large'>Join us today and unlock the power of this timeless system of medicine to enhance your physical, mental, and spiritual well-being.</p>
          </div>
        </div>

        <div className='py-5'>
          <div className='bg-neutral-2 p-5 flex gap-6 justify-center items-center rounded-[8px]'>
            <input className="border-[1px] rounded-[4px] p-[10px]" placeholder="Enter City" />
            <input className="border-[1px] rounded-[4px] p-[10px]  w-[420px]" placeholder="Search doctors, clinics, hospitals, etc." />
            <button className="py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]">
              Search
            </button>
          </div>
        </div>

        <div className='text-center pt-16'>
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

        <div className='text-center pt-16'>
          <span className='text-Medium+/Title/Medium font-bold text-neutral-8'>Risks and issues</span>
          <p className='mt-1 text-neutral-9 text-Medium+/Paragraph/Medium-strong'>Online Ayurveda Consultation services will be based on technology and it is inevitable that we will need to support users when they encounter problems with the technology. This will be more challenging with real-time models of Online Ayurveda Consultation, as we have to contend with scenarios that might be beyond your control. These problems can include bandwidth or connectivity issues which can sometimes impact specific internet routes or websites and result in frustrating user experiences. Online Ayurveda Consultation services typically also have hardware or software dependencies that are beyond your control like the quality of the user’s camera, faulty microphones, speakers, unsupported browsers, and problematic mobile phone operating systems with specific bugs that impact your service. Both your patients and providers would be impacted by technology issues and depending on the level of your Online Ayurveda Consultation practice, you would need to provide support for them. The typical support channels would include:</p>
        </div>

        <div className='text-center pt-16'>
          <span className='text-Medium+/Title/Medium font-bold text-neutral-8'>Testimonial</span>
          <p className='mt-1 text-neutral-9 text-Medium+/Paragraph/Medium-strong'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
        </div>

        <div className='pt-10 grid sm:grid-cols-4 gap-6'>
          <div className='grid-col-1'>
            <div className='bg-neutral-2 w-[100%] h-[100%] p-8 rounded-[24px]'>
              <img className='w-[80px] aspect-square rounded-full' src={test1} alt="" />
              <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>“An amazing service”</h2>
              <p className='mt-1.5 text-justify'>This platform has made Ayurveda accessible to me, and I couldn't be happier with the results. I've had a complete transformation in my health and well-being, and I owe it all to the doctors on this platform.</p>
            </div>
          </div>
          <div className='grid-col-1'>
            <div className='bg-neutral-2 w-[100%] h-[100%] p-8 rounded-[24px]'>
              <img className='w-[80px] aspect-square rounded-full' src={test1} alt="" />
              <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>“One of a kind service”</h2>
              <p className='mt-1.5 text-justify'>I was skeptical about Ayurveda, but this platform made me a believer. The doctor I consulted with was thorough and recommended a personalized treatment plan that has greatly improved my well-being.</p>
            </div>
          </div>
          <div className=' grid-col-1'>
            <div className='bg-neutral-2 w-[100%] h-[100%] p-8 rounded-[24px]'>
              <img className='w-[80px] aspect-square rounded-full' src={test1} alt="" />
              <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>“The best service”</h2>
              <p className='mt-1.5 text-justify'>I found the perfect Ayurvedic practitioner on this platform. The consultation was seamless, and the treatment recommended has shown impressive results. Thank you for the excellent service."</p>
            </div>
          </div>
          <div className=' grid-col-1'>
            <div className='bg-neutral-2 w-[100%] h-[100%] p-8 rounded-[24px]'>
              <img className='w-[80px] aspect-square rounded-full' src={test1} alt="" />
              <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>“An amazing service”</h2>
              <p className='mt-1.5 text-justify'>This platform has made Ayurveda accessible to me, and I couldn't be happier with the results. I've had a complete transformation in my health and well-being, and I owe it all to the doctors on this platform.</p>
            </div>
          </div>
        </div>

        <div className="py-[90px]">
          <Faq />
        </div>
      </div>

    </div>
  )


}

export default Home