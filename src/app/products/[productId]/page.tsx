// Trong file pages/products.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/models/Products'; // Đảm bảo đường dẫn đúng
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ProductId = ({params}:{params:{productId:string}}) => {
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
    
    <div className='flex justify-center'>
        <div>
  
        </div>
{product &&<Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
            <Image width={150} height={150} src={product.pictureUrl} alt={product.name} />
            <Button>Chi tiết</Button>
            </CardContent>
            <CardFooter>
             
            </CardFooter>
          </Card>}

      
    </div>
  );
};

export default ProductId;
