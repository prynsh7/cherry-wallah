import React from 'react'
import companyLogo from '../assets/images/navbar-icons/company-logo.png'
import location from '../assets/images/navbar-icons/location.png'
import wallet from '../assets/images/navbar-icons/wallet.png'
import cart from '../assets/images/navbar-icons/cart.png'
import user from '../assets/images/navbar-icons/User.png'
import menu from '../assets/images/navbar-icons/menu.png'
import search from '../assets/images/navbar-icons/input-search-icon.png'

const Navbar = () => {
  return (
    <div className='h-[150px]'>
        <div className='bg-Foundation/primary/primary-6'>
             <div className='flex justify-between items-center px-[2.5rem]'>
                <div className='h-[5rem] w-[11rem]'>
                    <img src={companyLogo} alt="cherry company logo" className='h-[100%] w-[100%]'
                    />
                </div>

               <div className='relative'>

                <input type="text" placeholder='Search' className='p-5 pr-10 w-[30rem] h-[2.4rem] rounded  bg-Foundation/primary/primary-1'/>
                <img src={search} alt="a searchbar icon" className='absolute right-[10px] top-[8px] w-[1.6rem]' />
               </div>


                <div className='flex gap-8'>
                   <img src={location} alt="location icon"/>
                   <img src={wallet} alt="wallet icon" />
                   <img src={cart} alt="user cart" />
                   <img src={user} alt="user profile" />
                   <img src={menu} alt="menu icon" />
                </div>
             </div>
       
        </div>
        <div className='flex justify-center items-center p-4 text-Small/Label/Large-Strong text-Foundation/neutral/neutral-8'>
             <select name="cakes" id="cakes" className='capitalize'>
                <option value="">Cakes</option>
                <option value="">Chocolate cake</option>
                <option value="">ButterScotch cake</option>
                <option value="">Strawberry cake</option>
             </select>
             <select name="designer cakes" id="designer cakes" className='capitalize'>
                <option value="">designer cakes</option>
                <option value="">Chocolate cake</option>
                <option value="">ButterScotch cake</option>
                <option value="">Strawberry cake</option>
             </select>
             <select name="desserts" id="desserts" className='capitalize'>
                <option value="">desserts</option>
                <option value="">Chocolate cake</option>
                <option value="">ButterScotch cake</option>
                <option value="">Strawberry cake</option>
             </select>
             <select name="birthday" id="birthday" className='capitalize'>
                <option value="">birthday</option>
                <option value="">Chocolate cake</option>
                <option value="">ButterScotch cake</option>
                <option value="">Strawberry cake</option>
             </select>
             <select name="city" id="city" className='capitalize'>
                <option value="">by cities</option>
                <option value="">Chocolate cake</option>
                <option value="">ButterScotch cake</option>
                <option value="">Strawberry cake</option>
             </select>
             <select name="occasions" id="occasions" className='capitalize'>
                <option value="">occasions</option>
                <option value="">Chocolate cake</option>
                <option value="">ButterScotch cake</option>
                <option value="">Strawberry cake</option>
             </select>
        </div>
        <hr className='text-Foundation/neutral/neutral-5 opacity-50'/>
        </div>
  )
}

export default Navbar