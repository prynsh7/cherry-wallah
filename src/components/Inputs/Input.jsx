import React from 'react'

const Input = ({
  value,
  onChange,
  className,
  placeholder,
  type,
  name
}) => {
  return (
    <input 
    type={type} 
    name={name}
    className={`h-[40px] p-2 px-4 focus:outline-0 border border-1 w-full rounded text-neutral-8 text-Medium+/Paragraph/Medium mt-[4px] ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
  )
}

Input.defaultProps={
  type:"text"
}

export default Input