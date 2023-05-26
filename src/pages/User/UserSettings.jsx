import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import TimeSlots from '../../components/TimeSlots/TimeSlots'
import Input from '../../components/Input/Input'
import { Editable } from '@chakra-ui/react'
import { ProfileAPI } from '../../apis/profileAPI'
import Loader from '../../components/Loader'
import { PatientAPI } from '../../apis/patientAPI'
import CustomSelect from '../../components/Input/Select'
import { toast } from 'react-toastify'
import { handleFileUpload } from '../../data/upload'


const UserSettings = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)
    const handleOpenModal = () => setIsOpen(true)

    const [data, setData] = useState({})


    const [loading, setLoading] = useState(false)
    const [editable, setEditable] = useState(false)

    const [editData, setEditData] = useState({})

    const userId = JSON.parse(localStorage.getItem('user'))._id

    const getData = async () => {
        console.log('userId', userId);
        try {
            setLoading(true)
            const res = await PatientAPI.getPatient()
            if (res.success) {
                console.log(res);
                setData(res.data)
            }
            console.log(res);
        } catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            ;
            setLoading(false)
        }
    }

    const handleUpdate = async () => {
        console.log('userId', userId);
        try {
            setLoading(true)
            const res = await PatientAPI.updatePatient(editData)
            if (res.success) {
                toast.success('Profile Updated Successfully')
                getData()
                setEditable(false)
            }
        }
        catch (err) {
            console.log(err);
            const errMsg = err?.response?.data?.message || 'Something went wrong'
            toast.error(errMsg)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log('data', data);
        console.log('editData', editData);
    }, [data, editData])

    return (
        <div className='bg-neutral-4'>
            {
                loading ? <Loader /> : null
            }
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
                                    editable ?
                                        <>
                                            <button
                                                className='px-[10px] py-[4px] rounded border-[1px] border-primary-4 mr-3'
                                                onClick={() => {
                                                    console.log('editData', editData);
                                                    handleUpdate()
                                                }}
                                            >
                                                <i class="bi bi-save2 pr-[6px] text-primary-7"></i>
                                                <span className='text-primary-7'> Save Changes</span>
                                            </button>
                                            <button className='px-[10px] py-[4.5px] bg-linear rounded'
                                                onClick={() => setEditable(false)}
                                            >
                                                <span className='text-neutral-3'> Cancel</span>
                                            </button>
                                        </>
                                        :
                                        <button className='px-[10px] py-[4.5px] bg-linear rounded'
                                            onClick={() => {
                                                setEditable(true)
                                                setEditData(data)
                                            }}
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
                            <div className="grid grid-cols-3 mx-3">
                                <div className="col-1">
                                    <img src={editable?editData.avatar:data.avatar} className='w-[150px] h-[150px] rounded-full' alt="" />
                                </div>
                                <div className="col-1">
                                    <Input
                                        label='profile picture'
                                        type='file'
                                        inputStyle={'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]'}
                                        placeholder='Upload file'
                                        handleChange={async (e) => {
                                            let a = await handleFileUpload(e, 'avatar', data._id);
                                            console.log(a);
                                            setEditData({ ...editData, avatar: a })
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-5 py-[12px] px-[30px] text-primary-7'>
                                <div className="col-span-1">

                                    <Input
                                        label='Full Name'
                                        type='text'
                                        disabled={editable ? false : true}
                                        inputStyle={editable ? 'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                        placeholder='Enter Name'
                                        value={editable ? editData.name : data.name}
                                        handleChange={(e) => {
                                            setEditData({ ...editData, name: e.target.value })
                                            console.log('editData', editData);
                                        }}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Input
                                        label='Date of Birth'
                                        type='date'
                                        disabled={editable ? false : true}
                                        inputStyle={editable ? 'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                        placeholder='Enter DOBh'
                                        value={editable ? editData.dob : data.dob || 'NA'}
                                        handleChange={(e) => setEditData({ ...editData, dob: e.target.value })}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <CustomSelect
                                        label='Gender'
                                        disabled={editable ? false : true}
                                        inputStyle={editable ? 'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                        placeholder='Enter DOB'
                                        options={[
                                            {
                                                label: "Male",
                                                value: "male"
                                            },
                                            {
                                                label: "Female",
                                                value: "female"
                                            },
                                            {
                                                label: "Other",
                                                value: "other"
                                            }
                                        ]}
                                        value={editable ? editData.gender : data.gender || ''}
                                        handleChange={(e) => {
                                            setEditData({ ...editData, gender: e })
                                            console.log(e);
                                        }}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <CustomSelect
                                        label='Blood Group'
                                        disabled={editable ? false : true}
                                        inputStyle={editable ? 'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                        placeholder='Select Blood Group'
                                        options={[
                                            {
                                                label: "A+",
                                                value: "A+"
                                            },
                                            {
                                                label: "B+",
                                                value: "B+"
                                            },
                                            {
                                                label: "O+",
                                                value: "O+"
                                            },
                                            {
                                                label: "AB+",
                                                value: "AB+"
                                            },
                                            {
                                                label: "A-",
                                                value: "A-"
                                            },
                                            {
                                                label: "B-",
                                                value: "B-"
                                            },
                                            {
                                                label: "O-",
                                                value: "O-"
                                            },
                                            {
                                                label: "AB-",
                                                value: "AB-"
                                            }
                                        ]}
                                        value={editable ? editData.blood_group : data.blood_group || ''}
                                        handleChange={(e) => setEditData({ ...editData, blood_group: e })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Contact Info</h2>
                            </div>

                            <div className='grid grid-cols-3 py-[12px] gap-5 px-[30px] text-primary-7'>
                                <div className="col-span-1">
                                    <Input
                                        label='Email'
                                        type='email'
                                        disabled={editable ? false : true}
                                        inputStyle={editable ? 'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                        placeholder='Enter Email'
                                        value={editable ? editData.email : data.email}
                                        handleChange={(e) => {
                                            setEditData({ ...editData, email: e.target.value })
                                            console.log('editData', editData);
                                        }}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Input
                                        label='Phone'
                                        type='number'
                                        disabled={editable ? false : true}
                                        inputStyle={editable ? 'border-2 border-primary-2 w-[100%] rounded-[4px] py-[4px] px-[10px]' : 'bg-transparent border-0 outline-0'}
                                        placeholder='Enter Phone'
                                        value={editable ? editData.phone : data.phone}
                                        handleChange={(e) => {
                                            setEditData({ ...editData, phone: e.target.value })
                                            console.log('editData', editData);
                                        }}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Input
                                        label='Registration Date'
                                        type='date'
                                        disabled={true}
                                        inputStyle={'bg-transparent border-0 outline-0 w-[100%]'}
                                        value={data.registered_at || 'dd-mm-yyyy'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserSettings