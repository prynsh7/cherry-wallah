import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`bg-neutral-1 p-2 ${className}`}>
        {children}
    </div>
  )
}

export default Card