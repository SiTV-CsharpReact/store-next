'use client'
import React, { useEffect } from 'react'
import { toast } from 'sonner';
import image from '@/images/products/e1 (1).jpg'
import Image from 'next/image'
const ListProduct = () => {
  const createToast = () => {
    toast("", {
      description:  <div className='flex'><Image src={image} height={80} width={60} alt='oke' className='rounded'></Image><div className='pl-2 font-bold text-base'>Đã được thêm vào giỏ hàng</div></div>,
      action: {
        label: "x",
        onClick: () => console.log("Undo"),
      },
      style:{
        padding:8
      }
    });
  };

  useEffect(() => {
    // Thiết lập interval để gọi hàm tạo toast mỗi 2 giây
    const intervalId = setInterval(createToast, 100000);

    // Clean up để dừng việc tạo toast khi component bị unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>ListProduct</div>
  )
}

export default ListProduct