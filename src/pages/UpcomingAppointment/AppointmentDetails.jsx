import React, { useEffect, useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { Table } from 'antd';
import CustomPagination from '../../components/Pagination/Pagination';
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader';
import { AppointmentAPI } from '../../apis/appointmentAPI';
import { toast } from 'react-toastify';
import avatar from './../../assets/images/avatars/avatar.avif'

const AppointmentDetails = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [appointment, setAppointment] = useState()
    const [diagnosis, setDiagnosis] = useState()


    const { appointmentId } = useParams()

    const getData = async () => {
        try {
            setLoading(true)
            const res = await AppointmentAPI.getAppointmentById(appointmentId)
            if (res.success) {
                setAppointment(res.data.appointment)
                console.log(res.data.appointment);
            }
        }
        catch (err) {
            console.log(err)
            toast.error(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [appointmentId])
    return (
        <div>
            {
                loading ? <Loader /> : null
            }

            <div className='container mx-auto px-[12px]'>
                <div className='pt-[32px]'>
                    <div className='mt-[24px]'>
                        <p className='mb-[32px] text-Medium+/Label/Large-Strong'>Patient Details</p>
                        <div className='bg-[#ffff] border-primary-2 border-2 flex p-[20px] rounded-[10px]'>
                            <div className='flex items-center gap-6 '>
                                <div className='text-center'>
                                    <img className='w-[150px] aspect-square rounded-full' src={avatar} alt="" />
                                </div>
                                <div className='font-semibold flex gap-28 px-[30px] text-primary-7'>
                                    <h3>Full Name <br />{appointment?.patient_details?.fullname}</h3>
                                    <h3>Email <br />{appointment?.patient_details?.email}</h3>
                                    <h3>Phone <br />{appointment?.patient_details?.phone_number}</h3>
                                    <h3>Covid Vaccinated <br />{appointment?.patient_details?.covidVaccination}</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='mt-[24px]'>
                        <p className='mb-[32px] text-Medium+/Label/Large-Strong'>Doctor Details</p>
                        <div className='bg-[#ffff] border-primary-2 border-2 flex p-[20px] rounded-[10px]'>
                            <div className='flex items-center gap-6 '>
                                <div className='text-center'>
                                    <img className='w-[150px] aspect-square rounded-full' src={appointment?.doctor?.profile_image || avatar} alt="" />
                                </div>
                                <div className='font-semibold flex gap-28 px-[30px] text-primary-7'>
                                    <h3>Full Name <br />{appointment?.doctor?.name}</h3>
                                    <h3>Specialization <br />{appointment?.doctor?.speciality}</h3>
                                    <h3>Gender <br />{appointment?.doctor?.gender}</h3>
                                    <h3>City <br />{appointment?.doctor?.city}</h3>
                                    <h3> Fees <br />{appointment?.consultation_fee}</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='py-[32px]'>
                    <div className='gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className='mt-[20px] flex justify-between'>
                            <h3 className='text-Medium+/Label/Large-Strong text-[black]'>Diagnosis Report</h3>
                        </div>
                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Vital Sign</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Weight <br />{diagnosis?.vital_signs?.weight} Kg</p>
                                <p>DBP (mm Hg) <br />{diagnosis?.vital_signs?.bp?.diastole}</p>
                                <p>SBP (mm Hg) <br />{diagnosis?.vital_signs?.bp?.systole}</p>
                                <p>Pulse (heart beat/min) <br /> {diagnosis?.vital_signs?.pulse}</p>
                                <p>Temperature <br />{diagnosis?.vital_signs?.temperature}</p>
                                <p>Respiratory Rate <br />{diagnosis?.vital_signs?.bp?.respiratory_rate}</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Clinical Notes</h2>
                            </div>

                            <div className='flex py-[12px] gap-20 px-[30px] text-primary-7'>
                                <p>{diagnosis?.clinical_notes?.instruction}</p>
                                <p>{diagnosis?.clinical_notes?.complaint}</p>
                            </div>
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='flex justify-between items-center text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Prescription</h2>
                            </div>
                            {
                                diagnosis?.prescription?.prescribedMedicines?.map((i, key) => (
                                    <div key={key} className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                        <p>Drugs <br />{i?.medicine}</p>
                                        <p>Dosage and Frequency <br />{i?.dosage}</p>
                                        <p>Duration <br />{i?.duration}</p>
                                        <p>Remarks <br />{i?.remarks}</p>
                                    </div>
                                ))
                            }

                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Treatment Plan</h2>
                            </div>

                            {
                                diagnosis?.treatment_plan?.assignedPlans?.map((i, key) => (
                                    <div key={key} className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                        <p>Procedure <br />{i?.treatment_plan}</p>
                                        <p>Discount <br />₹ {i?.discount}</p>
                                        <p>Cost (₹) <br />₹ {i?.cost}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className=' border-2 border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Lab Orders</h2>
                            </div>
                            {
                                diagnosis?.lab_orders?.assignedLabOrders?.map((i, key) => (
                                    <div key={key} className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                        <p>Lab Test <br />{i?.lab_test}</p>
                                        <p>Discount <br />{i?.discount}</p>
                                        {/* <p>Attachment <br />Download reports</p> */}
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AppointmentDetails