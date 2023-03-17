import React from 'react'
import wishlist from '../../assets/images/category/wishlist.png'
import star from '../../assets/images/category/star.png'

const ProductCard = ({ product }) => {
    return (
        <div className='bg-Foundation/primary/primary-2 rounded-[5px]'>
            <div className='relative'>
                <img src={product?.img} alt="" />
                <div className='absolute flex items-center justify-center right-0 top-0 w-[4rem] h-[4rem] bg-Foundation/primary/primary-4 rounded-bl-[30px] rounded-tr-[5px]'>
                    <img src={wishlist} alt="" />
                </div>
                <div className='absolute h-[1rem] w-[1rem] flex gap-x-1 items-center justify-between bottom-2 right-8'>
                    <img src={star} alt="" />
                    <div>4.8</div>
                </div>
            </div>
            <div className='p-[1rem]'>
                <span className='text-Medium+/Paragraph/Small-Strong capitalize'>{product?.name}</span><br />
                <span className='text-Medium+/Title/xSmall'>Rs. {product?.price} per/kg</span>
            </div>
        </div>
    )
}

export default ProductCard