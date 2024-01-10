"use client"

import { CardHeader, CardTitle, CardDescription, CardContent, Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import slide from '../../public/background.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
async function getDatasss() {
  const res = await fetch(
    "https://localhost:7067/api/Products"
  );
  console.log(res,"Product testsss");
  return res.json();
}
export default function Home() {
 
  // useEffect(() => {
  //   fetchData();
  // }, []); // Gọi fetchData khi component được mount

  return (
   
   <div className='grid gap-3 grid-cols-5 grid-rows-4'>
      {/* {dataProduct.map((product: any) => (
                <Card key={product.id} className="bg-[#f7f7f7] my-1">
                  <CardHeader>
                    <CardTitle className="flex justify-center">
                      {" "}
                      <Avatar className="h-[100px] w-[100px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </CardTitle>
                    <CardTitle className="flex justify-center text-base">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>
                      Thêm vào giỏ hàng
                    </Button>
                    <Button>
                      Chi tiết
                    </Button>
                  </CardContent>
                </Card>
              ))} */}
    {/* <Image
    src={slide}
    alt="oke"
    >

    </Image> */}
  
   </div>
     
  )
}
