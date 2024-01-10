'use client'
import React, { useEffect, useState } from 'react';
import image from '../../public/shopping-bag.svg'
import logo from '../../public/logo.svg'
import user from '../../public/user.svg'
import google from '../../public/google.svg'
import facebook from '../../public/facebook.svg'
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import * as z from "zod"
import ProfileAccount from '@/components/ProfileAccount';
// Định nghĩa kiểu dữ liệu cho props (nếu có)
interface HeaderProps {
  // Nếu component không nhận bất kỳ prop nào, bạn có thể để trống {}
}

const Header: React.FC<HeaderProps> = () => {
  
  return (
    <div className='flex justify-center sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75' style={{ boxShadow: 'inset 0 -1px 0 0 #eaeaea' }}>

    <div className="flex justify-between w-full p-3 px-10">
      <div>
      <Image
      src={logo}
      width={36} 
      height={36}
      alt="pic"
       />
      </div>
      <ul className='inline-grid grid-cols-6 gap-7 text-[#323232] font-medium justify-center text-sx uppercase pt-2.5'>
        <Link href={"/"}>
          Sản phẩm
        </Link>
        <Link href={"/dashboard"}>
          Thông tin
        </Link>
        <Link href={"/"}>
          Sản phẩm
        </Link>
        <Link href={"/dashboard"}>
          Thông tin
        </Link>
        <Link href={"/"}>
        Facebook
        </Link>
        <Link href={"/dashboard"}>
        Shopee
        </Link>
      </ul>
      <div className='grid gap-2 grid-cols-2 pt-2'>
    <ProfileAccount/>
     
      
     
<Sheet >
<SheetTrigger className="h-[20px]"> <Image
      src={image}
      width={20}
      height={20}
      alt="Picture of the author"
       /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>


      </div>
    </div>
    </div>
  );
}

export default Header;