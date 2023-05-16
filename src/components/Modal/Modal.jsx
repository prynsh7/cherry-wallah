import React from 'react'
import {Modal as Mod} from 'antd'

const Modal = ({
    children,
    isOpen,
    handleSubmit,
    handleCancel,
}) => {
  return (
    <Mod footer={null} open={isOpen} onOk={handleSubmit} onCancel={handleCancel}>
        {children}
        <div className='flex justify-between'>
            <button onClick={handleCancel}>Close</button>
            <button onClick={handleSubmit}>Save Changes</button>
        </div>
    </Mod>
  )
}

export default Modal