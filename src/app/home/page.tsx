'use client'
import Slide from '@/layout/Slide'
import TopTrending from '../toptrending/page'
import ListProduct from '@/layout/ListProduct'
import useStore from '@/store/store'
import arrowUP from '@/images/allArrow.svg'
import Image from 'next/image'
import IconMessenger from'@/images/messenger.svg'
const HomePage = () => {
 
    const { fix,scrollY,maxScrollY,setMaxScrollY } = useStore();
   
   console.log(scrollY, maxScrollY,scrollY/maxScrollY)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };  
  return (
    <>
    <Slide/>
   <TopTrending/>
    <ListProduct/>
   <div className={`shadow-md btn-fixed ${fix? `show`:``} `}> 
   <div className='content-fixed'>
   <Image width={30} src={IconMessenger} alt='scroll' className='centered-element z-10'></Image>
   </div>

   </div>
    <div className={ `back-top ${fix? `show`:``} fixed flex bottom-7 right-7 rounded-[50%] h-11 w-11 justify-center shadow-md cursor-pointer`} onClick={scrollToTop}>
    <span id="bls__back-top" style={{height:scrollY/maxScrollY*100 +"%"}}></span>
     <Image width={22} src={arrowUP} alt='scroll' className='centered-element z-10'></Image>
   </div>
    
    </>
  )
}

export default HomePage