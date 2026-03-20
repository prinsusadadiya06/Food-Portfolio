import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactImg from '../img/contact.avif'

const Contact = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Contact Section */}
            <div className='max-w-[1370px] mx-auto pt-[80px]  sm:px-0'>

                <div className='flex flex-col sm:flex-row'>

                    {/* Image */}
                    <img 
                        src={ContactImg} 
                        alt="" 
                        className='w-full sm:w-1/2 object-cover'
                    />

                    {/* Form Section */}
                    <div className='bg-gray-200 w-full sm:w-1/2 p-6 sm:p-10'>

                        <h1 className='text-[28px] sm:text-[40px] logo text-[rgb(48,49,49)]'>
                            GET IN TOUCH
                        </h1>

                        <p className='mt-4 text-[14px] sm:text-[16px] text-[rgb(48,49,49)]'>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>

                        <p className='mt-2 text-[14px] sm:text-[16px] text-[rgb(48,49,49)]'>
                            Tel: 123-456-7890 | Email: info@mysite.com
                        </p>

                        {/* Form Inputs */}
                        <div className='mt-6 space-y-4'>

                            <div>
                                <label>First name*</label>
                                <input type="text" className='border w-full py-2 mt-1 px-2' />
                            </div>

                            <div>
                                <label>Last name*</label>
                                <input type="text" className='border w-full py-2 mt-1 px-2' />
                            </div>

                            <div>
                                <label>Email*</label>
                                <input type="text" className='border w-full py-2 mt-1 px-2' />
                            </div>

                            <div>
                                <label>Subject*</label>
                                <input type="text" className='border w-full py-2 mt-1 px-2' />
                            </div>

                            <div>
                                <label>Message*</label>
                                <textarea className='border w-full py-2 mt-1 px-2 h-[120px]'></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full sm:w-auto px-8 py-2 bg-gray-800 text-white hover:bg-black">
                                Submit
                            </button>

                        </div>

                        {/* Newsletter */}
                        <div className='mt-8'>
                            <p className='text-[16px] text-[rgb(48,49,49)]'>
                                Stay Up-To-Date with New Posts
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 mt-3">
                                <input type="text" className='border w-full sm:w-[200px] py-2 px-2' />

                                <button className="px-6 py-2 bg-gray-800 text-white hover:bg-black">
                                    Subscribe Now
                                </button>
                            </div>

                            <div className='mt-3 flex items-center'>
                                <input type="checkbox" />
                                <span className='ms-3 text-sm'>
                                    yes, subscribe me to your newsletter.*
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Contact