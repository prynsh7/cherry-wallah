import React, { useState } from 'react'
import Card from '../../components/partials/Card'
import Label from '../../components/Inputs/Label'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from 'antd'

const Coupons = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return (
        <div>
            <Modal footer={null} closable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='flex justify-between items-center'>
                    <div className='text-Medium+/Title/Small'>Redeem Code</div>
                    <Button type={'tertiary'} onClick={handleCancel} iconOnly icon={<AiOutlineClose />} />
                </div>
                <div className="grid grid-cols-1 gap-7">
                <div className="col-span-1">
                        <Label>
                            CODE
                        </Label>
                        <Input
                        placeholder={'Enter CODE to Redeem'}
                        />
                    </div>
                </div>
                <div className='mt-10 flex items-center justify-between'>
                    <Button text={'Cancel'} type={"secondary"} size={'medium'}/>
                    <Button text={'Redeem Now'} size={'medium'}/>
                </div>
            </Modal>
            <Card>
                <div className='p-7'>
                    <div className='bg-neutral-2 border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-7'>
                        <div className='text-Medium+/Label/Large-Strong mr-3'>1. </div>
                        <div>
                            <div className='text-Medium+/Label/Large-Strong'>HFDUMD89780</div>
                            <div className='text-Medium+/Label/Small  mt-1'>
                                <div>get 50% of on yor first order</div>
                                <div>Apply only for order above ₹499</div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={showModal} text={'Redeem Coupons'} type="tertiary" leadingIcon />
                </div>
            </Card>
        </div>
    )
}

export default Coupons