import React from 'react'
import {Modal as Mod} from 'antd'
import Button from '../Button/Button'

const Modal = ({
    children,
    isOpen,
    handleSubmit,
    handleCancel,
    width
}) => {
  return (
    <Mod width={width} footer={null} open={isOpen} onOk={handleSubmit} onCancel={handleCancel}>
        {children}
        <div className='flex justify-between mt-[14px]'>
        <Button label={'Close'} onClick={handleCancel} type='outlined'/>
            <Button label={'Save Change'} onClick={handleSubmit} type='linear'/>
        </div>
    </Mod>
  )
}

export default Modal