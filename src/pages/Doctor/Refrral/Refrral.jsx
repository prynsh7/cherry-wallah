import React from 'react'
import Qr from '../../../assets/images/qr1.png'
import Button from '../../../components/Button/Button'
import QRCode from 'react-qr-code'
import {FRONTENT_URL } from '../../../utils/apiConstants'

const Refrral = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className='flex flex-col'>
            <p className='text-Medium+/Label/Large-Strong '>Referral</p>
            <div className='bg-linear p-[24px] mt-[24px] grid grid-cols-3 items-center rounded'>
                <div className='col-span-2'>
                    <p className='text-Medium+/Label/Large-Strong text-neutral-1'>Referral Program</p>
                    <p className='text-neutral-1 py-[14px]'>Now you can refer digi Ayurveda</p>
                    <div className='text-neutral-1'>
                        <p>Refer Program Benefit 1</p>
                        <p>Refer Program Benefit 1</p>
                        <p>Refer Program Benefit 1</p>
                    </div>
                    <div className='bg-[#95B6B1] p-[10px] w-[500px] mt-[14px] rounded flex justify-between items-center'>
                        <p className='font-bold'>HUUIASF897JFSKF898</p>
                        <Button type='outlined' className={' px-2.5 py-1.5'} label={<div><i class="bi bi-clipboard"></i></div>}/>
                    </div>
                </div>
               <div className="col-span-1 flex justify-end">
                {
                    user?._id&&
                    <QRCode value={`${FRONTENT_URL}/doctors/detail/${user?._id}`}/>
                }
               </div>
            </div>

        </div>
    )
}

export default Refrral