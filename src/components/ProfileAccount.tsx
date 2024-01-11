import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "./ui/form";
import { Input } from "./ui/input";

import user from "../../public/user.svg";
import google from "../../public/google.svg";
import facebook from "../../public/facebook.svg";
import { toast } from "sonner";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn, useSession } from 'next-auth/react';
const formSchema = z.object({
  username: z.string(),
  password: z.string().min(3),
});
const ProfileAccount = () => {
  const { data: session } = useSession();
  const handleLogin = async (credentials:any) => {
    await signIn('credentials', { ...credentials, redirect: false });
  };
  const [loadingButton, setLoadingButton] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false); // Thêm state để theo dõi trạng thái của Dialog
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleDialogOpen = () => {
    setDialogVisible(true);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
  };
  // const verifyLogin = async (values: z.infer<typeof formSchema>) => {
  //   handleLogin(values);
  //   setLoadingButton(true);
  //   // Đường dẫn API của bạn
  //   const apiUrl = "https://localhost:2210/api/Account/Login"; // Thay thế đường dẫn này bằng đường dẫn thực tế của bạn

  //   // Thực hiện cuộc gọi POST
  //   const response = await fetch(apiUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // Các headers khác nếu cần thiết
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   // Kiểm tra trạng thái của cuộc gọi
  //   if (response.ok) {
  //     setTimeout(() => {
  //       setLoadingButton(false);
  //       toast("Đăng nhập thành công");
  //       setDialogVisible(false);
  //     }, 1000);
  //     // setLoadingButton(false);
  //     const responseData = await response.json();
  //     if (responseData) {
  //       if (responseData.token) {
  //         localStorage.setItem("user", JSON.stringify(responseData));
  //       }
  //     }
  //     console.log("Dữ liệu trả về:", responseData);
  //     // Xử lý các hành động sau khi gửi dữ liệu thành công
  //   } else {
  //     console.error("Lỗi khi gửi dữ liệu:", response.statusText);
  //     // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi cho người dùng
  //   }
  // };
  const verifyLogin = async (values: z.infer<typeof formSchema>) => {
  
    setLoadingButton(true);
  
    const result = await signIn('credentials', {
      redirect: false,
      username: values.username,
      password: values.password,
    });
 
    if (result?.error) {
      // Xử lý lỗi
      console.error("Lỗi khi đăng nhập:", result.error);
      // Hiển thị thông báo lỗi
    } 
    // else {
    //   // Đăng nhập thành công
    //   toast("Đăng nhập thành công");
    //   setDialogVisible(false);
    //   console.log("Đăng nhập thành công");
    //   // Xử lý các hành động sau khi đăng nhập thành công
    // }
  
    setLoadingButton(false);
  };
  return (
    <Dialog open={isDialogVisible} onOpenChange={setDialogVisible}>
      <DialogTrigger onClick={handleDialogOpen} className="h-[20px]">
        <Image src={user} width={20} height={20} alt="Picture of the author" />
      </DialogTrigger>
      <DialogContent className="pt-10 w-[unset] rounded-md">
        <DialogClose  className="w-[25px] h-[25px] absolute right-0 mr-[5px] px-3 mt-1.5" onClick={handleDialogClose}></DialogClose>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="data-[state=active]:bg-background w-[400px]">
            <TabsTrigger value="account" className="w-[200px]">
              Đăng nhập
            </TabsTrigger>
            <TabsTrigger value="password" className="w-[200px]">
              Đăng kí
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(verifyLogin)}
                  className="space-y-6 pt-2"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Tài khoản</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email address"
                              type="input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Mật khẩu</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <Button type="submit" disabled={loadingButton}>
                    {loadingButton ? "Đang xử lý..." : "Đăng nhập"}
                  </Button>
                </form>
                <FormDescription className="pt-2">
                  hoặc đăng nhập bằng
                </FormDescription>
              </Form>
            </DialogHeader>
          </TabsContent>
          <TabsContent value="password">
            <DialogHeader>
              <Form {...form}>
          
                <form
                  onSubmit={form.handleSubmit(verifyLogin)}
                  className="space-y-6 pt-2"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Tài khoản</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email address"
                              type="input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Email hoặc Số điện thoại</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
               <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Mật khẩu</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <Button type="submit" disabled={loadingButton}>
                    {loadingButton ? "Đang xử lý..." : "Đăng kí"}
                  </Button>
                </form>
              </Form>
            </DialogHeader>
          </TabsContent>
        </Tabs>
        <DialogFooter className="ju">
          <div className="flex justify-center">
            <Button className="bg-white border border-input text-black w-[130px] mx-1">
              <Image
                src={google}
                width={20}
                height={20}
                className="mr-1"
                alt="Picture of the author"
              />
              Google{" "}
            </Button>
            <Button className="bg-white border border-input text-black w-[130px] mx-1">
              <Image
                src={facebook}
                width={22}
                height={22}
                className="mr-1"
                alt="Picture of the author"
              />{" "}
              Facebook{" "}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileAccount;
