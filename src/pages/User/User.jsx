import React from 'react'
import Card from '../../components/partials/Card'
import userimg from '../../assets/images/temp/user.jpg'
import Label from '../../components/Inputs/Label'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'

const User = () => {
  return (
    <div>
        <Card>
            <div className="grid grid-cols-8 gap-6 p-7">
                <div className="col-span-2">
                    <img src={userimg} className='w-full rounded-full' alt="" />
                </div>
                <div className="col-span-6 grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-6">
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
                        placeholder={'Enter your Phone Number'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Email
                        </Label>
                        <Input
                        type={'email'}
                        placeholder={'Enter your Email'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Birthday
                        </Label>
                        <Input
                        type={'date'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Anniversary
                        </Label>
                        <Input
                        type={'date'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Address
                        </Label>
                        <Input
                        placeholder={'Enter your Address'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            Pincode
                        </Label>
                        <Input
                        type={'number'}
                        placeholder={'Enter your pincode'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                            City
                        </Label>
                        <Input
                        placeholder={'Enter your city'}
                        />
                    </div>
                    <div className="col-span-2">
                        <Button text={'Save Changes'} size={'medium'}/>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default User