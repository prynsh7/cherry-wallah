import React from 'react'

const Label = ({
  children,
  className
}) => {
  return (
    <div className={`text-Medium+/Paragraph/Medium ${className}`}>
      {children}
      </div>
  )
}

export default Label