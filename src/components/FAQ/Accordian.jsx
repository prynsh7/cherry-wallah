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
    <div className='min-h-[200px] max-w-[800px] w-[60%]'>
      <Accordion allowToggle className={`rounded-xl p-[10px] `}>
        <AccordionItem className='mb-[20px] bg-primary-1 rounded-[8px] shadow-sm'>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[12px] rounded-[8px]`}>
          <h2>
            <AccordionButton className=' text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              What are ayurvedic treatments?
              </Box>
              {isExpanded ? (
              <AiOutlineMinus fontSize='16px' fontWeight={600} className='text-primary-6' />
            ) : (
              <AiOutlinePlus fontSize='16px' fontWeight={600} className='text-primary-6' />
            )}
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-[#494949] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>
          There are many treatments in the Ayurvedic toolbox for rebalancing health. They include:
          <li>Lifestyle changes like going to bed at a regular time</li>
          <li>Diet changes like eating more warm foods or oils or greens</li>
          <li>Herbs – in many forms, loose powder, capsules, teas, medicated ghee/oil, tinctures, honey balls.</li>
          <li>PanchaKarma – deep cleansing and rejuvenation process</li>
          </AccordionPanel>
          </div>
          )}
        </AccordionItem>
        <AccordionItem className='mb-[20px] bg-primary-1 rounded-[8px] shadow-sm'>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[12px] rounded-[8px]`}>
          <h2>
            <AccordionButton className=' text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Does Ayurvedic medicine have side effects?
              </Box>
              {isExpanded ? (
              <AiOutlineMinus fontSize='16px' fontWeight={600} className='text-primary-6' />
            ) : (
              <AiOutlinePlus fontSize='16px' fontWeight={600} className='text-primary-6' />
            )}
            </AccordionButton>
          </h2>
          <AccordionPanel className='text-[#494949] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>
          There can be a detox effect which can take the form of mild flu-like symptoms, or a rash. This usually is a normal reaction and means that the herbs are doing their job. Sometimes the reaction can be stronger and usually the practitioner makes an adjustment in the dosing.
          </AccordionPanel>
          </div>
          )}
        </AccordionItem>

        <AccordionItem className='mb-[20px] bg-primary-1 rounded-[8px] shadow-sm'>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[12px] rounded-[8px]`}>
          <h2>
            <AccordionButton className=' text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Is there any Ayurvedic treatment for cancer?
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

        <AccordionItem className='mb-[20px] bg-primary-1 rounded-[8px] shadow-sm'>
          {({isExpanded})=>(
            <div className={`${isExpanded?'bg-primary-1':''} p-[12px] rounded-[8px]`}>
          <h2>
            <AccordionButton className=' text-Small/Title/xSmall md:text-Medium+/Title/xSmall text-[#262626]'>
              <Box flex='1' textAlign='left'>
              Where does Ayurvedic medicine come from?
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