import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { data } from './Portfoliodata'
import { Link } from 'react-router-dom'



const Portfolio = () => {
  return (
    <>
      {/* navbar  */}
      <Navbar />

      {/* portfolio */}

      <div className='logo md:text-[40px] text-2xl  pb-[20px] text-center pt-[100px]'>PORTFOLIO</div>

      <div className="max-w-[1440px] mx-auto sm:flex gap-2">
        {data.map((v, i) => {
          return (

            <div className=" w-full">
              <div className='flex justify-center pb-[35px] relative '>
                <Link to={`/Editorial/${v.id}`}>
                  <img src={v.url} className='relative' alt="" />
                </Link>
                <p className='text-white absolute logo md:text-[40px] text-2xl pt-[50px] sm:block hidden'>{v.title}</p>
              </div>
              <p className='text-black text-center logo md:text-[40px] text-2xl pb-[30px]  sm:hidden block'>{v.title}</p>
            </div>
          )
        })}
      </div >


      {/* footer  */}
      < Footer />
    </>
  )
}

export default Portfolio
