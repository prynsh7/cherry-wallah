import React, { useState } from 'react'
import Card from '../../components/partials/Card'
import Label from '../../components/Inputs/Label'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from 'antd'

const LoyaltyPoints = () => {


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
                    <Button text={'Cancel'} type={"secondary"} size={'medium'} />
                    <Button text={'Redeem Now'} size={'medium'} />
                </div>
            </Modal>
            <Card>
                <div className='p-8'>
                    <div className='bg-primary-2 text-Medium+/Paragraph/Medium p-4 mb-10 rounded'>
                        Loyalty points can be gained by making Transactions
                    </div>
                    <div className='text-Medium+/Paragraph/Medium-Strong'>
                        Loyalty Points : 45
                    </div>
                    <div className='p-7'>
                        <div className='border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-5 justify-between items-center'>
                            <div className='flex '>
                                <div className='text-Small/Label/Medium mr-3'>1. </div>
                                <div>
                                    <div className='text-Small/Label/Medium'>For Ordering Order <span className='text-linear'>#67865</span></div>
                                    <div className='text-Small/Label/Small text-neutral-8 mt-1'>
                                        <div>Date : 12th March 2023</div>
                                        <div>Expires on : 20th March 2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                +20
                            </div>
                        </div>
                        <div className='border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-5 justify-between items-center'>
                            <div className='flex '>
                                <div className='text-Small/Label/Medium mr-3'>1. </div>
                                <div>
                                    <div className='text-Small/Label/Medium'>For Ordering Order <span className='text-linear'>#67865</span></div>
                                    <div className='text-Small/Label/Small text-neutral-8 mt-1'>
                                        <div>Date : 12th March 2023</div>
                                        <div>Expires on : 20th March 2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                +20
                            </div>
                        </div>
                        <div className='border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-5 justify-between items-center'>
                            <div className='flex '>
                                <div className='text-Small/Label/Medium mr-3'>1. </div>
                                <div>
                                    <div className='text-Small/Label/Medium'>For Ordering Order <span className='text-linear'>#67865</span></div>
                                    <div className='text-Small/Label/Small text-neutral-8 mt-1'>
                                        <div>Date : 12th March 2023</div>
                                        <div>Expires on : 20th March 2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                +20
                            </div>
                        </div>
                        <div className='border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-5 justify-between items-center'>
                            <div className='flex '>
                                <div className='text-Small/Label/Medium mr-3'>1. </div>
                                <div>
                                    <div className='text-Small/Label/Medium'>For Ordering Order <span className='text-linear'>#67865</span></div>
                                    <div className='text-Small/Label/Small text-neutral-8 mt-1'>
                                        <div>Date : 12th March 2023</div>
                                        <div>Expires on : 20th March 2023</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                +20
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default LoyaltyPoints