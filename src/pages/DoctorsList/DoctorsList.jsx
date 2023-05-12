import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import DoctorProfile from '../../assets/images/doctorlist.png'

const DoctorsList = () => {
    return (
        <div className='bg-neutral-4'>
            <div className='container mx-auto py-[60px]'>

                <div className='py-5'>
                    <div className='p-5 flex gap-6 justify-center items-center rounded-[8px]'>
                        <div className='relative flex items-center'>
                            <i class="bi bi-geo-alt absolute pl-[12px] text-primary-5"></i>
                            <input className="border-[1px] rounded-[4px] p-[10px] pl-[35px]" placeholder="Enter City" />
                        </div>
                        <div className='relative flex items-center'>
                            <i class="bi bi-search absolute pl-[12px] text-primary-5"></i>
                            <input className="border-[1px] rounded-[4px] p-[10px] pl-[35px]  w-[420px]" placeholder="Search doctors, clinics, hospitals, etc." />
                        </div>
                        <button className="py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]">
                            Search
                        </button>
                    </div>
                </div>

                <div className='bg-primary-2 flex justify-center gap-[680px] p-[18px] items-center'>
                    <div className='flex justify-center items-center gap-4'>
                    
                        <button className='bg-primary-1 px-[25px] py-[6px]'>
                            Video Consultant
                        </button>

                        <button className='bg-primary-1 px-[25px] py-[6px]'>
                            Video Consultant
                        </button>

                        <button className=''>
                            All Filter
                        </button>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <h3>Sort By</h3>
                        <button className='bg-primary-1 px-[25px] py-[6px]'><h3>Availability</h3></button>
                    </div>
                </div>

                {/* Doctor List Start */}

                <div className='px-24 py-5'>
                    <span className='text-Medium+/Title/Medium font-semibold text-neutral-10'>23 doctors available</span>
                </div>

                <div className='bg-[#ffff] flex p-[24px] mx-[85px] gap-[700px] rounded-[14px] justify-center items-center'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div className='text-center'>
                            <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            <button>View Profile</button>
                        </div>


                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                    </div>
                </div>

                <div className='mt-[30px] bg-[#ffff] flex p-[24px] mx-[85px] gap-[700px] rounded-[14px] justify-center items-center'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div className='text-center'>
                            <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            <button>View Profile</button>
                        </div>

                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                    </div>
                </div>

                <div className='mt-[30px] bg-[#ffff] flex p-[24px] mx-[85px] gap-[700px] rounded-[14px] justify-center items-center'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div className='text-center'>
                            <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            <button>View Profile</button>
                        </div>
                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                    </div>
                </div>

                <div className='mt-[30px] bg-[#ffff] flex p-[24px] mx-[85px] gap-[700px] rounded-[14px] justify-center items-center'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div className='text-center'>
                            <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            <button>View Profile</button>
                        </div>

                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                    </div>
                </div>

                <div className='mt-[30px] bg-[#ffff] flex p-[24px] mx-[85px] gap-[700px] rounded-[14px] justify-center items-center'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div className='text-center'>
                            <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            <button>View Profile</button>
                        </div>

                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                    </div>
                </div>

                <div className='mt-[30px] bg-[#ffff] flex p-[24px] mx-[85px] gap-[700px] rounded-[14px] justify-center items-center'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div className='text-center'>
                            <img className='pb-[6px]' src={DoctorProfile} alt="" />
                            <button>View Profile</button>
                        </div>

                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                    </div>
                </div>
                {/* Doctor List End */}
                
            </div>
        </div>
    )
}

export default DoctorsList