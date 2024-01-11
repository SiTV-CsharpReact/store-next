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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ProductParams } from '@/models/ProductParams';
import { Input } from '@/components/ui/input';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Sử dụng kiểu dữ liệu Product[]
  const [productParams, setProductParams] = useState<ProductParams>({
    OrderBy: '',
    SearchTerm:'',
  });
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://localhost:2210/api/Products?Orderby=${productParams?.OrderBy}&SearchTerm=${productParams?.SearchTerm}`);
      const data: Product[] = await res.json(); // Sử dụng kiểu dữ liệu Product[]
      setProducts(data);
    };

    fetchProducts();
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
    <div className='flex justify-center'>
    <div className='w-[1200px]'>
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
<div className='flex'>
<div className='w-1/4 pr-4'>
<Card className='p-3'>
<Input value={productParams.SearchTerm} className='my-2'  placeholder='Tìm kiếm...' onChange={(e) => setProductParams(prevParams => ({
      ...prevParams,
      SearchTerm: e.target.value
    }))}/>
<RadioGroup onChange={handleRadioChange} defaultValue="priceDesc">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="priceDesc" id="option-priceDesc" />
    <Label htmlFor="option-priceDesc">Giá - Cao đến thấp</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="price" id="option-price" />
    <Label htmlFor="option-price">Giá - Thấp đến cao</Label>
  </div>
</RadioGroup>

</Card>
</div>
      <div className='grid gap-3 grid-cols-3 grid-rows-2 w-3/4'>
        {products.map(product => (
            <Card key={product.id}>
            <CardHeader>
            <Image width={250} height={150} src={product.pictureUrl} alt={product.name} />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.price}</CardDescription>
            </CardHeader>
            <CardContent>
          
            <Button>
            <Link href={`/products/${product.id}`} >Chi tiết</Link>
              </Button>
            </CardContent>
            <CardFooter>
             
            </CardFooter>
          </Card>
        ))}
      </div>
    
    </div>
    <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
    </div>
    
    </div>
  );
};

export default Products;
