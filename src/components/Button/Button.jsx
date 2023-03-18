import React from 'react'
import {BsPlusLg} from 'react-icons/bs'

const Button = ({
  type,
  trailingIcon,
  leadingIcon,
  iconOnly,
  icon,
  size,
  text,
  className,
  onClick,
  justify
}) => {

  const typeStyle = type=='secondary'?
  'bg-none text-primary-6 border border-1 border-primary-6 hover:bg-primary-1'
  :
  type=='tertiary'?
  'bg-none text-primary-6 border-0 outline-0 focus:outline-0 focus:border-0 hover:bg-primary-1'
  :
  'bg-linear text-neutral-1 border-0 outline-0 focus:outline-0 focus:border-0 hover:bg-primary-6'


  const sizeStyles = size=='small'
  ?
  `text-Medium+/Label/Small-Strong  rounded ${iconOnly && !trailingIcon &&!leadingIcon ?'p-2.5':'px-4 py-2.5'}`
  :
  size=='medium'
  ?
  `text-Medium+/Label/Medium-Strong rounded-lg ${iconOnly && !trailingIcon &&!leadingIcon ?'p-3.5':'px-4 py-3.5'}`
  :
  `text-Medium+/Label/Large-Strong  rounded-lg ${iconOnly && !trailingIcon &&!leadingIcon ?'p-4':'px-6 py-4'}`
  

  return (
    <button 
    onClick={onClick}
    className={`${typeStyle} ${sizeStyles} flex gap-2 items-center justify-${justify}  ${className}`}>
      {
        trailingIcon
        ?
        <>
        {text}
        {icon}
        </>
        :
        leadingIcon
        ?
        <>
        {icon}
        {text}
        </>
        :
        iconOnly
        ?
        icon
        :
        text
        
      }
    </button>
  )
}

Button.defaultProps = {
  text:"Place Order",
  size:'large',
  type:'primary',
  iconOnly:false,
  trailingIcon:false,
  leadingIcon:false,
  icon:<BsPlusLg/>,
  justify:'center'
}
export default Button