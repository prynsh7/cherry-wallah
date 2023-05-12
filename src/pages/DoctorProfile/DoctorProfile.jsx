import React from 'react'
import DoctorProfilepic from '../../assets/images/doctorlist.png'

const DoctorProfile = () => {
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

                <div className='bg-primary-2 flex justify-between p-[18px] items-center'>
                    <div className='flex justify-center items-center gap-4'>
                        <button className='bg-primary-1 px-[25px] py-[6px]'>
                            <h3>Video Consultant</h3>
                        </button>

                        <button className='bg-primary-1 px-[25px] py-[6px]'>
                            <h3>Video Consultant</h3>
                        </button>

                        <button className=''>
                            <h3>All Filter</h3>
                        </button>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <h3>Sort By</h3>
                        <button className='bg-primary-1 px-[25px] py-[6px]'><h3>Availability</h3></button>
                    </div>
                </div>

                <div className='bg-[#ffff] flex px-[28px] mx-[85px] py-[40px] rounded-[14px] justify-center items-center mt-[36px]'>
                    <div className='flex justify-center items-center gap-6 '>
                        <div>
                            <img className='pb-[6px]' src={DoctorProfilepic} alt="" />
                        </div>

                        <div>
                            <h3 className='text-Small/Title/Medium text-[#007E85]'>Dr. Hanshika Raj</h3>
                            <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                            <p className='text-neutral-9'>12 years experience overall</p>
                            <p className='text-neutral-9'>₹500 consultation fee</p>
                            <div className='relative flex items-center mt-[14px]'>
                                <i class="bi bi-patch-check absolute text-[#6EAB36] pr-[14px]"></i>
                                <p className='text-[#6EAB36] pl-[22px]'>Medical Registration Verified</p>
                            </div>
                            <p>Dr. Hanshika Raj has over 12 years of experience as a Herbal Medicine Specialist. He has done Bachelor of Ayurveda, Medicine and Surgery (BAMS).</p>
                            <div className='mt-[16px]'>
                                <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ffff]  mx-[85px] py-[30px] rounded-[14px] mt-[36px]'>
                    <div className='text-Small/Title/Small text-[#007E85] px-[28px] mb-[14px]'>Patient Stories for Dr. Hanshika Raj</div>
                    <div className='border-y-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>

                    <div className='border-b-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>

                    <div className='border-b-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>

                    <div className='border-b-2 px-[28px] pt-[14px] pb-[14px]'>
                        <p className='text-neutral-9 font-bold'>Jaya D M (Verified)</p>
                        <p className='mt-2 text-[#6EAB36]'>Visited For Digestive Issues</p>
                        <p className='mt-2'>Dr. Kumar helped me overcome years of digestive issues through personalized Ayurvedic treatment including dietary changes and herbal supplements. His careful listening to my symptoms and medical history made a huge difference. I was amazed at how quickly my symptoms improved and continue to work with him to maintain my digestive health.</p>
                        <div className='relative flex items-center mt-2'>
                            <i class="bi bi-hand-thumbs-up-fill absolute text-neutral-9 pr-[12px]"></i>
                            <p className='pl-[22px]'>I recommend the doctor</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DoctorProfile
