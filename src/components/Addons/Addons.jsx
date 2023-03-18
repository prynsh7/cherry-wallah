import React from 'react'
import candle from '../../assets/images/productPage-icons/candles.png'
import plus from '../../assets/images/productPage-icons/plus.png'

import {GrAdd} from 'react-icons/gr'
import {BiMinus} from 'react-icons/bi'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from '@chakra-ui/accordion'

const Addons = () => {
  return (
    <div>
 <Accordion allowToggle>
  <AccordionItem className='pl-[0.5rem] pr-[1rem]'>
  {({ isExpanded }) => (
    <>
    <h2>
      <AccordionButton className='flex justify-between items-center'>
        <div className='text-Small/Title/Medium capitalize'>
            add<span className='px-[0.5rem]'>-</span>ons
        </div>
        
        {isExpanded ? (
          <BiMinus/>
          ) : (
            <GrAdd />
            )}
      </AccordionButton>
    </h2>
    <AccordionPanel>
    <div className='flex my-[4rem] '>
        {
            [...Array(3)].map((_,i) => {
                return  <div>

                <div>
                  <img src={candle} alt="" />
                  </div>
                  
                  <div className='flex px-[1.5rem] justify-between'>
                    
                    <div className='capitalize text-Small/Title/xSmall'>
                       <span>Number candles</span><br/>
                       <span>rs. 10</span>
                    </div>
        
                    <button  className='border-Foundation/primary/primary-6 rounded-lg border-[1px] bg-Foundation/primary/primary-1 px-[1rem] py-[1rem]'>
                      <img src={plus} alt="" />
                    </button>
        
                </div>
                </div>
            })
        }
        </div>

    </AccordionPanel>
            </>
  )}
  </AccordionItem>
  </Accordion>

    </div>
  )
}

export default Addons