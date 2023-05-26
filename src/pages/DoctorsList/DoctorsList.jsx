import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import DoctorProfile from '../../assets/images/doctorlist.png'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import CustomPagination from '../../components/Pagination/Pagination'
import { DoctorAPI } from '../../apis/doctorAPI'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../../components/Loader'

const DoctorsList = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getDoctors = async () => {
        try {
            setLoading(true)

            const res = await DoctorAPI.getDoctors()

            if (res.success) {
                setData(res.data.doctors?.reverse())
            }

        } catch (err) {
            console.log("error fetching doctors", err)
            const errMsg = err?.response?.data?.message || err?.message || "Some error occured"
            toast.error(errMsg)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDoctors()
    }, [])

    return (
        <div className='bg-neutral-4'>
            <ToastContainer />
            {
                loading && <Loader />
            }
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
                    <span className='text-Medium+/Title/Medium font-semibold text-neutral-10'>{data?.length} doctors available</span>
                </div>

                <div className='flex gap-[20px] flex-col'>
                    {
                        data?.map((item, index) => {
                            return <div className='bg-[#ffff] flex p-[24px] mx-[85px] justify-between shadow-sm rounded-[14px] justify-center items-center'>
                                <div className='flex justify-center items-center gap-5 '>
                                    <div className='text-center'>
                                    <div className='w-[100px] border-[1px] h-[100px] object-cover rounded-full  overflow-hidden'>

                                        <img className='pb-[6px] ' src={item?.profile_image || "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=1480&t=st=1682599573~exp=1682600173~hmac=70167dd96663e16bc7d1b9ea915c69f452455a2db0362cb2b6eff25ae440acbd"} alt="" />
                                        </div>
                                        {/* <button>View Profile</button> */}
                                    </div>

                                    <div>
                                        <h3 className='text-Small/Title/Medium text-[#007E85]'>{item?.name}</h3>
                                        <p className='text-Small/Title/xSmall text-neutral-8'>Herbal Medicine Specialist</p>
                                        <p className='text-neutral-9'>{} years experience overall</p>
                                        <p className='text-neutral-9'>₹500 consultation fee</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='py-[12.5px] font-semibold px-[40px] text-[0.875em] bg-linear text-[#fff] rounded-[4px]'
                                        onClick={() => navigate("/doctors/detail/" + item?._id)}
                                    >Book Appointment</button>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className='flex mx-auto mt-[60px] w-[fit-content]'>
                    <CustomPagination />
                </div>

                {/* Doctor List End */}

            </div>
        </div>
    )
}

export default DoctorsList