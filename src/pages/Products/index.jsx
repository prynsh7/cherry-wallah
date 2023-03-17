import React from 'react'
import UserLayout from '../../components/User/Layout'
import cakeCat from '../../assets/images/category/cake-category.png'
import ProductCard from '../../components/ProductCard'

import chocolateCake from '../../assets/images/category/chocolate-cakes.png'
import Category from '../../components/Category'



const Products = () => {
    return (
        <UserLayout>
            <div>
                <h1>CAKES  (150 products) </h1>

                <hr />

                <div className='grid grid-cols-8 mt-[30px] auto-rows-auto gap-[2.5rem]'>

                    {
                        [...Array(8)].map((_, i) => (<Category item={
                            {
                                "name": "Cake",
                                "img": cakeCat
                            }
                        } />))

                    }

                </div>

                <div className="grid grid-cols-4 mt-[30px] auto-rows-auto gap-[2.5rem]">
                    {
                        [...Array(9)].map((_, i) => (<ProductCard product={{
                            "name": "Cake",
                            "price": "100",
                            "img": chocolateCake
                        }
                        } />))

                    }
                </div>


            </div>
        </UserLayout>
    )
}

export default Products