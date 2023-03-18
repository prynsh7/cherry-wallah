import React from 'react'
import Card from '../../components/partials/Card'
import Label from '../../components/Inputs/Label'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'

const Password = () => {
  return (
    <div>
        <Card>
            <div className="grid grid-cols-8 gap-6 p-7">
                <div className="col-span-3 grid grid-cols-1 gap-4 gap-y-6">
                    <div className="col-span-1">
                        <Label>
                        Current Password
                        </Label>
                        <Input
                        placeholder={'Enter current password'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                        Create New Password
                        </Label>
                        <Input
                        placeholder={'Enter New Password'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Label>
                        Confirm New Password
                        </Label>
                        <Input
                        placeholder={'Confirm New Password'}
                        />
                    </div>
                    <div className="col-span-1">
                        <Button text={'Save Changes'} size={'medium'}/>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Password