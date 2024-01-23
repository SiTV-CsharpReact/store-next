// Trong file pages/products.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '../models/Products'; // Đảm bảo đường dẫn đúng
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Sử dụng kiểu dữ liệu Product[]

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://localhost:2210/api/Products');
      const data: Product[] = await res.json(); // Sử dụng kiểu dữ liệu Product[]
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className='flex justify-center'>

      <div className='grid gap-3 grid-cols-4 grid-rows-4 w-[1200px]'>
        {products.map(product => (
            <Card key={product.Id}>
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
          </Card>
        //   <li key={product.id}>
        //     <h2>{product.name}</h2>
        //     <p>{product.description}</p>
        //     <p>Giá: ${product.price}</p>
        //     <img src={product.pictureUrl} alt={product.name} />
        //   </li>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
