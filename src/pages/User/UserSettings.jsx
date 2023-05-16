import React from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'


const UserSettings = () => {
    return (
        <div className='bg-neutral-4'>
            <div className='container mx-auto px-[12px] py-[30px]'>

                <div className='pb-[32px]'>
                    <div className='pb-[32px] mx-[32px] gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className='mx-[28px] mt-[20px] flex'>
                            <h3 className='text-Small/Title/Medium text-[black]'>Settings</h3>
                        </div>
                        <div className='flex mx-[28px] gap-4 justify-end'>
                        <div className=''>
                            <button className='px-[10px] py-[4px] rounded border-2 border-primary-4'><i class="bi bi-pencil-square pr-[6px] text-primary-7"></i> <span className='text-primary-7'>Edit Password</span> </button>
                        </div>
                        <div className=''>
                            <button className='px-[10px] py-[4px] rounded bg-linear border-2 border-primary-4'><i class="bi bi-pencil-square pr-[6px] text-neutral-3"></i> <span className='text-neutral-3'>Edit Details</span> </button>
                        </div>
                        </div>
                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Basic info</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Full Name <br />Aditya Anand</p>
                                <p>Date of Birth <br />12th August 2023</p>
                                <p>Gender <br />Male</p>
                                <p>Blood Group <br />A+</p>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Contact Info</h2>
                            </div>

                            <div className='flex py-[12px] gap-20 px-[30px] text-primary-7'>
                                <p>Contact Number <br />12344252334233</p>
                                <p>Registration email<br />loremipsum@gmail.com</p>
                                <p>Registration Date<br />20-04-23</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSettings