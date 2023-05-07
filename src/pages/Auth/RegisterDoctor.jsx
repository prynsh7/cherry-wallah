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


const renderForm = (step) => {
  switch (step) {
    case 0:
      return <div className='flex flex-col gap-[15px]'>
        <Input label="Full Name" placeholder="Enter Full Name" />
        <CustomSelect label="Specialization" placeholder="Select Specialization" options={[]} />
        <CustomSelect label="Gender" placeholder="Select Gender" options={[]} />
        <CustomSelect label="City" placeholder="Select City" options={[]} />

        <div className='flex flex-col'>
          <label className='text-[#333333] opacity-70 text-[14px]'>Brief Description <span className='text-[#FF0000]'>*</span></label>
          <textarea className='border-[1px] rounded-[4px] mt-[5px] min-h-[100px]'>
          </textarea>
        </div>
      </div>

    case 1:
      return <div className='flex flex-col gap-[15px]'>
        <Input label="Registration Number" placeholder="Enter Registration Number" />
        <CustomSelect label="Registration Council" placeholder="Select " options={[]} />
        <CustomSelect label="Registration Year" placeholder="Select " options={[]} />
      </div>

    case 2:
      return <div className='flex flex-col gap-[15px]'>
        <CustomSelect label="Degree" placeholder="Select " options={[]} />
        <Input label="College / University" placeholder="Enter College / University" />
        <CustomSelect label="Year of Completion" placeholder="Select " options={[]} />
        <Input label="Year of Experiences" placeholder="Enter Year of Experiences" type='number' />
        <Input label="Upload Certificate" placeholder="Upload" type='file' />
      </div>
    case 3:
      return <div className='flex flex-col gap-[15px]'>
        <CustomSelect label="Establishment" placeholder="Search to select" options={[]} />
        <CustomSelect label="Degree" placeholder="Select " options={[]} />
        <Input label="Establishment Name" placeholder="Enter Establishment Name" />
        <CustomSelect label="City" placeholder="Select " options={[]} />
        <Input label="Locality" placeholder="Enter Locality" />
      </div>
    case 4:
      return <div className='flex flex-col gap-[15px]'>
        <CustomSelect label="Profile Type" placeholder="Select " options={[]} />
        <Input label="Profile Name" placeholder="Enter Profile Name" />
        <Input label="Profile Description" placeholder="Enter Profile Description" />
        <Input label="Profile Image" placeholder="Upload Profile Image" type='file' />
      </div>
    case 5:
      return <div className='flex flex-col gap-[15px]'>
        <p className='text-center text-primary-6'>Successfully Submitted</p>
      </div>

  }
}


const RegisterDoctor = () => {

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