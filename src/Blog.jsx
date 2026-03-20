import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import User from '../img/usericon.png'
import { blog } from './Blogdata'

const Blog = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />

            <div className="container-fluid pt-[100px]">
                <h1 className='logo text-[40px] text-center pt-[20px]'>
                    MY BLOG
                </h1>
            </div>

            {blog.map((v, i) => {
                return (
                    <div 
                        key={i}
                        className="max-w-[1370px] mx-auto mt-[30px] bg-[rgb(240,243,246)] 
                                   px-4 sm:px-[130px] pb-[40px]"
                    >
                        <div className='flex flex-col sm:flex-row'>

                            {/* Image */}
                            <img 
                                src={v.url} 
                                className='w-full sm:w-[50%]' 
                                alt="" 
                            />

                            {/* Right Content */}
                            <div className="right bg-white relative w-full sm:w-[50%] p-4 sm:p-0">

                                <img 
                                    src={User} 
                                    className='w-[40px] sm:w-[10%] mt-4 sm:mt-7 ms-2 sm:ms-10 rounded-full' 
                                    alt="" 
                                />

                                <h1 className='ms-[60px] sm:ms-[100px] -mt-[30px] sm:-mt-[37px] text-[12px]'>
                                    {v.admin}
                                </h1>

                                <p className='ms-[60px] sm:ms-[100px] text-[12px]'>
                                    {v.date}
                                </p>

                                <h1 className='logo text-[20px] sm:text-[28px] ms-4 sm:ms-[47px] pt-[15px] pb-[8px] text-[rgb(48,49,49)]'>
                                    {v.title}
                                </h1>

                                <h5 className='ms-4 sm:ms-[47px] text-sm sm:text-base'>
                                    {v.detail}
                                </h5>

                                {/* Footer section */}
                                <div className='relative sm:absolute sm:bottom-0 sm:left-[30px] sm:right-[30px] mt-6 sm:mt-0'>
                                    <hr className='w-full' />
                                    <div className="flex justify-between w-full py-[20px]">
                                        <p>{v.views}</p>
                                        <p>❤️</p>   
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                )
            })}

            {/* footer */}
            <Footer />
        </>
    )
}

export default Blog