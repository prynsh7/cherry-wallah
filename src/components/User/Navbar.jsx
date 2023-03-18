import React from 'react'
import Card from '../partials/Card'
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { FiMapPin } from 'react-icons/fi'
import { RiShieldStarLine } from 'react-icons/ri'
import Button from '../Button/Button'

const Navbar = () => {
    const arr = [
        {
            icon: <AiOutlineUser />,
            title: 'Profile',
            active:true
        },
        {
            icon: <AiOutlineStar />,
            title: 'My Orders',
            active:false
        },
        {
            icon: <BiShoppingBag />,
            title: 'My Coupons',
            active:false
        },
        {
            icon: <FiMapPin />,
            title: 'Saved Addresses',
            active:false
        },
        {
            icon: <RiShieldStarLine />,
            title: 'Loayalty Points',
            active:false
        },
    ]
    return (
        <Card className='w-full py-[50px]'>
            <div className='flex flex-col gap-5'>
                {
                    arr?.map((i, key) => (
                        <Button text={i.title} leadingIcon icon={i?.icon} className="w-full" justify={'start'} type={i.active?"primary":"tertiary"}/>
                    ))
                }
            </div>
        </Card>
    )
}

export default Navbar