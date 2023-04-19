import React, { FC } from 'react'
// import AuthCheck from '../AuthCheck/AuthCheck';
// import useTranslation from '../../hook/useTranslation'
import Logo from "../../assets/images/navbar-icons/company-logo.png"



const Auth = ({ children }) => {


  return (
    <div className="flex flex-col w-[100vw]  md:flex-row ">
      {/* <AuthCheck /> */}
      <div className="md:w-[50%] hidden  md:flex flex-col w-[100%] h-[100vh] bg-Foundation/primary/primary-8 flex flex-col px-[30px] ">
        {/* <img src={lab} alt="A lab experiment" class='object-cover object-center w-[100%]' /> */}
        <div className="mt-[30px]">
        <img src={Logo} alt="logo" className="w-[160px] mr-auto" />
          <h2 className="font-bold text-[2.5rem] text-Foundation/primary/primary-1">Get Favourite Cakes</h2>
          {/* <p className="font-semibold text-[1.125em]">{t('AUTH__SUBTITLE')}</p> */}
        </div>
        <div className="grid  relative grid-cols-4 grid-flow-row gap-4 mt-auto w-[100%] py-[60px]">
          {/* <img src="/assets/login_bg.png" alt="" className="absolute w-[100%] h-[100%]" /> */}
          

          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div />
          <div />
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div />
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
          <div className='w-[150px] h-[150px] flex rounded-[4px] overflow-hidden' >
            <img className='object-cover w-[100%]' src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" />
          </div>
        </div>
      </div>
      <div className="flex w-[100%] md:w-[50%] max-h-[100vh] overflow-y-scroll py-[60px]  justify-center  flex">
        <div className="md:w-[80%] w-[100%]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Auth