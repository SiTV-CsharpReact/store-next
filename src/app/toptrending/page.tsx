import Image from 'next/image'
import React from 'react'
import imageTopTrending from'@/images/products/e1.jpg'
const TopTrending = () => {
    
  return (
    <div className=' flex justify-center '>
        <div>
        <div className='py-8 text-center text-black'>
        <h2 className='text-4xl'>Danh mục yêu thích</h2>
        <h5 className='text-[#55555] pt-2'>Sản phẩm của chúng tôi được thiết kế dành cho tất cả mọi người, thân thiện với môi trường.</h5>
        </div>
        
        <div className='list__product w-[1440px]' >
            <div className='grid gap-7 grid-cols-4 grid-rows-2 px-4'>
                <Image src={imageTopTrending} alt='oke' className='rounded-2xl'></Image>
                <Image src={imageTopTrending} alt='oke' className='rounded-2xl'></Image>
                <Image src={imageTopTrending} alt='oke' className='rounded-2xl'></Image>
                <Image src={imageTopTrending} alt='oke' className='rounded-2xl'></Image>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopTrending