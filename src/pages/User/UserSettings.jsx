import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import TimeSlots from '../../components/TimeSlots/TimeSlots'
import Input from '../../components/Input/Input'
import { Editable } from '@chakra-ui/react'

const UserSettings = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)
    const handleOpenModal = () => setIsOpen(true)

    const [editable, setEditable] = useState(false)

    return (
        <div className='bg-neutral-4'>
            <Modal width={'50%'} className='bg-neutral-1' isOpen={isOpen} handleSubmit={handleCloseModal} handleCancel={handleCloseModal}>

                <p className='text-Medium+/Label/Large-Strong'>Change Password</p>
                <div className='gap-2 flex flex-col py-[20px]'>
                    {/* <div>
                <p>Current Password*</p>
                    <input className='outline-none border-2 border-primary-2 w-full rounded-[4px] py-[4px] px-[10px]' type="password" placeholder='Enter Current Password' />
                </div> */}
                    <Input
                        label='Current Password *'
                        type='password'
                        placeholder='Enter Current Password'
                    />

                    <Input
                        label='New Password *'
                        type='password'
                        placeholder='Enter New Password'
                    />
                    <Input
                        label='Confirm Password *'
                        type='password'
                        placeholder='Confirm New Password'
                    />
                </div>
            </Modal>
            <div className='container mx-auto px-[12px] py-[30px]'>

                <div className='pb-[32px]'>
                    <div className='pb-[32px] mx-[32px] gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className='mx-[28px] mt-[20px] flex'>
                            <h3 className='text-Small/Title/Medium text-[black]'>Settings</h3>
                        </div>
                        <div className='flex mx-[28px] gap-4 justify-end'>
                            <div className=''>
                                <button onClick={handleOpenModal} className='px-[10px] py-[4px] rounded border-[1px] border-primary-4'><i class="bi bi-pencil-square pr-[6px] text-primary-7"></i> <span className='text-primary-7'>Edit Password</span> </button>
                            </div>
                            <div className=''>
                                {
                                    editable ? <button className='px-[10px] py-[4.5px] bg-linear rounded'
                                        onClick={() => setEditable(false)}
                                    >
                                        <span className='text-neutral-3'> Cancel</span>
                                    </button> : <button className='px-[10px] py-[4.5px] bg-linear rounded'
                                        onClick={() => setEditable(true)}
                                    ><i class="bi bi-pencil-square pr-[6px] text-neutral-3"
                                    ></i> <span className='text-neutral-3'> Edit Details</span>
                                    </button>
                                }
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
                                <Input
                                    label='Email'
                                    type='email'
                                    disabled={editable ? false : true}
                                    inputStyle={editable ? 'border-2 border-primary-2 w-[300px] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                    placeholder='Enter Email'
                                    value={"email@email.com"}
                                />
                                <Input
                                    label='Phone'
                                    type='number'
                                    disabled={editable ? false : true}
                                    inputStyle={editable ? 'border-2 border-primary-2 w-[300px] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                    placeholder='Enter Phone'
                                    value={9661396318}
                                />

                                <Input
                                    label='Registration Date'
                                    type='date'
                                    disabled={editable ? false : true}
                                    inputStyle={editable ? 'border-2 border-primary-2 w-[300px] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                    placeholder='Enter Email'
                                    value={new Date('02/02/2021')}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSettings