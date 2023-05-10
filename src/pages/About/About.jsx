import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import NavbarLogin from '../../components/Navbar/NavbarLogin'
import Footer from '../../components/Footer'
import About1 from '../../assets/images/Container.png'
import About2 from '../../assets/images/about.png'
import card1 from '../../assets/images/Home/card1.png'
import founder from '../../assets/images/BG.png'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'
import instagram from '../../assets/images/Instagram.png'
import linkdin from '../../assets/images/LinkedIn.png'


const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='About bg-neutral-4'>


      <div className="container mx-auto py-[60px]">

        <div className='grid grid-cols-12 gap-6 mb-[45px]'>
          <div className='col-span-8 mt-8'>
            <h1 className='text-Medium+/Title/Medium font-bold text-neutral-8'>Our Vision</h1>
            <p className='mt-3.5 text-neutral-9 text-Medium+/Paragraph/Large'>Our vision for the Ayurveda online consultation platform is to create a seamless and accessible platform where individuals can connect with highly trained Ayurveda practitioners and receive personalized, authentic, and effective health solutions, promoting overall wellbeing and a balanced lifestyle. <br />
              This app should provide facilities like SMS reminders, patient billing invoices, and digital and printed prescriptions.
              This app also provides the facility to store patient reports in patients’ profiles encrypted for confidentiality</p>
          </div>

          <div className='col-span-4 mt-8'>
            <img src={About1} alt="" />
          </div>
        </div>

        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-4 mt-8'>
            <img src={About2} alt="" />
          </div>

          <div className='col-span-8 mt-8'>
            <h1 className='text-Medium+/Title/Medium font-bold text-neutral-8'>Our Mission</h1>
            <p className='mt-3.5 text-neutral-9 text-Medium+/Paragraph/Large'>We aim to empower people worldwide to take control of their health and make informed decisions based on their unique needs while preserving and promoting the traditional wisdom of Ayurveda.
              The Ayurveda Online Consultation management system should be a Web & app for Ayurveda Patients who can connect with Doctors and schedule online appointments, interact, and Appropriate consultations, or advice receive medication.</p>
          </div>
        </div>

        <div className='mt-[120px]'>
          <div className='text-center'>
            <span className='text-Medium+/Title/Medium font-bold text-neutral-8'>Founder & Co-founder profile</span>
            <p className='mt-1 text-neutral-9 text-Medium+/Paragraph/Medium-strong'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
          </div>

          <div className='pt-10 grid sm:grid-cols-3 gap-[20px] '>
            <div className='grid-col-1 flex items-center justify-center'>
              <div className='bg-neutral-2 w-[75%] h-[100%] p-8 rounded-[24px] flex flex-col justify-center items-center'>
                <img className='mt-8 w-[95px] aspect-square rounded-full' src={founder} alt="" />
                <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>John Carter</h2>
                <span className='text-Small/Paragraph/Medium-Strong'>CEO & Co-Founder</span>
                <p className='mt-1.5 text-center'>This platform has made Ayurveda accessible to me, and I couldn't be happier with the results. I've had a complete transformation in my health and well-being, and I owe it all to the doctors on this platform.</p>
                <div className='mt-2 gap-4 flex mb-8'>
                  <div><button><img src={facebook} alt="" /></button></div>
                  <div><button><img src={twitter} alt="" /></button></div>
                  <div><button><img src={instagram} alt="" /></button></div>
                  <div><button><img src={linkdin} alt="" /></button></div>
                </div>
              </div>
            </div>

            <div className='grid-col-1 flex items-center justify-center'>
              <div className='bg-neutral-2 w-[75%] h-[100%] p-8 rounded-[24px] flex flex-col justify-center items-center'>
                <img className='mt-8 w-[95px] aspect-square rounded-full' src={founder} alt="" />
                <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>John Carter</h2>
                <span className='text-Small/Paragraph/Medium-Strong'>CEO & Co-Founder</span>
                <p className='mt-1.5 text-center'>This platform has made Ayurveda accessible to me, and I couldn't be happier with the results. I've had a complete transformation in my health and well-being, and I owe it all to the doctors on this platform.</p>
                <div className='mt-2 gap-4 flex mb-8'>
                  <div><button><img src={facebook} alt="" /></button></div>
                  <div><button><img src={twitter} alt="" /></button></div>
                  <div><button><img src={instagram} alt="" /></button></div>
                  <div><button><img src={linkdin} alt="" /></button></div>
                </div>
              </div>
            </div>

            <div className='grid-col-1 flex items-center justify-center'>
              <div className='bg-neutral-2 w-[75%] h-[100%] p-8 rounded-[24px] flex flex-col justify-center items-center'>
                <img className='mt-8 w-[95px] aspect-square rounded-full' src={founder} alt="" />
                <h2 className='mt-2.5 text-Small/Title/Medium text-primary-6'>John Carter</h2>
                <span className='text-Small/Paragraph/Medium-Strong'>CEO & Co-Founder</span>
                <p className='mt-1.5 text-center'>This platform has made Ayurveda accessible to me, and I couldn't be happier with the results. I've had a complete transformation in my health and well-being, and I owe it all to the doctors on this platform.</p>
                <div className='mt-2 gap-4 flex mb-8'>
                  <div><button><img src={facebook} alt="" /></button></div>
                  <div><button><img src={twitter} alt="" /></button></div>
                  <div><button><img src={instagram} alt="" /></button></div>
                  <div><button><img src={linkdin} alt="" /></button></div>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>

    </div>
  )
}

export default About