import React from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
const CompletedAppointmentDetails = () => {
    return (
        <div className='bg-neutral-4'>
            <div className='container mx-auto px-[12px]'>

                <div className='py-[32px]'>
                    <div className='bg-[#CFE1DF] py-2 px-6 rounded-lg flex justify-between items-center'>
                        <h4 className='font-semibold text-[black]'>Appointment<a href="#" className='pl-[6px] font-semibold text-primary-6'>#543636</a></h4>
                        <i className='bi bi-x text-primary-10 text-[22px] cursor-pointer'></i>
                    </div>
                </div>

                <div className='pb-[32px]'>
                    <div className='bg-[#ffff] flex p-[24px] mx-[32px] rounded-[10px] justify-between items-center'>
                        <div className='flex justify-center items-center gap-6 '>
                            <div className='text-center'>
                                <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            </div>
                            <div>
                                <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Priyansh Raj</h3>
                                <p className='text-Small/Title/xSmall text-neutral-8'>Skin Specialist</p>
                                <div className='border-2 flex justify-center items-center p-[4px] rounded mt-2'>
                                    <span>17th May 2023 - 9:30 PM</span>
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

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Weight <br />40 Kg</p>
                                <p>BP (mm Hg) <br />120/80</p>
                                <p>Pulse (heart beat/min) <br />99</p>
                                <p>Temperature <br />102</p>
                                <p>Respiratory Rate <br />40</p>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Clinical Notes</h2>
                            </div>

                            <div className='flex py-[12px] gap-20 px-[30px] text-primary-7'>
                                <p>Instrunction <br />This is  a long instruction and it is a dummy test instruction</p>
                                <p>Complain<br />No Complains</p>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Prescription</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Drugs <br />Tab. Dolo (650mg)</p>
                                <p>Dosage and Frequency <br />1 - 0 1</p>
                                <p>Duration <br />4 Day(s)</p>
                                <p>Instruction <br />After Meal</p>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Treatment Plan</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Procedure <br />ECG</p>
                                <p>Cost (₹) <br />₹ 1000</p>
                                <p>Discount <br />₹ 24(s)</p>
                                <p>Cost (₹) <br />₹ 976</p>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Lab Orders</h2>
                            </div>

                            <div className='flex gap-28 py-[12px] px-[30px] text-primary-7'>
                                <p>Lab Test <br />ECG</p>
                                <p>Instruction <br />No food before test</p>
                                <p>Attachment <br />Download reports</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompletedAppointmentDetails