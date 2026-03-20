import React from 'react'
import P from '../img/p.avif'
import Facebook from '../img/f.avif'
import Twitter from '../img/twitter.avif'
import Instgram from '../img/insta.avif'

const Footer = () => {
  return (
    <>
      <div className='container mx-auto px-4'>

        {/* icons */}
        <div className='flex items-center justify-center gap-6 pb-3.5 pt-[40px]'>
          <img className='w-[20px] cursor-pointer' src={P} alt="" />
          <img className='w-[20px] cursor-pointer' src={Facebook} alt="" />
          <img className='w-[20px] cursor-pointer' src={Twitter} alt="" />
          <img className='w-[20px] cursor-pointer' src={Instgram} alt="" />
        </div>

        {/* text */}
        <div className='text-center pb-[50px] text-[14px] sm:text-[16px]'>
          © 2035 by The Art of Food. Powered and secured by Wix
        </div>

      </div>
    </>
  )
}

export default Footer