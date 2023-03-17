import React from 'react'

const Button = ({
  type,
  state,
  trailingIcon,
  leadingIcon,
  iconOnly,
  icon,
  size,
  text,
  className
}) => {
  return (
    <button 
    className={` ${type=='secondary'?'border border-primary-2':''} text-Medium+/Label/Large-Strong px-[1.5rem] py-[1rem] rounded-lg bg-Foundation/primary/primary-6 text-[white]   ${className}`}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  children:"Button"
}
export default Button