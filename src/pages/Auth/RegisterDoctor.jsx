import { Steps } from 'antd';
import Input from '../../components/Input/Input';
import CustomSelect from '../../components/Input/Select';
import { useEffect, useState } from 'react';
import { AuthAPI } from '../../apis/authAPI';
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../components/Loader";
import { ROUTES } from '../../routes/RouterConfig';
import { useNavigate } from 'react-router-dom';
import Submission from '../../assets/images/Submission.png';
import { DEGREE_DATA, SPECIAISATION_DATA } from '../../data/Doctor';



const stepTitleMap = {
  0: 'Basic Details',
  1: 'Medical Registration',
  2: 'Educational Qualification',
  3: 'Establishment Details',
  4: 'Profile Selection',
  5: 'Submission',
}





const RegisterDoctor = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    speciality: "",
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

  const navigate = useNavigate();

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
  ]

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSelect = (name, value) => {
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const renderForm = (step) => {
    switch (step) {
      case 0:
        return <div className='flex flex-col gap-[15px]'>
          <Input
            name={'name'}
            value={data.name}
            label="Full Name"
            placeholder="Enter Full Name"
            handleChange={handleChange}
          />
          <CustomSelect
            value={data.speciality}
            name={'speciality'}
            label="speciality"
            placeholder="Select Specialization"
            options={dummyOptions}
            handleChange={(e) => { handleSelect('speciality', e) }}
          />
          <CustomSelect
            label="Gender"
            placeholder="Select Gender"
            options={genderOptions}
            value={data.gender}
            name={'gender'}
            handleChange={(e) => { handleSelect('gender', e) }}
          />
          <CustomSelect
            label="City"
            placeholder="Select City"
            options={dummyOptions}
            value={data.city}
            name={'city'}
            handleChange={(e) => { handleSelect('city', e) }}
          />

          <div className='flex flex-col'>
            <label className='text-[#333333] opacity-70 text-[14px]'>Brief Description <span className='text-[#FF0000]'>*</span></label>
            <textarea className='border-[1px] p-[10px] rounded-[4px] mt-[5px] min-h-[100px]'
              name='description'
              value={data.description}
              onChange={handleChange}
            >
            </textarea>
          </div>
        </div>

      case 1:
        return <div className='flex flex-col gap-[15px]'>
          <Input
            label="Registration Number"
            placeholder="Enter Registration Number"
            value={data.medical_registration_no}
            name={'medical_registration_no'}
            handleChange={handleChange}
          />
          <CustomSelect
            label="Registration Council"
            placeholder="Select "
            options={dummyOptions}
            value={data.medical_registration_council}
            name={'medical_registration_council'}
            handleChange={(e) => { handleSelect('medical_registration_council', e) }}
          />
          <CustomSelect
            label="Registration Year"
            placeholder="Select "
            options={[...Array(50)]?.map((_, i) => ({ label: `${i + 1970}`, value: `${i + 1970}` })) || []}
            value={data.medical_registration_year}
            name={'medical_registration_year'}
            handleChange={(e) => { handleSelect('medical_registration_year', e) }}
          />
          <Input
            label="Year of Experiences"
            type='number'
            placeholder="Enter Year of Experiences"
            value={data.medical_experience}
            name={'medical_experience'}
            handleChange={handleChange}
          />
        </div>

      case 2:
        return <div className='flex flex-col gap-[15px]'>
          <CustomSelect
            label="Degree"
            placeholder="Select "
            options={dummyOptions}
            value={data.educational_degree}
            name={'educational_degree'}
            handleChange={(e) => { handleSelect('educational_degree', e) }}
          />
          <Input
            label="College / University"
            placeholder="Enter College / University"
            value={data.educational_college}
            name={'educational_college'}
            handleChange={handleChange}
          />
          <CustomSelect
            label="Year of Completion"
            placeholder="Select "
            options={[...Array(50)]?.map((_, i) => ({ label: `${i + 1970}`, value: `${i + 1970}` })) || []}
            value={data.educational_year}
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
      case 3:
        return <div className='flex flex-col gap-[15px]'>
          <CustomSelect
            label="Has Establishment"
            placeholder="Search to select"
            options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            value={data.has_establishment}
            name={'has_establishment'}
            handleChange={(e) => { handleSelect('has_establishment', e) }}
          />
          {
            data.has_establishment && <>
              <CustomSelect
                label="Establishment Type"
                placeholder="Search to select"
                options={dummyOptions}
                value={data.establishment_type}
                name={'establishment_type'}
                handleChange={(e) => { handleSelect('establishment_type', e) }}
              />
              {/* <CustomSelect label="Degree" placeholder="Select " options={dummyOptions} /> */}
              <Input
                label="Establishment Name"
                placeholder="Enter Establishment Name"
                value={data.establishment_name}
                name={'establishment_name'}
                handleChange={handleChange}
              />
              <CustomSelect
                label="City"
                placeholder="Select "
                options={dummyOptions}
                value={data.establishment_city}
                name={'establishment_city'}
                handleChange={(e) => { handleSelect('establishment_city', e) }}
              />
              <Input
                label="Locality"
                placeholder="Enter Locality"
                value={data.establishment_address}
                name={'establishment_address'}
                handleChange={handleChange}
              />
            </>
          }
        </div>
      case 4:
        return <div className='flex flex-col gap-[15px]'>
          <CustomSelect
            label="Profile Type"
            placeholder="Select "
            options={dummyOptions}
            value={data.profile_type}
            name={'profile_type'}
            handleChange={(e) => { handleSelect('profile_type', e) }}
          />
          <Input
            label="Profile Name"
            placeholder="Enter Profile Name"
            value={data.profile_name}
            name={'profile_name'}
            handleChange={handleChange}
          />
          <div className='flex flex-col'>
            <label className='text-[#333333] opacity-70 text-[14px]'>Profile Description <span className='text-[#FF0000]'>*</span></label>
            <textarea className='border-[1px] p-[10px] rounded-[4px] mt-[5px] min-h-[100px]'
              name='profile_description'
              value={data.profile_description}
              onChange={handleChange}
            >
            </textarea>
          </div>
          <Input
            label="Consultation Fee"
            type={'number'}
            placeholder="Enter Consultation Fee (INR)"
            value={data.consultation_fee}
            name={'consultation_fee'}
            handleChange={handleChange}
          />
          <Input
            label="Profile Image"
            placeholder="Upload Profile Image"
            type='file'
            name={'profile_image'}
            handleChange={handleChange}
          />
        </div>
      case 5:
        return <div className='flex items-center rounded-md gap-[15px] w-[870px] h-[275px] bg-cover' style={{ backgroundImage: `url(${Submission})` }}>
          <p className='font-semibold text-neutral-1 ml-[20px]'>We have received your application verification document. <br />Your account is set for verification, we will update you on email once it is verified.</p>
        </div>

    }
  }



  const [step, setStep] = useState(0);

  const updateDoctorProfile = async () => {

    try {
      setLoading(true);

      const obj = {
        name: data?.name,
        email: data?.email,
        mobile: data?.mobile,
        dob: data?.dob,
        gender: data?.gender,
        speciality: data?.speciality,
        city: data?.city,
        description: data?.description,

        medical_registration_no: data?.medical_registration_no,
        medical_registration_council: data?.medical_registration_council,
        medical_registration_year: data?.medical_registration_year,
        medical_experience: data?.medical_experience,

        educational_degree: data?.educational_degree,
        educational_college: data?.educational_college,
        educational_year: data?.educational_year,
        educational_certificate: data?.educational_certificate,

        has_establishment: data?.has_establishment,
        establishment_type: data?.establishment_type,
        establishment_name: data?.establishment_name,
        establishment_address: data?.establishment_address,
        establishment_city: data?.establishment_city,

        profile_type: data?.profile_type,
        profile_name: data?.profile_name,
        profile_description: data?.profile_description,
        profile_image: data?.profile_image,
        consultation_fee: data?.consultation_fee,
      }

      Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] == "") && delete obj[key]);

      const res = await AuthAPI.putUpdateDoctor(obj);
      if (res.success) {
        setStep(step + 1);
        localStorage.removeItem('doctorReg');
      }
      setLoading(false);

    } catch (err) {
      const error = err?.response?.data?.message || err?.message || "something went wrong";
      toast.error(error);
    } finally {
      setLoading(false);
    }

  }
  const next = () => {
    if (step == 0) {
      if (
        !data.name ||
        !data?.speciality ||
        !data?.gender ||
        !data?.city ||
        !data?.description) {
        return toast.error("Please enter basic details")
      }
    }

    if (step == 1) {
      if (
        !data.medical_registration_no ||
        !data?.medical_registration_council ||
        !data?.medical_registration_year ||
        !data?.medical_experience
      ) {
        return toast.error("Please enter registration details")
      }
    }
    if (step == 2) {
      if (
        !data.educational_degree ||
        !data?.educational_college ||
        !data?.educational_year) {
        return toast.error("Please enter educational details")
      }
    }
    if (step == 3) {
      if (data?.has_establishment && (!data.establishment_type ||
        !data?.establishment_name ||
        !data?.establishment_city ||
        !data?.establishment_address)) {
        return toast.error("Please enter establishment details")
      }
    }

    if (step == 4) {
      if (
        !data.profile_type ||
        !data?.profile_name ||
        !data?.profile_description ||
        !data?.consultation_fee
      ) {
        return toast.error("Please enter profile details")
      }
    }
    if (step === 4) {
      updateDoctorProfile();
      return;
    }

    setStep(step + 1);

    localStorage.setItem('doctorReg', JSON.stringify({ data: data, step: step + 1 }));
  }

  useEffect(() => {
    const doctorData = JSON.parse(localStorage.getItem('doctorReg'));
    const user = JSON.parse(localStorage.getItem('user'));

    if (doctorData) {
      setStep(doctorData.step);
      setData(doctorData.data);
    }
    if (!doctorData && user) {
      setData({
        ...data,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      })
    }
  }, [])

  return <div className='bg-neutral-4 p-[10px] min-h-[100vh] flex items-center'>
    {loading && <Loader />}
    <ToastContainer />
    <div className='flex container mx-auto gap-[10px]'>
      <div className='w-[40%] bg-neutral-1 rounded-[8px] p-[20px]'>
        <Steps
          direction="vertical"
          current={step}
          items={[
            {
              title: 'Step 1',
              description: "Basic Details",
            },
            {
              title: 'Step 2',
              description: "Medical Registration",
            },
            {
              title: 'Step 3',
              description: "Educational Qualification",
            },
            {
              title: 'Step 4',
              description: "Establishment Details",
            },
            {
              title: 'Step 5',
              description: "Profile Selection",
            },
            {
              title: 'Step 6',
              description: "Submission",
            },
          ]}
        />
      </div>
      <div className='w-[60%] bg-neutral-1 rounded-[8px] p-[20px] min-h-[80vh]'>

        <h3 className='text-Medium+/Title/xSmall text-primary-6'>{
          stepTitleMap[step]
        }</h3>

        <div className='mt-[30px] '>

          {renderForm(step)}

        </div>

        <div className='mt-[30px] justify-between flex'>

          {
            (step != 0 && step != 5) ? <button className=' border-[1px] border-primary-6 text-primary-6 rounded-[4px] w-[100px] h-[30px] mt-[20px] text-Medium+/Label/Small'
              onClick={() => {
                setStep(step - 1);
                localStorage.setItem('doctorReg', JSON.stringify({ data: data, step: step - 1 }));
              }}
            >Back</button> : null
          }
          {
            step != 5 ? <button className=' cursor-pointer bg-linear text-white rounded-[4px] w-[100px] h-[30px] mt-[20px] text-Medium+/Label/Small'
              onClick={() => {
                next()
              }}
            >{
                step < 4 ? 'Next' : 'Submit'
              }</button> : <button className=' cursor-pointer bg-linear text-white rounded-[4px]  h-[40px] mx-auto px-[30px] mt-[20px] text-Medium+/Label/Small'
                onClick={() => {
                  navigate(ROUTES.Doctor.root)
                }}
              >Go to Dashboard</button>
          }

        </div>

      </div>
    </div>
  </div>
};
export default RegisterDoctor;