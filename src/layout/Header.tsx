"use client";
import React, { useEffect, useState } from "react";
import image from "@/images/shopping-bag.svg";
import logo from "@/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileAccount from "@/components/ProfileAccount";
import { Input } from "@/components/ui/input";
import Marquee from "react-fast-marquee";
import flagIconVietNam from "@/images/flag-vietnam.svg";
import flagIconEngLish from "@/images/th-4x3.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useStore from "@/store/store";
import useStoreAccount from "@/store/storeAccount";
// Định nghĩa kiểu dữ liệu cho props (nếu có)
interface HeaderProps {
  // Nếu component không nhận bất kỳ prop nào, bạn có thể để trống {}
}
const gridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  // Thêm các thuộc tính CSS khác tùy ý
};

const Header: React.FC<HeaderProps> = () => {
  const { fix, setFix,setScrollY } = useStore();
  const {setPopupLogin,setIsRegister} = useStoreAccount();
  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 70) {
        setFix(true);
        setScrollY(window.scrollY);
      } else {
        setFix(false);
      }
    }
  
    window.addEventListener('scroll', setFixed);

    return () => {
      
      // Đảm bảo loại bỏ sự kiện khi component unmount
      window.removeEventListener('scroll', setFixed);
    };
  }, [setFix]);
  const showFormRegister = ()=>{
    setIsRegister(true)
    setPopupLogin(true)
  }
  return (
    <div className={`${fix ? `header_scroll_down` : ``}`}>
      <div style={gridStyles} className="bg-[#111111] text-white px-5">
        <div className="flex py-2">
          <a className="px-2">+84 965873417</a>
          <a className="px-2">vansifpts@gmail.com</a>
        </div>
        <div className="flex w-3/4 m-0 mx-auto">
          <Marquee className="">
            Đăng kí tài khoản để nhận mã giảm giá 10% cho đơn hàng đầu tiên:
            <span className=" !text-white text-bold p-2 h-[30px] cursor-pointer underline" onClick={showFormRegister}>
              Đăng ký
            </span>
          </Marquee>
        </div>

        <div className="flex justify-end">
          <div className="pt-1.5">
            <Popover>
              <PopoverTrigger className="flex">
                <Image width={25} src={flagIconVietNam} alt="Viet Nam"></Image>{" "}
                <span className="pl-2 pt-0.5"> Việt Nam</span>
              </PopoverTrigger>
              <PopoverContent className="p-2 w-full">
                <div className="flex py-1">
                  <Image
                    width={25}
                    src={flagIconVietNam}
                    alt="Viet Nam"
                  ></Image>{" "}
                  <span className="pl-2 pt-0.5"> VietNamese</span>
                </div>
                <div className="flex py-1">
                  <Image
                    width={25}
                    src={flagIconEngLish}
                    alt="Viet Nam"
                  ></Image>
                  <span className="pl-2 pt-0.5"> English</span>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div
        className={`${
          fix ? `fixed top-0` : ``
        } flex justify-center z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75`}
        style={{ boxShadow: "inset 0 -1px 0 0 #eaeaea" }}
      >
        <div style={gridStyles} className="p-3 px-10">
          <div>
            <Link href={"/"}>
              <Image src={logo} width={36} height={36} alt="pic" />
            </Link>
          </div>
          <ul className="flex text-[#000] justify-center text-sx uppercase pt-2">
            <Link href={"/"} className="px-3.5">
              Trang chủ
            </Link>
            <Link href={"/products"} className="px-3.5">
              Sản phẩm
            </Link>

            <Link href={"/"} className="relative px-3.5">
              <span>SALE</span>
              <span className="absolute top-[-16px] left-[35px] bg-[#d0473e] text-white text-[10px] px-2  icon__hot rounded-sm">
                Hot
              </span>
            </Link>
            <Link href={"/"} className="px-3.5">
              Facebook
            </Link>
            <Link href={"/"} className="px-3.5">
              Shopee
            </Link>
          </ul>
          <div className="flex">
            <Input className="rounded-3xl h-9" placeholder="Tìm kiếm" />
            <ProfileAccount />

            <Sheet>
              <SheetTrigger className="h-[20px] pt-1.5 px-1.5">
                {" "}
                <Image
                  src={image}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
