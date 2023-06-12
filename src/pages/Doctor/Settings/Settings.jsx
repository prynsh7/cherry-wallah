import React, { useEffect, useState } from 'react'
import { DoctorAPI } from '../../../apis/doctorAPI'
import { ToastContainer, toast } from 'react-toastify'
import { AuthAPI } from '../../../apis/authAPI'
import CustomSelect from '../../../components/Input/Select'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { handleFileUpload } from '../../../data/upload'
import { message } from 'antd'
import avatar from '../../../assets/images/avatars/avatar.avif'

const dummyOptions = [
  {
    label: 'Dummy 1',
    value: 'dummy1'
  },
  {
    label: 'Dummy 2',
    value: 'dummy2'
  },
]

const genderOptions = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'other',
    label: 'Other',
  }
]

function Settings() {

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    speciality: "",
    availability: "",
    city: "",
    description: "",

    medical_registration_no: "",
    medical_registration_council: "",
    medical_registration_year: "",
    medical_experience: "",

    educational_degree: "",
    educational_college: "",
    educational_year: "",
    educational_certificate: "",

    has_establishment: false,
    establishment_type: "",
    establishment_name: "",
    establishment_address: "",
    establishment_city: "",
    profile_type: "",
    profile_name: "",
    profile_description: "",
    profile_image: "",
    consultation_fee: "",
  })
  const [loading, setLoading] = useState(false)

  // const handleSubmit = async () => {
  //   await DoctorAPI.UpdateMe(data)
  //     .then(res => {
  //       if (res.success) message.success("Profile Updated Successfully")
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       message.error("Error Updating Profile")
  //     }
  //     )
  // }

  const getProfileDetails = async () => {
    try {
      setLoading(true)

      const res = await DoctorAPI.getMe()

      if (res.success) {
        console.log("doctor get success", res.data)
        setData(res.data)
      }

    } catch (err) {
      console.log("error fetching doctors", err)
      const errMsg = err?.response?.data?.message || err?.message || "Some error occured"
      toast.error(errMsg)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async () => {

    try {
      setLoading(true);

      const obj = { ...data }
      Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] == "") && delete obj[key]);

      const res = await AuthAPI.putUpdateDoctor(obj);
      if (res.success) {
        toast.success(res.message);
        // setStep(step + 1);
        // localStorage.removeItem('doctorReg');
      }

    } catch (err) {
      const error = err?.response?.data?.message || err?.message || "something went wrong";
      toast.error(error);
    } finally {
      setLoading(false);
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSelect = (name, value) => {
    setData({ ...data, [name]: value })
  }


  useEffect(() => {
    getProfileDetails()
  }, [])


  return (
    <div className=''>
    <ToastContainer />
      <div className='container mx-auto'>

        <div className='pb-[10px]'>
          <div className='pb-[32px] gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
            <div className='mx-[28px] mt-[20px] flex justify-between'>
              <h3 className='text-Medium+/Label/Large-Strong text-[black]'>Settings</h3>
            </div>
            <div className=' border-2 mx-[24px] border-primary-2 rounded '>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Basic info</h2>
              </div>
              <div className='grid grid-cols-3 gap-[20px] p-[20px]'>

                <Input
                  name={'name'}
                  value={data?.name}
                  label="Full Name"
                  placeholder="Enter Full Name"
                  handleChange={handleChange}
                />
                <Input
                  name={'email'}
                  value={data?.email}
                  label="Email"
                  placeholder="Enter Email "
                  handleChange={handleChange}
                />
                <Input
                  name={'mobile'}
                  type='number'
                  value={data?.mobile}
                  label="Mobile"
                  placeholder="Enter Mobile"
                  handleChange={handleChange}
                />
                <Input
                  name={'dob'}
                  type='date'
                  value={data?.dob}
                  label="Date of Birth"
                  placeholder="Enter Date of Birth"
                  handleChange={handleChange}
                />
                <CustomSelect
                  label="Gender"
                  placeholder="Select Gender"
                  options={genderOptions}
                  value={data?.gender}
                  name={'gender'}
                  handleChange={(e) => { handleSelect('gender', e) }}
                />
                <CustomSelect
                  value={data?.speciality}
                  name={'speciality'}
                  label="Specialization"
                  placeholder="Select Specialization"
                  options={dummyOptions}
                  handleChange={(e) => { handleSelect('speciality', e) }}
                />
                <CustomSelect
                  label="City"
                  placeholder="Select City"
                  options={dummyOptions}
                  value={data?.city}
                  name={'city'}
                  handleChange={(e) => { handleSelect('city', e) }}
                />
                <div className='flex flex-col col-span-3'>
                  <label className='text-[#333333] opacity-70 text-[16px] font-medium'>Brief Description <span className='text-[#FF0000]'>*</span></label>
                  <textarea className='border-[1px] p-[10px] rounded-[4px] mt-[5px] min-h-[100px]'
                    name='description'
                    value={data?.description}
                    onChange={handleChange}
                  >
                  </textarea>
                </div>
              </div>




            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Medical Registration</h2>
              </div>
              <div className='grid grid-cols-3 gap-[20px] p-[20px]'>
                <Input
                  label="Registration Number"
                  placeholder="Enter Registration Number"
                  value={data?.medical_registration_no}
                  name={'medical_registration_no'}
                  handleChange={handleChange}
                />
                <CustomSelect
                  label="Registration Council"
                  placeholder="Select "
                  options={dummyOptions}
                  value={data?.medical_registration_council}
                  name={'medical_registration_council'}
                  handleChange={(e) => { handleSelect('medical_registration_council', e) }}
                />
                <CustomSelect
                  label="Registration Year"
                  placeholder="Select "
                  options={[...Array(50)]?.map((_, i) => ({ label: `${i + 1970}`, value: `${i + 1970}` })) || []}
                  value={data?.medical_registration_year}
                  name={'medical_registration_year'}
                  handleChange={(e) => { handleSelect('medical_registration_year', e) }}
                />
                <Input
                  label="Medical Experiences"
                  placeholder="Enter Year of Experiences"
                  type='number'
                  value={data?.medical_experience}
                  name={'medical_experience'}
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Educational Details</h2>
              </div>

              <div className='grid grid-cols-3 gap-[20px] p-[20px]'>
                <CustomSelect
                  label="Degree"
                  placeholder="Select "
                  options={dummyOptions}
                  value={data?.educational_degree}
                  name={'educational_degree'}
                  handleChange={(e) => { handleSelect('educational_degree', e) }}
                />
                <Input
                  label="College / University"
                  placeholder="Enter College / University"
                  value={data?.educational_college}
                  name={'educational_college'}
                  handleChange={handleChange}
                />
                <CustomSelect
                  label="Year of Completion"
                  placeholder="Select "
                  options={[...Array(50)]?.map((_, i) => ({ label: `${i + 1970}`, value: `${i + 1970}` })) || []}
                  value={data?.educational_year}
                  name={'educational_year'}
                  handleChange={(e) => { handleSelect('educational_year', e) }}
                />
                <Input
                  label="Upload Certificate"
                  placeholder="Upload"
                  type='file'
                  name={'educational_certificate'}
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Establishment Details</h2>
              </div>

              <div className='grid grid-cols-3 gap-[20px] p-[20px]'>
                <CustomSelect
                  label="Has Establishment"
                  placeholder="Search to select"
                  options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
                  value={data?.has_establishment}
                  name={'hasEstablishment'}
                  handleChange={(e) => { handleSelect('has_establishment', e) }}
                />
                {
                  data?.has_establishment && <>
                    <CustomSelect
                      label="Establishment Type"
                      placeholder="Search to select"
                      options={dummyOptions}
                      value={data?.establishment_type}
                      name={'establishment_type'}
                      handleChange={(e) => { handleSelect('establishment_type', e) }}
                    />
                    {/* <CustomSelect label="Degree" placeholder="Select " options={dummyOptions} /> */}
                    <Input
                      label="Establishment Name"
                      placeholder="Enter Establishment Name"
                      value={data?.establishment_name}
                      name={'establishment_name'}
                      handleChange={handleChange}
                    />
                    <CustomSelect
                      label="City"
                      placeholder="Select "
                      options={dummyOptions}
                      value={data?.establishment_city}
                      name={'establishment_city'}
                      handleChange={(e) => { handleSelect('establishment_city', e) }}
                    />
                    <Input
                      label="Locality"
                      placeholder="Enter Locality"
                      value={data?.establishment_address}
                      name={'establishment_address'}
                      handleChange={handleChange}
                    />
                  </>
                }
              </div>
            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Profile Section</h2>
              </div>
              <div className='grid grid-cols-3 gap-[20px] p-[20px]'>
              <div className="col-span-1">
                  <div className='w-[100px] h-[100px] object-cover flex  mb-[10px] border-[1px] aspect-sqaure'>
                    <img className="object-cover" src={data?.profile_image|| avatar}  alt="" />
                  </div>
                  <Input
                    label="Profile Image"
                    placeholder="Upload Profile Image"
                    type='file'
                    name={'profileImage'}
                    handleChange={async (e) => {
                      console.log('here');
                      let a = await handleFileUpload(e, 'avatar', data._id);
                      if (a) {
                        setData({ ...data, profile_image: a })
                      }
                    }}
                  />
                </div>
               
                <div className='col-span-2'></div>
                <CustomSelect
                  label="Profile Type"
                  placeholder="Select "
                  options={dummyOptions}
                  value={data?.profile_type}
                  name={'profile_type'}
                  handleChange={(e) => { handleSelect('profile_type', e) }}
                />
                <Input
                  label="Profile Name"
                  placeholder="Enter Profile Name"
                  value={data?.profile_name}
                  name={'profile_name'}
                  handleChange={handleChange}
                />
                <div className='flex flex-col col-span-3'>
                  <label className='text-[#333333] opacity-70 text-[16px] font-medium'>Profile Description <span className='text-[#FF0000]'>*</span></label>
                  <textarea className='border-[1px] p-[10px] rounded-[4px] mt-[5px] min-h-[100px]'
                    name='profile_description'
                    value={data?.profile_description}
                    onChange={handleChange}
                  >
                  </textarea>
                </div>
                <Input
                  label="Consultation Fee ( ₹ )"
                  type={'number'}
                  placeholder="Enter Consultation Fee (₹)"
                  value={data?.consultation_fee}
                  name={'consultation_fee'}
                  handleChange={handleChange}
                />
                <div className='col-span-3'></div>
                

              </div>
            </div>
          </div>

          <div class="footer border-[1px] border-primary-2 rounded-[4px] max-width-[100%] md:w-[100%] left-[14%] w-[100%] sticky bottom-0 shadow-md bg-[#fff] "><div class="flex justify-between gap-[10px] py-[10px] px-[20px]">
            <Button label='Cancel' type='outlined' />
            <Button onClick={handleSubmit} label='Save' type='primary' />

          </div></div>


        </div>

      </div>
    </div>
  )
}

export default Settings