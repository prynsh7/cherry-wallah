import { Steps } from 'antd';
import Input from '../../components/Input/Input';
import CustomSelect from '../../components/Input/Select';
import { useState } from 'react';



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
    gender:'',
    city:'',
    description:'',
    registrationNumber:'',
    registrationCouncil:'',
    registrationYear:'',
    degree:'',
    college:'',
    year:'',
    experince:'',
    certificate:'',
    establishmentType:'',
    establishmentName:'',
    establishmentCity:'',
    establishmentLocality:'',
    profileType:'',
    profileName:'',
    profileDescription:'',
    profileImage:'',
  })

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
      value:'Male',
      label:'Male',
    },
    {
      value:'Female',
      label:'Female',
    },
  ]

  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSelect = (name,value) => {
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
          handleChange={(e)=>{handleSelect('specialization',e)}}
          />
          <CustomSelect 
          label="Gender" 
          placeholder="Select Gender" 
          options={genderOptions} 
          value={data.gender}
          name={'gender'}
          handleChange={(e)=>{handleSelect('gender',e)}}
          />
          <CustomSelect 
          label="City" 
          placeholder="Select City" 
          options={dummyOptions} 
          value={data.city}
          name={'city'}
          handleChange={(e)=>{handleSelect('city',e)}}
          />
  
          <div className='flex flex-col'>
            <label className='text-[#333333] opacity-70 text-[14px]'>Brief Description <span className='text-[#FF0000]'>*</span></label>
            <textarea className='border-[1px] rounded-[4px] mt-[5px] min-h-[100px]'>
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
          handleChange={(e)=>{handleSelect('registrationCouncil',e)}}
          />
          <CustomSelect 
          label="Registration Year" 
          placeholder="Select " 
          options={dummyOptions} 
          value={data.registrationYear}
          name={'registrationYear'}
          handleChange={(e)=>{handleSelect('registrationYear',e)}}
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
          handleChange={(e)=>{handleSelect('degree',e)}}
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
          handleChange={(e)=>{handleSelect('year',e)}}
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
          label="Establishment" 
          placeholder="Search to select" 
          options={dummyOptions} 
          value={data.establishmentType}
          name={'establishmentType'}
          handleChange={(e)=>{handleSelect('establishmentType',e)}}
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
          handleChange={(e)=>{handleSelect('establishmentCity',e)}}
          />
          <Input 
          label="Locality" 
          placeholder="Enter Locality" 
          value={data.establishmentLocality}
          name={'establishmentLocality'}
          handleChange={handleChange}
          />
        </div>
      case 4:
        return <div className='flex flex-col gap-[15px]'>
          <CustomSelect 
          label="Profile Type" 
          placeholder="Select " 
          options={dummyOptions} 
          value={data.profileType}
          name={'profileType'}
          handleChange={(e)=>{handleSelect('profileType',e)}}
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
        return <div className='flex flex-col gap-[15px]'>
          <p className='text-center text-primary-6'>Successfully Submitted</p>
        </div>
  
    }
  }



  const [step, setStep] = useState(0);

  return <div className='bg-neutral-4 p-[10px] min-h-[100vh] flex items-center'>
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
            step != 0 ? <button className=' border-[1px] border-primary-6 text-primary-6 rounded-[4px] w-[100px] h-[30px] mt-[20px] text-Medium+/Label/Small'
              onClick={() => {
                setStep(step - 1);
              }}
            >Back</button> : <p></p>
          }
          <button className=' cursor-pointer bg-linear text-white rounded-[4px] w-[100px] h-[30px] mt-[20px] text-Medium+/Label/Small'
            onClick={() => {
              setStep(step + 1);
            }}
          >Next</button>

        </div>

      </div>
    </div>
  </div>
};
export default RegisterDoctor;