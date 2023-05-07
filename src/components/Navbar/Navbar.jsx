import React from 'react'
import companyLogo from '../../assets/images/logo.png'


const Navbar = ({multimenu=true}) => {
  return (
    <div className='shadow-lg'>
        <div className='bg-primary-6'>
             <div className='flex justify-between items-center px-[2.5rem]'>
                <div className='w-[220px]'>
                    <img src={companyLogo} alt="cherry company logo" className='h-[auto] w-[auto]'
                    />
                </div>

               <div className='relative'>

                <input type="text" placeholder='Search' className='p-5 pr-10 w-[30rem] h-[2.4rem] rounded  bg-primary-1'/>
                {/* <img src={search} alt="a searchbar icon" className='absolute right-[10px] top-[8px] w-[1.6rem]' /> */}
               </div>


             </div>
       
        </div>
        
        </div>
  )
}

export default Navbar