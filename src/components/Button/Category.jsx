import React from 'react'
import Slider from "react-slick";
import anniversary1 from '../../assets/images/category/anniversary1.png'
import ship from '../../assets/images/category/Shipped.png'
import smile from '../../assets/images/category/Smile.png'
import cake from '../../assets/images/category/Cake.png'
import cakeCat from '../../assets/images/category/cake-category.png'
import birthday from '../../assets/images/category/birthday.png'
import themeCake from '../../assets/images/category/theme-cake.png'
import combo from '../../assets/images/category/combo.png'
import anniversary2 from '../../assets/images/category/anniversary2.png'
import weddingCake from '../../assets/images/category/wedding-cake.png'
import partyCake from '../../assets/images/category/party-cakes.png'
import christmas from '../../assets/images/category/christmas.png'
import gifts from '../../assets/images/category/gifts.png'
import chocolateCake from '../../assets/images/category/chocolate-cakes.png'
import photoCake from '../../assets/images/category/photo-cakes.png'
import cartoonCake from '../../assets/images/category/cartoon-cakes.png'
import americanHeritage1 from '../../assets/images/category/american-heritage-chocolate1.png'
import americanHeritage2 from '../../assets/images/category/american-heritage-chocolate2.png'
import americanHeritage3 from '../../assets/images/category/american-heritage-chocolate3.png'
import wishlist from '../../assets/images/category/wishlist.png'
import star from '../../assets/images/category/star.png'



import '../../App.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", opacity: "0.5" }}
            onClick={onClick}
        />
    );
}

var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />
}



