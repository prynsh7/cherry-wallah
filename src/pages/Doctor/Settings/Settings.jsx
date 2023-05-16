import React from 'react'

function Settings() {
  return (
    <div className=''>
      <div className='container mx-auto'>

        <div className='pb-[32px]'>
          <div className='pb-[32px] gap-6 bg-[#ffff] flex flex-col rounded-[10px]'>
            <div className='mx-[28px] mt-[20px] flex justify-between'>
              <h3 className='text-Medium+/Label/Large-Strong text-[black]'>Settings</h3>
            </div>
            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Basic info</h2>
              </div>
              <div className='flex'>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Name*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter full name' />
                </div>

                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Specialization*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your specialization' />
                </div>

                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>City*</p>
                  <input className='outline-none border-2 border-primary-2 w-[280px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your city' />
                </div>
              </div>

              <p className='px-[20px] text-primary-7'>Gender*</p>
              <div className='mx-[10px] flex felx-col'>
                <div className='flex bg-neutral-1 p-[12px] rounded'>
                  <div className='bg-[none] border border-primary-6 rounded-full h-[18px] w-[18px] p-[4px]'>
                    <div className='w-[100%] h-[100%] border rounded-full bg-primary-6'></div>
                  </div>
                  <span className='pl-[6px] text-primary-6'>Male</span>
                </div>

                <div className='flex bg-neutral-1 p-[12px] rounded-[4px]'>
                  <div className='bg-[none] border border-primary-6 rounded-full h-[18px] w-[18px] p-[4px]'>
                    <div className='w-[100%] h-[100%] border border-primary-6 rounded-full bg-[none]'></div>
                  </div>
                  <span className='pl-[6px] text-primary-6'>Female</span>
                </div>

                <div className='flex bg-neutral-1 p-[12px] rounded-[4px]'>
                  <div className='bg-[none] border border-primary-6 rounded-full h-[18px] w-[18px] p-[4px]'>
                    <div className='w-[100%] h-[100%] border border-primary-6 rounded-full bg-[none]'></div>
                  </div>
                  <span className='pl-[6px] text-primary-6'>Others</span>
                </div>
              </div>

            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Medical Registration</h2>
              </div>
              <div className='flex'>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Registration Number*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter registration number' />
                </div>

                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Registration Council*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your registration council' />
                </div>

                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Registration Date*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your registration date' />
                </div>
              </div>
            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Educational Details</h2>
              </div>

              <div className='flex'>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Degree*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your degree' />
                </div>

                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>College/University*</p>
                  <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your college/university' />
                </div>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Year of completion*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter completion year' />
                </div>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Years of experiences*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your experiences' />
                </div>
              </div>
            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Establishment Details</h2>
              </div>

              <div className='flex'>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Establishment*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter establishment' />
                </div>

                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Degree*</p>
                  <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your degree' />
                </div>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Establishment Name*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your establishment name' />
                </div>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>City*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your city' />
                </div>
                
              </div>
              <div className='flex'>
              <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Locality*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your locality' />
                </div>
                <div className='flex gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>State*</p>
                  <input className='outline-none border-2 border-primary-2 w-[235px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Enter your state' />
                </div>
                </div>
            </div>

            <div className=' border-2 mx-[24px] border-primary-2 rounded'>
              <div className='text-Small/Title/xSmall p-[12px] bg-primary-2 text-neutral-9'>
                <h2>Profile Section</h2>
              </div>
              <div className='flex'>
                <div className='flex relative gap-2 flex-col py-[18px] px-[20px] text-primary-7'>
                  <p>Profile*</p>
                  <div className='flex items-center relative justify-end'>
                  <i class="bi absolute bi-chevron-down absolute pr-[10px] text-primary-7"></i>
                  <input className='outline-none border-2 border-primary-2 w-[250px] rounded-[4px] py-[4px] px-[10px]' type="text" placeholder='Select  your profile ' />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='mx-[20px] flex justify-between bg-primary-2 p-[12px] rounded-[8px]'>
            <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'> <span className='text-primary-7'>Cancel</span> </button>
            <button className='px-[10px] py-[4px] rounded-[8px] border-2 border-primary-4'><span className='text-primary-7'>Save</span> </button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Settings