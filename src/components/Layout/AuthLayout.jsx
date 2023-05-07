import React, { FC } from 'react'
// import AuthCheck from '../AuthCheck/AuthCheck';
// import useTranslation from '../../hook/useTranslation'
import bannerImg from "../../assets/images/Auth/banner.png";



const Auth = ({ children }) => {


  return (
    <div className="flex flex-col w-[100vw]  md:flex-row ">
      {/* <AuthCheck /> */}
      <div className="md:w-[50%] hidden  md:flex flex-col w-[100%] h-[100vh] bg-primary-2 flex flex-col px-[30px] ">
        <div className="flex m-auto flex-col justify-center items-center">
        <img src={bannerImg} alt="logo" className="w-[300px]" />
        </div>
        
      </div>
      <div className="flex w-[100%] md:w-[50%] max-h-[100vh] overflow-y-scroll py-[60px]  justify-center  flex">
        <div className="md:w-[90%] w-[100%]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Auth