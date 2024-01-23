// Trong file pages/products.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { Product } from '../../models/Products'; // Đảm bảo đường dẫn đúng
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ProductParams } from '@/models/ProductParams';
import { Input } from '@/components/ui/input';
import AppPagination from '@/components/AppPagination';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Sử dụng kiểu dữ liệu Product[]
  const [productParams, setProductParams] = useState<ProductParams>({
    OrderBy: '',
    SearchTerm:'',
  });
  const [pagination,setPagination] = useState();
  const fetchProducts = async () => {
    const res = await fetch(`https://localhost:2210/api/Products?Orderby=${productParams?.OrderBy}&SearchTerm=${productParams?.SearchTerm}`);
    const data: Product[] = await res.json(); // Sử dụng kiểu dữ liệu Product[]
    setProducts(data);
     // Lấy giá trị từ header 'Pagination'
  const paginationHeader = res.headers.get('Pagination');
    if (paginationHeader) {
    const pagination = JSON.parse(paginationHeader);
    // Thực hiện các hành động với dữ liệu phân trang ở đây
    
  }
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      // Thực hiện cuộc gọi API ở đây
      fetchProducts();
    }, 200); // Debouncing 200ms

    return () => clearTimeout(timerId);
  }, [productParams]);
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(e)
 
  };
  const handleSelectChange =(value:string) =>{
    setProductParams(prevParams => ({
      ...prevParams,
      OrderBy: value
    }));
  }
  return (
    <div className='flex justify-center pt-5'>
    <div className='w-[1200px]'>

<div className='flex'>
<div className='w-1/4 pr-4'>
<Card className='p-3'>
<Input value={productParams.SearchTerm} className='my-2'  placeholder='Tìm kiếm...' onChange={(e) => setProductParams(prevParams => ({
      ...prevParams,
      SearchTerm: e.target.value
    }))}/>
<div className='flex justify-end py-4'>
<Select onValueChange={handleSelectChange}> 
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Giá - Cao đến thấp" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="priceDesc">Giá - Cao đến thấp</SelectItem>
    <SelectItem value="price">Giá - Thấp đến cao</SelectItem>
   
  </SelectContent>
</Select>
</div>



</Card>
</div>
      <div className='grid gap-3 grid-cols-3 grid-rows-2 w-3/4'>
        {products.map(product => (
            <Card key={product.Id}>
            <CardHeader>
            <Image width={150} height={100} src={product.PictureUrl} alt={product.Name} />
              <CardTitle className='text-base'>{product.Name}</CardTitle>
              <CardDescription>{product.Price}</CardDescription>
            </CardHeader>
            <CardContent>
          
            <Button>
            <Link href={`/products/${product.Id}`} >Chi tiết</Link>
              </Button>
            </CardContent>
            <CardFooter>
             
            </CardFooter>
          </Card>
        ))}
      </div>
    
    </div>
    <AppPagination/>
 
    </div>
    
    </div>
  );
};

export default Products;
