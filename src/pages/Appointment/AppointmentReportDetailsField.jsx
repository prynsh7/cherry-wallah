import React from 'react'
import DoctorProfile from '../../assets/images/doctorlist.png'
const AppointmentReportDetailsField = () => {
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
                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Weight*</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter weight' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>BP*</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter BP in (mm Hg)' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Pulse*</p>
                                    <input className='outline-none border-2 border-primary-2 w-[280px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Pulse in heart-beat / min' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Temperature*</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter temperature' />
                                </div>

                            </div>
                            <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                <p>Respiratory Rate*</p>
                                <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter respiratory rate' />
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Clinical Notes</h2>
                            </div>
                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Instruction</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Instructions' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Complaint</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter any complains' />
                                </div>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Prescription</h2>
                            </div>

                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Drugs</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter Drugs' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Dosage and frequency</p>
                                    <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter dosages and frequency' />
                                </div>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Duration</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter duration' />
                                </div>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Instruction</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter instruction' />
                                </div>
                            </div>
                            <button className='font-bold text-neutral-9 pb-[8px] px-[20px]'>+ Add medicines</button>

                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Treatment Plan</h2>
                            </div>

                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Procedure</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter procedure' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Discount</p>
                                    <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter discount' />
                                </div>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Cost ₹</p>
                                    <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter total cost' />
                                </div>
                            </div>
                        </div>

                        <div className=' border-2 mx-[24px] border-primary-2 rounded'>
                            <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                                <h2 className='mx-[16px]'>Lab Orders</h2>
                            </div>
                            <div className='flex'>
                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Lab Test</p>
                                    <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter dosages and frequency' />
                                </div>

                                <div className='flex gap-2 flex-col py-[12px] px-[20px] text-primary-7'>
                                    <p>Instruction</p>
                                    <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter dosages and frequency' />
                                </div>
                            </div>
                            <button className='font-bold text-neutral-9 pb-[8px] px-[20px]'>+ Add medicines</button>

                        </div>
                    </div>

                    <div className='mx-[28px] mt-[20px] flex justify-between bg-[#ffff] p-[12px] rounded-[10px]'>
                        <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'> <span className='text-primary-7'>Cancel</span> </button>
                        <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'><span className='text-primary-7'>Save</span> </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AppointmentReportDetailsField