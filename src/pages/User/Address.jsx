import React, { useState } from 'react'
import Card from '../../components/partials/Card'
import Label from '../../components/Inputs/Label'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import { AiOutlineClose } from 'react-icons/ai'
import { Modal } from 'antd'

const Address = () => {


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
            <Modal width={'80%'} footer={null} closable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='flex justify-between items-center'>
                    <div className='text-Medium+/Title/Small'>Add Address</div>
                    <Button type={'tertiary'} onClick={handleCancel} iconOnly icon={<AiOutlineClose />} />
                </div>
                <div className="grid grid-cols-2 gap-7">
                <div className="col-span-1">
                        <Label>
                            First Name
                        </Label>
                        <Input
                        placeholder={'Enter your first name'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Last Name
                        </Label>
                        <Input
                        placeholder={'Enter your last name'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Phone
                        </Label>
                        <Input
                        type={'number'}
                            placeholder={'Enter Phone Number'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            House Number
                        </Label>
                        <Input
                        type={'number'}
                            placeholder={'Enter House Number'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Landmark
                        </Label>
                        <Input
                            placeholder={'Enter nearby popular Landmark'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                        Colony / Area
                        </Label>
                        <Input
                            placeholder={'Enter Colony / Area Name'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Pincode
                        </Label>
                        <Input
                        type={"number"}
                            placeholder={'Enter Pincode'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Mark on map
                        </Label>
                        <Input
                            placeholder={'Select Address from map'}
                        />
                    </div>
                </div>
                <div className='mt-10 flex items-center justify-between'>
                    <Button text={'Cancel'} type={"secondary"} size={'medium'}/>
                    <Button text={'Add Address'} size={'medium'}/>
                </div>
            </Modal>
            <Card>
                <div className='p-7'>
                    <div className='bg-neutral-2 border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-7'>
                        <div className='text-Medium+/Label/Large-Strong mr-3'>1. </div>
                        <div>
                            <div className='text-Medium+/Label/Large-Strong'>Anand Doddamani</div>
                            <div className='text-Medium+/Paragraph/Small mt-1'>
                                <div>Vinayak Colony 2nd Cross</div>
                                <div>BVB Back Gate</div>
                                <div>Vidyanagr, Hubballi,</div>
                                <div>580001</div>
                            </div>
                            <div className='text-Medium+/Label/Medium-Strong mt-1'>+91 8904079022</div>
                        </div>
                    </div>
                    <div className='bg-neutral-2 border border-0 border-b-[1px] border-neutral-6 p-3.5 flex mb-7'>
                        <div className='text-Medium+/Label/Large-Strong mr-3'>2. </div>
                        <div>
                            <div className='text-Medium+/Label/Large-Strong'>Anand Doddamani</div>
                            <div className='text-Medium+/Paragraph/Small mt-1'>
                                <div>Vinayak Colony 2nd Cross</div>
                                <div>BVB Back Gate</div>
                                <div>Vidyanagr, Hubballi,</div>
                                <div>580001</div>
                            </div>
                            <div className='text-Medium+/Label/Medium-Strong mt-1'>+91 8904079022</div>
                        </div>
                    </div>
                    <Button onClick={showModal} text={'Add Address'} type="tertiary" leadingIcon />
                </div>
            </Card>
        </div>
    )
}

export default Address