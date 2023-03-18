import React from 'react'

const Category = ({ item }) => {
    return (
        <div key={item?.key} className='flex flex-col gap-[20px]  items-center'>
            <div>
                <img src={item?.img} className="w-[100px] h-[100px] contain" alt="" />
            </div>
            <div className='text-Medium+/Title/Small capitalize'>
                {item?.name}
            </div>
        </div>
    )
}

export default Category