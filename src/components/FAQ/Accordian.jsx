import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box  
} from '@chakra-ui/react'

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
const Accordian = () => {
  return (
    <div className='min-h-[200px]'>
      <Accordion allowToggle className={`rounded-xl`}>
        <AccordionItem className=''>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[24px] rounded-[8px]`}>
          <h2>
            <AccordionButton className='mb-5 text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Is cold pressed oil healthier?
              </Box>
              {isExpanded ? (
              <AiOutlineMinus fontSize='16px' fontWeight={600} className='text-primary-6' />
            ) : (
              <AiOutlinePlus fontSize='16px' fontWeight={600} className='text-primary-6' />
            )}
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-[#494949] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>
          Cold pressed oil does not contain any chemicals and is pressed without heating the seeds to extreme temperature. These oils retain the original aroma of the oil seed, they maintain the nutritional value from the original seed and hence are healthier.
          </AccordionPanel>
          </div>
          )}
        </AccordionItem>
        <AccordionItem className=''>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[24px] rounded-[8px]`}>
          <h2>
            <AccordionButton className='mb-5 text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Is cold pressed oil healthier?
              </Box>
              {isExpanded ? (
              <AiOutlineMinus fontSize='16px' fontWeight={600} className='text-primary-6' />
            ) : (
              <AiOutlinePlus fontSize='16px' fontWeight={600} className='text-primary-6' />
            )}
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-[#494949] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>
          Cold pressed oil does not contain any chemicals and is pressed without heating the seeds to extreme temperature. These oils retain the original aroma of the oil seed, they maintain the nutritional value from the original seed and hence are healthier.
          </AccordionPanel>
          </div>
          )}
        </AccordionItem>

        <AccordionItem className=''>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[24px] rounded-[8px]`}>
          <h2>
            <AccordionButton className='mb-5 text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Is cold pressed oil healthier?
              </Box>
              {isExpanded ? (
              <AiOutlineMinus fontSize='16px' fontWeight={600} className='text-primary-6' />
            ) : (
              <AiOutlinePlus fontSize='16px' fontWeight={600} className='text-primary-6' />
            )}
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-[#494949] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>
          Cold pressed oil does not contain any chemicals and is pressed without heating the seeds to extreme temperature. These oils retain the original aroma of the oil seed, they maintain the nutritional value from the original seed and hence are healthier.
          </AccordionPanel>
          </div>
          )}
        </AccordionItem>

        <AccordionItem className=''>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[24px] rounded-[8px]`}>
          <h2>
            <AccordionButton className='mb-5 text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Is cold pressed oil healthier?
              </Box>
              {isExpanded ? (
              <AiOutlineMinus fontSize='16px' fontWeight={600} className='text-primary-6' />
            ) : (
              <AiOutlinePlus fontSize='16px' fontWeight={600} fon className='text-primary-6' />
            )}
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-[#494949] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>
          Cold pressed oil does not contain any chemicals and is pressed without heating the seeds to extreme temperature. These oils retain the original aroma of the oil seed, they maintain the nutritional value from the original seed and hence are healthier.
          </AccordionPanel>
          </div>
          )}
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default Accordian