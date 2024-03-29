
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/layout/Header'
import { cn } from "../lib/utils"
import { Toaster } from '@/components/ui/sonner'


export const metadata: Metadata = {
  title: 'Mô hình cao cấp',
  description: 'Generated by create next app',
}
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })
// export const fontSans = Jost({
//   subsets:['latin','cyrillic'],
//   variable: "--font-sans",
// })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    
    // <html lang="en" className={inter.className}>
    <html lang="en">
      <body 
       className={cn(
        "min-h-screen bg-background font-sans antialiased",
        // fontSans.variable
      )}
      >
       
      <Header/>
        
        {children}
        <Toaster />
        <div className="back-top fixed right-30 rounded box-shadow width-50 height-50 flex content-center z-5 pointer show">
    <span id="bls__back-top"> </span>
    <i className=" icon-chevrons-up fs-18 text-white"></i>
  </div>
        </body>
  
    </html>
  )
}
