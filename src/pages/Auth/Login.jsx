import React from 'react'
import Auth from '../../components/Layout/AuthLayout'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../components/Loader/index';


const Login = () => {

    const [data, setData] = React.useState({
        phone: ''
    })

    const [loading, setLoading] = React.useState(false)

    const [confirmation, setConfirmation] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }
  return (
    <Auth>
        <div className="md:w-[100%] w-[100%] px-[36px] py-[32px] h-[100%] m-auto flex items-center justify-center">
                {
                    loading ? <Loader /> : null
                }
                <ToastContainer />
                
                {/* <p className="font-[14px] text-center color-[#2E3147]">Start ordering from your home!</p> */}
                <div className=' items-center flex flex-col'>

                <p className="text-s text-center mt-[12px] mb-[72px]">
                    <span className=" text-xl font-bold">Sign In to Customer Dashboard</span>
                </p>
                <form >
                    <div className="input-animation">
                        <div className="flex flex-col">
                            <label className="text-[#333333] opacity-70 text-[14px]">Email Id/Mobile No.</label>
                            <input name="phone" onChange={handleChange} className="border-[1px] rounded-[4px] p-[10px] mt-[5px]" placeholder="Email Id/Mobile No." />
                        </div>

                        {/* <div className="flex mt-[20px]">
                            <Captcha _reCaptchaRef={_reCaptchaRef} />
                        </div> */}

                        <div className="flex flex-row items-start justify-between gap-[10px] mt-[10px]">
                            <input type="checkbox" name="" id="" onChange={(e) => setConfirmation(prev => !prev)} />
                            <p className='text-[12px]'>By Checking this box, you confirm you are above 18 years of age and are agreeing to our <span className='underline cursor-pointer' onClick={() => {
                                // router.push('/termsandconditions')
                            }}>Terms of services</span></p>
                        </div>

                        <button type="submit" className="bg-Foundation/primary/primary-8 text-Foundation/primary/primary-1  font-semibold rounded-[4px] w-[100%] py-[13px] mt-[30px]" 
                        onClick={(e) => {
                            e.preventDefault()
                            toast.error('Some error occured')}}
                        >Login</button>
                    </div>
                   
                </form>
                </div>

            </div>
    </Auth>
  )
}

export default Login