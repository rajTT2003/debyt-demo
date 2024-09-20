import React from 'react'
import Phone from '/images/Phone.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className='md:flex block  background md:h-[100vh] h-auto ' >
        <div className='md:w-2/3 w-full h-auto '>
            <div className='w-full h-auto flex justify-center items-center md:mt-10 mt-0  md:px-4 px-1 pt-28 m-0 '>
              <h4 className='font-extrabold text-white md:text-6xl text-4xl md:pl-10 pl-5'>The future of finance. Enter Greatness with Debyt</h4>
            </div>
            <div className=' flex  md:mt-10 mt-2 md:px-4 px-1'><p className=' md:pl-10 pl-5 font-bold text-white md:text-2xl text-md italic'>The only way you will want to send money</p></div>
            <div className='flex  md:mt-10 mt-0 md:px-4 px-1'><p className='md:pl-10 pl-5 font-semibold text-white/50 md:text-sm text-xs '>
            Debyt is a versatile financial services platform that allows you to easily send money to friends and family, even if they bank with a different provider.
               Funds go directly into your bank account, making transactions seamless and convenient. While Debyt isn’t a bank, it partners with trusted institutions to provide secure services. 
              With Debyt, you can manage your money effortlessly, and it's integrated into many banking apps for added convenience.
              </p></div>
        </div>
        <div className='md:w-1/3 w-full md:h-full h-auto flex  justify-center md:items-center md:pt-0 pt-5    '>
          <img src={Phone}  className='md:w-64 w-48  '/>
        </div>
    </div>
  )
}

export default Banner


/* Switch, Safe, Send , Send */