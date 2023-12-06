import React from 'react';
import image from '../../public/shopping-bag.svg'
import logo from '../../public/logo.svg'
import user from '../../public/user.svg'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';
// Định nghĩa kiểu dữ liệu cho props (nếu có)
interface HeaderProps {
  // Nếu component không nhận bất kỳ prop nào, bạn có thể để trống {}
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className='flex justify-center' style={{ boxShadow: 'inset 0 -1px 0 0 #eaeaea' }}>

    <div className="flex justify-between w-[1200px] p-3 ">
      <div>
      <Image
      src={logo}
      width={36} 
      height={36}
      alt="pic"
       />
      </div>
      <ul className='h-[40px] inline-grid grid-cols-3 gap-4  justify-center text-xl '>
        <Link href={"/"}>
          Sản phẩm
        </Link>
        <Link href={"/dashboard"}>
          Thông tin
        </Link>
       
      </ul>
      <div className='grid gap-2 grid-cols-2'>
      <Image
      src={user}
      width={24}
      height={24}
      alt="Picture of the author"
       />
      <Image
      src={image}
      width={24}
      height={24}
      alt="Picture of the author"
       />

      </div>
    </div>
    </div>
  );
}

export default Header;