import React from 'react'
import americanHeritage2 from '../../assets/images/category/american-heritage-chocolate2.png'
import pinstamp from '../../assets/images/productPage-icons/pinstamp.png'

import {HiOutlineShoppingBag} from 'react-icons/hi2'

import { Select, Input } from 'antd'
import Addons from '../../components/Addons/Addons'

import Button from '../../components/Button/Button'

const ProductPage = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='container flex mx-auto px-[5rem] overflow-hidden py-[50px] gap-x-[1rem]'>

      <div className='basis-[40%]'>
        <img src={americanHeritage2} className="w-[100%]" />
      </div>

      <div className='container basis-[60%]'>

        <div>
          <div className='text-Medium+/Title/Large capitalize'>American heritage chocolate</div><br />

          <span className='text-Medium+/Title/Medium'>Rs.400 per/kg</span>
        </div>

        <div className='text-Small/Title/Medium mt-[3.5rem] mb-[1.25rem]'>
          Select
        </div>

        <div className='text-Medium+/Paragraph/Medium flex gap-x-[1rem]'>

          <div>


            <label htmlFor="weight" className='text-Medium+/Paragraph/Medium'>Weight</label> <br />

            <Select id="weight" className='outline-Foundation/neutral/neutral-7 w-[200px] '
              defaultValue="1"

              onChange={handleChange}
              options={[
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },

              ]}
            />

          </div>

          <div>

            <label htmlFor="message">Message on Cake</label><br />

            <Input placeholder="Enter message on the cake you want" id="message" className='border-Foundation/neutral/neutral-7 outline-none w-[300px] px-[1rem] ' />

          </div>

        </div>


        <div className='text-Medium+/Paragraph/Medium flex gap-x-[1rem] items-center my-[1.75rem]'>

          <div>

            <input type="radio" id="with egg" name="egg option" />
            <label htmlFor="with egg">With Egg</label>

          </div>

          <div>

            <input type="radio" id="without egg" name="egg option" />
            <label htmlFor="without egg">Without Egg</label>

          </div>

        </div>

        <label htmlFor="pincode">Enter Pin Code</label><br />
        <div className='relative'>
          <Input type='number' min={1} placeholder="" id="pincode" className='border-Foundation/neutral/neutral-7 outline-none w-[300px] pl-[2rem] pr-[8rem] py-[0.5rem] ' />
          <img src={pinstamp} alt="" className='absolute top-[0.6rem] left-[0.75rem]' />
          <Button text="Check" hover={true} className="absolute top-1 w-[100px] h-[1rem] translate-x-[195%]" />
        </div>


         <div className='text-Small/Title/Medium mt-[3rem]'>
          Description
         </div>
         <div className='text-Medium+/Paragraph/Medium text-Foundation/neutral/neutral-8 mt-[8px] mb-[1rem]'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.
         </div>

         <div className='capitalize my-[1.5rem]'>
          <span className='mr-[4rem]'>shape : round</span>
          <span >Flavor : american choconut</span>

         </div>

         <hr/>
         <Addons/>
         <hr/>

<div className='flex gap-x-[1rem] justify-center items-center my-[3.5rem]'>

<Button icon={<HiOutlineShoppingBag/>} leadingIcon={true} text="Add to cart" className="grow"/>
<Button  text="place order" className="grow"/>

</div>
      </div>


    </div>
  )
}

export default ProductPage