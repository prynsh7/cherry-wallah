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
    name: '',
    specialization: '',
    gender: '',
    city: '',
    description: '',
    registrationNumber: '',
    registrationCouncil: '',
    registrationYear: '',
    degree: '',
    college: '',
    year: '',
    experince: '',
    certificate: '',
    hasEstablishment: false,
    establishmentType: '',
    establishmentName: '',
    establishmentCity: '',
    establishmentLocality: '',
    profileType: '',
    profileName: '',
    profileDescription: '',
    profileImage: '',
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
            value={data.specialization}
            name={'specialization'}
            label="Specialization"
            placeholder="Select Specialization"
            options={dummyOptions}
            handleChange={(e) => { handleSelect('specialization', e) }}
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
            value={data.registrationNumber}
            name={'registrationNumber'}
            handleChange={handleChange}
          />
          <CustomSelect
            label="Registration Council"
            placeholder="Select "
            options={dummyOptions}
            value={data.registrationCouncil}
            name={'registrationCouncil'}
            handleChange={(e) => { handleSelect('registrationCouncil', e) }}
          />
          <CustomSelect
            label="Registration Year"
            placeholder="Select "
            options={dummyOptions}
            value={data.registrationYear}
            name={'registrationYear'}
            handleChange={(e) => { handleSelect('registrationYear', e) }}
          />
        </div>

      case 2:
        return <div className='flex flex-col gap-[15px]'>
          <CustomSelect
            label="Degree"
            placeholder="Select "
            options={dummyOptions}
            value={data.degree}
            name={'degree'}
            handleChange={(e) => { handleSelect('degree', e) }}
          />
          <Input
            label="College / University"
            placeholder="Enter College / University"
            value={data.college}
            name={'college'}
            handleChange={handleChange}
          />
          <CustomSelect
            label="Year of Completion"
            placeholder="Select "
            options={dummyOptions}
            value={data.year}
            name={'year'}
            handleChange={(e) => { handleSelect('year', e) }}
          />
          <Input
            label="Year of Experiences"
            placeholder="Enter Year of Experiences"
            type='number'
            value={data.experince}
            name={'experince'}
            handleChange={handleChange}
          />
          <Input
            label="Upload Certificate"
            placeholder="Upload"
            type='file'
            name={'certificate'}
            handleChange={handleChange}
          />
        </div>
      case 3:
        return <div className='flex flex-col gap-[15px]'>
          <CustomSelect
            label="Has Establishment"
            placeholder="Search to select"
            options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            value={data.hasEstablishment}
            name={'hasEstablishment'}
            handleChange={(e) => { handleSelect('hasEstablishment', e) }}
          />
          {
            data.hasEstablishment && <>
              <CustomSelect
                label="Establishment Type"
                placeholder="Search to select"
                options={dummyOptions}
                value={data.establishmentType}
                name={'establishmentType'}
                handleChange={(e) => { handleSelect('establishmentType', e) }}
              />
              {/* <CustomSelect label="Degree" placeholder="Select " options={dummyOptions} /> */}
              <Input
                label="Establishment Name"
                placeholder="Enter Establishment Name"
                value={data.establishmentName}
                name={'establishmentName'}
                handleChange={handleChange}
              />
              <CustomSelect
                label="City"
                placeholder="Select "
                options={dummyOptions}
                value={data.establishmentCity}
                name={'establishmentCity'}
                handleChange={(e) => { handleSelect('establishmentCity', e) }}
              />
              <Input
                label="Locality"
                placeholder="Enter Locality"
                value={data.establishmentLocality}
                name={'establishmentLocality'}
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
            value={data.profileType}
            name={'profileType'}
            handleChange={(e) => { handleSelect('profileType', e) }}
          />
          <Input
            label="Profile Name"
            placeholder="Enter Profile Name"
            value={data.profileName}
            name={'profileName'}
            handleChange={handleChange}
          />
          <Input
            label="Profile Description"
            placeholder="Enter Profile Description"
            value={data.profileDescription}
            name={'profileDescription'}
            handleChange={handleChange}
          />
          <Input
            label="Profile Image"
            placeholder="Upload Profile Image"
            type='file'
            name={'profileImage'}
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
        availability: data?.availability,
        city: data?.city,
        description: data?.description,
        medical_registration_no: data?.registrationNumber,
        medical_registration_council: data?.registrationCouncil,
        medical_registration_year: data?.registrationYear,
        educational_degree: data?.degree,
        educational_college: data?.college,
        educational_year: data?.year,
        educational_certificate: data?.certificate,
        has_establishemnt: data?.hasEstablishment,
        establishment_degree: data?.establishmentType,
        establishment_name: data?.establishmentName,
        establishment_address: data?.establishmentLocality,
        establishment_city: data?.establishmentCity,
        profile: data?.profileType,
        profile_image: data?.profileImage,
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
        !data?.specialization ||
        !data?.gender ||
        !data?.city ||
        !data?.description) {
        return toast.error("Please enter basic details")
      }
    }
    
    if (step == 1) {
      if (
        !data.registrationNumber ||
        !data?.registrationCouncil||
        !data?.registrationYear )
         {
        return toast.error("Please enter registration details")
      }
    }
    if (step == 2) {
      if (
        !data.degree ||
        !data?.college||
        !data?.year||
        !data?.experince||
        !data?.certificate )
         {
        return toast.error("Please enter educational details")
      }
    }
    if (step == 3) {
      if (
        !data.establishmentType ||
        !data?.establishmentName||
        !data?.establishmentCity||
        !data?.establishmentLocality )
         {
        return toast.error("Please enter establishment details")
      }
    }
    
    if (step == 4) {
      if (
        !data.profileType ||
        !data?.profileName||
        !data?.profileDescription||
        !data?.profileImage )
         {
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