const Category = () => {
    return (
        <div className='px-[3rem]'>
            <Slider {...settings} className="my-8">
                <div>
                    <img src={anniversary1} alt="" className='w-[100%]' />
                </div>
                <div>
                    <img src={anniversary1} alt="" className='w-[100%]' />
                </div>

            </Slider>

            <div>
                <div className='flex justify-around'>
                    <div className='flex items-center gap-2 '>
                        <div className='rounded-[50%] h-[5rem] w-[5rem] bg-Foundation/primary/primary-2 relative'>
                            <img src={ship} alt="shipping icon" className='absolute top-3 left-3' />
                        </div>
                        <div className='text-Small/Label/Large '>
                            Delivering since 2004, Completed 15 years in Online Delivery
                        </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <div className='rounded-[50%] h-[5rem] w-[5rem] bg-Foundation/primary/primary-2 relative'>
                            <img src={smile} alt="shipping icon" className='absolute top-3 left-3' />
                        </div>
                        <div className='text-Small/Label/Large ' >
                            Trusted by more than 1 million customers worldwide
                        </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <div className='rounded-[50%] h-[5rem] w-[5rem] bg-Foundation/primary/primary-2 relative'>
                            <img src={cake} alt="shipping icon" className='absolute top-3 left-3' />
                        </div>
                        <div className='text-Small/Label/Large '>
                            Partnered with more than 1000 cake shops and florists across India
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='text-Medium+/Title/Large mt-[7.5rem] mb-[5rem] text-center title'>Browser by Category</div>

                <div className='grid grid-cols-5 auto-rows-auto gap-[2.5rem]'>
                    <div className='flex flex-col  gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={cakeCat} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            Cake
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={birthday} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            Birthday
                        </div>
                    </div>
                    <div className='flex flex-col  gap-y-[2.5rem] items-center'>
                        <div>
                            <img src={combo} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            combo
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={themeCake} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            theme cake
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={gifts} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            gifts
                        </div>
                    </div>
                    <div className='flex flex-col  gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={cakeCat} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            Cake
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={birthday} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            Birthday
                        </div>
                    </div>
                    <div className='flex flex-col  gap-y-[2.5rem] items-center'>
                        <div>
                            <img src={combo} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            combo
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={themeCake} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            theme cake
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={gifts} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            gifts
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <div className='text-Medium+/Title/Large mt-[7.5rem] mb-[5rem] text-center title'>Occasions</div>

                <div className='grid grid-cols-5 auto-rows-auto gap-[2rem]'>
                    <div className='flex flex-col  gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={birthday} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            Birthday
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={anniversary2} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            anniversary
                        </div>
                    </div>
                    <div className='flex flex-col  gap-y-[2.5rem] items-center'>
                        <div>
                            <img src={weddingCake} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            wedding cake
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={partyCake} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            party cakes
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[2.5rem]  items-center'>
                        <div>
                            <img src={christmas} alt="" />
                        </div>
                        <div className='text-Medium+/Title/Small capitalize'>
                            christmas
                        </div>
                    </div>


                </div>

            </div>
            <div>
                <div className='text-Medium+/Title/Large mt-[7.5rem] mb-[5rem] text-center title'>Cakes</div>

                <div className='flex gap-x-[2rem] justify-evenly items-center '>

                    <div className='relative flex flex-col items-center justify-end'>
                        <img src={chocolateCake} alt="" />
                        <div className='absolute bottom-[-1.4rem]  text-Medium+/Title/xSmall capitalize bg-Foundation/primary/primary-1 px-[2.25rem] py-[0.625rem] inline rounded-md'>chocolate cakes</div>
                    </div>
                    <div className='relative flex flex-col items-center justify-end'>
                        <img src={photoCake} alt="" />
                        <div className='absolute bottom-[-1.4rem]  text-Medium+/Title/xSmall capitalize bg-Foundation/primary/primary-1 px-[2.25rem] py-[0.625rem] inline rounded-md'>party cakes</div>
                    </div>
                    <div className='relative flex flex-col items-center justify-end'>
                        <img src={cartoonCake} alt="" />
                        <div className='absolute bottom-[-1.4rem]  text-Medium+/Title/xSmall capitalize bg-Foundation/primary/primary-1 px-[2.25rem] py-[0.625rem] inline rounded-md'>cartoon cakes</div>
                    </div>

                </div>

                <div className='text-center mt-[5rem] mb-[7.5rem]'>
                    <button className='text-Medium+/Label/Large-Strong px-[1.5rem] py-[1rem] rounded-lg bg-Foundation/primary/primary-6 text-[white]'>
                        View all
                    </button>
                </div>
            </div>

            <div>
            <div className='text-Medium+/Title/Large mt-[7.5rem] mb-[5rem] text-center title capitalize'>best selling cakes</div>
                <div className='flex gap-x-[2rem] justify-evenly items-center'>
                    <div className='bg-Foundation/primary/primary-2 rounded-[5px]'>
                        <div className='relative'>
                            <img src={americanHeritage1 } alt="" />
                            <div className='absolute flex items-center justify-center right-0 top-0 w-[4rem] h-[4rem] bg-Foundation/primary/primary-4 rounded-bl-[30px] rounded-tr-[5px]'>
                                <img src={wishlist} alt="" />
                            </div>
                            <div className='absolute h-[1rem] w-[1rem] flex gap-x-1 items-center justify-between bottom-2 right-8'>
                                <img src={star} alt="" />
                                <div>4.8</div>
                            </div>
                        </div>
                        <div className='p-[1rem]'>
                            <span className='text-Medium+/Paragraph/Small-Strong capitalize'>American heritage chocolate</span><br/>
                            <span className='text-Medium+/Title/xSmall'>Rs. 300 per/kg</span>
                        </div>
                    </div>
                    <div className='bg-Foundation/primary/primary-2 rounded-[5px]'>
                        <div className='relative'>
                            <img src={americanHeritage2 } alt="" />
                            <div className='absolute flex items-center justify-center right-0 top-0 w-[4rem] h-[4rem] bg-Foundation/primary/primary-4 rounded-bl-[30px] rounded-tr-[5px]'>
                                <img src={wishlist} alt="" />
                            </div>
                            <div className='absolute h-[1rem] w-[1rem] flex gap-x-1 items-center justify-between bottom-2 right-8'>
                                <img src={star} alt="" />
                                <div>4.8</div>
                            </div>
                        </div>
                        <div className='p-[1rem]'>
                            <span className='text-Medium+/Paragraph/Small-Strong capitalize'>American heritage chocolate</span><br/>
                            <span className='text-Medium+/Title/xSmall'>Rs. 300 per/kg</span>
                        </div>
                    </div>
                    <div className='bg-Foundation/primary/primary-2 rounded-[5px]'>
                        <div className='relative'>
                            <img src={americanHeritage3 } alt="" />
                            <div className='absolute flex items-center justify-center right-0 top-0 w-[4rem] h-[4rem] bg-Foundation/primary/primary-4 rounded-bl-[30px] rounded-tr-[5px]'>
                                <img src={wishlist} alt="" />
                            </div>
                            <div className='absolute h-[1rem] w-[1rem] flex gap-x-1 items-center justify-between bottom-2 right-8'>
                                <img src={star} alt="" />
                                <div>4.8</div>
                            </div>
                        </div>
                        <div className='p-[1rem]'>
                            <span className='text-Medium+/Paragraph/Small-Strong capitalize'>American heritage chocolate</span><br/>
                            <span className='text-Medium+/Title/xSmall'>Rs. 300 per/kg</span>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-[5rem] mb-[9rem]'>
                    <button className='text-Medium+/Label/Large-Strong px-[1.5rem] py-[1rem] rounded-lg bg-Foundation/primary/primary-6 text-[white]'>
                        See More
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Category