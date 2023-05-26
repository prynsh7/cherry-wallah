import React, { useEffect, useState } from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { useParams } from 'react-router-dom';
import { AppointmentAPI } from '../../apis/appointmentAPI';
import { DiagnosisAPI } from '../../apis/diagnosisApi';
import { message } from 'antd';
const AppointmentReportDetailsField = () => {
    const { appointmentId } = useParams()
    console.log(appointmentId);

    const [data, setData] = useState()

    const [prescription, setPrescription] = useState([
        { medicine: '', dosage: '', duration: '', remarks: '' }
    ])

    const [labOrders, setLabOrders] = useState([
        { lab_test: '', discount: '' }
    ])

    const [TreatmentPlans, setTreatmentPlans] = useState([
        { treatment_plan: '', discount: '', cost: '' }
    ])

    const getData = async () => {
        await AppointmentAPI.getAppointmentById(appointmentId).then((res) => {
            console.log(res);
            setData(res.data.appointment)
        }
        )
            .catch((err) => {
                console.log(err);
            }
            )
    }

    const [diagnosis, setDiagnosis] = useState()

    const handleSubmit = async () => {

        const obj = {
            appointment_id: appointmentId,
            vital_signs:{
                weight:diagnosis?.weight,
                height:diagnosis?.height,
                bp: {
                    diastole: diagnosis?.dbp,
                    systole: diagnosis?.sbp,
                },        
                pulse:diagnosis?.pulse,
                temperature:diagnosis?.temperature,
            },
            clinical_notes:{
                instruction:diagnosis?.instruction,
                complaint:diagnosis?.complaint,
            },
            prescription: {
                patient_id:data.patient_id,
                appointment_id:appointmentId,
                prescribedMedicines:prescription
            },
            lab_orders: {
                patient_id:data.patient_id,
                appointment_id:appointmentId,
                assignedLabOrders:labOrders
            },
            treatment_plan: {
                patient_id:data.patient_id,
                appointment_id:appointmentId,
                assignedPlans:TreatmentPlans
            }
        }

         await DiagnosisAPI.putDiagnosis(obj, appointmentId)
        .then(res=>{
            if(res.success){
                message.success('diagnosis added successfully')
            }
        })
        .catch(err=>{
            console.log(err);
        })


        console.log(obj)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='bg-neutral-4'>
            <div className='container mx-auto px-[12px]'>

                <div className='py-[32px]'>
                    <div className='bg-[#CFE1DF] py-2 px-6 rounded-lg flex justify-between items-center'>
                        <h4 className='font-semibold text-[black]'>Appointment<a href="#" className='pl-[6px] font-semibold text-primary-6'>#543636</a></h4>
                    </div>
                </div>

                <div className='pb-[32px]'>
                    <div className='bg-[#ffff] flex p-[24px] mx-[32px] rounded-[10px] justify-between items-center'>
                        <div className='flex justify-center items-center gap-6 '>
                            <div className='text-center'>
                                <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            </div>
                            <div>
                                <h3 className='text-Small/Title/Medium text-[#007E85]'>{data?.patient_details?.full_name}</h3>
                                <p className='text-Small/Title/xSmall text-neutral-8'>{data?.patient_details?.phone_number}</p>
                                <p className='text-Small/Title/xSmall text-neutral-8'>{data?.patient_details?.email}</p>
                                <div className='border-2 flex justify-center items-center p-[4px] rounded mt-2'>
                                    <span>{data?.appointment_date + "-" + data?.appointment_time}</span>
                                </div>
                                <div className='felx mt-2'>
                                    <i class="bi bi-star-fill p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star-fill p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star-fill p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star p-[2px] text-[#6EAB36]"></i>
                                    <i class="bi bi-star p-[2px] text-[#6EAB36]"></i>
                                </div>
                                <p className='text-Small/Title/xxSmall text-neutral-8 '>‘Really helpfull and concerned’</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pb-[32px]'>
                    <div className='pb-[32px] mx-[32px] gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
                        <div className='mx-[28px] mt-[20px] flex justify-between'>
                            <h3 className='text-Small/Title/Medium text-[black]'>Report</h3>
                            <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'><i class="bi bi-filetype-pdf pr-[6px] text-primary-7"></i> <span className='text-primary-7'>Export</span> </button>
                        </div>
                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Vital Sign</h2>
                            </div>
                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Weight*</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter weight'
                                        value={diagnosis?.weight}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, weight: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>DBP*</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter BP in (mm Hg)'
                                        value={diagnosis?.dbp}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, dbp: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>SBP*</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter BP in (mm Hg)'
                                        value={diagnosis?.sbp}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, sbp: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Pulse*</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[280px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter Pulse in heart-beat / min'
                                        value={diagnosis?.pulse}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, pulse: e.target.value })}
                                    />
                                </div>

                            </div>
                            <div className="flex">

                            <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Temperature*</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter temperature'
                                        value={diagnosis?.temperature}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, temperature: e.target.value })}
                                    />
                                </div>
                            <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                <p>Respiratory Rate*</p>
                                <input
                                    className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                    type="text"
                                    placeholder='Enter respiratory rate'
                                    value={diagnosis?.respiratory_rate}
                                    onChange={(e) => setDiagnosis({ ...diagnosis, respiratory_rate: e.target.value })}
                                    />
                            </div>
                                    </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Clinical Notes</h2>
                            </div>
                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Instruction</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter Instructions'
                                        value={diagnosis?.instruction}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, instruction: e.target.value })}
                                    />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Complaint</p>
                                    <input
                                        className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                        type="text"
                                        placeholder='Enter any complains'
                                        value={diagnosis?.complaint}
                                        onChange={(e) => setDiagnosis({ ...diagnosis, complaint: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Prescription</h2>
                            </div>

                            {
                                prescription.map((item, index) => (
                                    <div className='flex'>

                                        <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                            <p>Medicine</p>
                                            <input

                                                className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                                type="text"
                                                placeholder='Enter Medicine'
                                                value={item.medicine}
                                                onChange={(e) => {
                                                    let newPrescription = [...prescription];
                                                    newPrescription[index].medicine = e.target.value;
                                                    setPrescription(newPrescription);
                                                }}
                                            />
                                        </div>

                                        <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                            <p>Dosage and frequency</p>
                                            <input
                                                className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]'
                                                type="text"
                                                placeholder='Enter dosages and frequency'
                                                value={item.dosage}
                                                onChange={(e) => {
                                                    let newPrescription = [...prescription];
                                                    newPrescription[index].dosage = e.target.value;
                                                    setPrescription(newPrescription);
                                                }}
                                            />
                                        </div>

                                        <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                            <p>Duration</p>
                                            <input

                                                className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                                type="text"
                                                placeholder='Enter duration'
                                                value={item.duration}
                                                onChange={(e) => {
                                                    let newPrescription = [...prescription];
                                                    newPrescription[index].duration = e.target.value;
                                                    setPrescription(newPrescription);
                                                }
                                                }
                                            />
                                        </div>

                                        <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                            <p>Remarks</p>
                                            <input

                                                className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                                type="text"
                                                placeholder='Enter remarks'
                                                value={item.remarks}
                                                onChange={(e) => {
                                                    let newPrescription = [...prescription];
                                                    newPrescription[index].remarks = e.target.value;
                                                    setPrescription(newPrescription);
                                                }
                                                }
                                            />
                                        </div>

                                    </div>
                                ))
                            }
                            <button
                                className='font-bold text-neutral-9 pb-[8px] px-[20px]'
                                onClick={() => {
                                    setPrescription([...prescription, { medicine: '', dosage: '', duration: '', remarks: '' }])
                                }}
                            >+ Add medicines</button>

                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Treatment Plan</h2>
                            </div>

                                {
                                    TreatmentPlans.map((item, index) => (
                                        <div className="flex">

                                            <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                                <p>Procedure</p>
                                                <input

                                                    className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                                    type="text"
                                                    placeholder='Enter procedure'
                                                    value={item.treatment_plan}
                                                    onChange={(e) => {
                                                        let newTreatmentPlans = [...TreatmentPlans];
                                                        newTreatmentPlans[index].treatment_plan = e.target.value;
                                                        setTreatmentPlans(newTreatmentPlans);
                                                    }
                                                    }
                                                />
                                            </div>

                                            <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                                <p>Discount</p>
                                                <input
                                                className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]'
                                                    
                                                    type="text"
                                                    placeholder='Enter discount'
                                                    value={item.discount}
                                                    onChange={(e) => {
                                                        let newTreatmentPlans = [...TreatmentPlans];
                                                        newTreatmentPlans[index].discount = e.target.value;
                                                        setTreatmentPlans(newTreatmentPlans);
                                                    }}
                                                />
                                                </div>
                                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                                <p>Cost</p>
                                                <input
                                                className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]'
                                                    
                                                    type="text"
                                                    placeholder='Enter cost'
                                                    value={item.cost}
                                                    onChange={(e) => {
                                                        let newTreatmentPlans = [...TreatmentPlans];
                                                        newTreatmentPlans[index].cost = e.target.value;
                                                        setTreatmentPlans(newTreatmentPlans);
                                                    }}
                                                />
                                                </div>
                                        </div>
                                    ))

                                }
                                <button
                                className='font-bold text-neutral-9 pb-[8px] px-[20px]'
                                onClick={() => {
                                    setTreatmentPlans([...TreatmentPlans, { treatment_plan: '', discount: '', cost: '' }])
                                }
                                }
                            >+ Add treatment plan</button>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Lab Orders</h2>
                            </div>
                            {
                                labOrders.map((item, index) => (
                                    <div className='flex'>
                                        <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                            <p>Lab Test</p>
                                            <input

                                                className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]'
                                                type="text"
                                                placeholder='Enter lab test'
                                                value={item.lab_test}
                                                onChange={(e) => {
                                                    let newLabOrder = [...labOrders];
                                                    newLabOrder[index].lab_test = e.target.value;
                                                    setLabOrders(newLabOrder);
                                                }
                                                }
                                            />
                                        </div>

                                        <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                            <p>Discount</p>
                                            <input
                                                className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]'
                                                type="text"
                                                placeholder='Enter discount'
                                                value={item.discount}
                                                onChange={(e) => {
                                                    let newLabOrder = [...labOrders];
                                                    newLabOrder[index].discount = e.target.value;
                                                    setLabOrders(newLabOrder);
                                                }
                                                }
                                            />
                                        </div>

                                    </div>
                                ))
                            }
                            <button
                                className='font-bold text-neutral-9 pb-[8px] px-[20px]'
                                onClick={() => {
                                    setLabOrders([...labOrders, { lab_test: '', discount: '' }])
                                }
                                }
                            >+ Add medicines</button>

                        </div>
                    </div>

                    <div className='mx-[28px] mt-[20px] flex justify-between bg-[#ffff] p-[12px] rounded-[10px]'>
                        <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'> <span className='text-primary-7'>Cancel</span> </button>
                        <button onClick={handleSubmit} className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'><span className='text-primary-7'>Save</span> </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AppointmentReportDetailsField