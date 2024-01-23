// Trong file pages/products.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/models/Products'; // Đảm bảo đường dẫn đúng
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import fashion from '@/images/fashion.webp';
import fashion1 from '@/images/fashion1.webp';
import fashion2 from '@/images/fashion2.webp';
import fashion3 from '@/images/fashion3.webp';
import './style.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductId = ({params}:{params:{productId:string}}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log(params.productId)
  const [product, setProduct] = useState<Product>(); // Sử dụng kiểu dữ liệu Product[]
  const router = useRouter();
 
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://localhost:2210/api/Products/${params.productId}`);
      const data: Product = await res.json(); // Sử dụng kiểu dữ liệu Product[]
      setProduct(data);
    };

    fetchProducts();
  }, []);
  console.log(router)
  return (
    
    <div className='flex'>
        <div>
  
        </div>
{product &&<Card key={product.Id}>
            <CardHeader>
              <CardTitle>{product.Name}</CardTitle>
              <CardDescription>{product.Description}</CardDescription>
            </CardHeader>
            <CardContent>
            <Image width={150} height={150} src={product.PictureUrl} alt={product.Name} />
            <Button>Chi tiết</Button>
            </CardContent>
            <CardFooter>
             
            </CardFooter>
          </Card>}
<div className='flex'>
{/* <Swiper 
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper "
      >
        <SwiperSlide className='sliders'>
        <Image width={150} height={150} src={fashion} alt="oke" />
        </SwiperSlide>
        <SwiperSlide className='sliders'>
        <Image width={150} height={150} src={fashion1} alt="oke" />
        </SwiperSlide>
        <SwiperSlide className='sliders'>
        <Image width={150} height={150} src={fashion2} alt="oke" />
        </SwiperSlide>
        <SwiperSlide className='sliders'>
        <Image width={150} height={150} src={fashion3} alt="oke" />
        </SwiperSlide>
     
      </Swiper >
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          'width': '400px !important',
        }}
        width={400}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
        <Image width={150} height={150} src={fashion} alt="oke" />
        </SwiperSlide>
        <SwiperSlide>
        <Image width={150} height={150} src={fashion1} alt="oke" />
        </SwiperSlide>
        <SwiperSlide>
        <Image width={150} height={150} src={fashion2} alt="oke" />
        </SwiperSlide>
        <SwiperSlide>
        <Image width={150} height={150} src={fashion3} alt="oke" />
        </SwiperSlide>
     
      </Swiper> */}
      
      </div>
    </div>
  );
};

export default ProductId;
