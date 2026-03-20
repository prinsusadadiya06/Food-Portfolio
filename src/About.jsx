import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Myimg from '../img/about.avif'

const About = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* about */}
      <div className='lg:flex max-w-[1370px] mx-auto pt-[100px]'>

        {/* Image */}
        <img src={Myimg} alt="" className='lg:w-[50%] w-full' />

        {/* Content */}
        <div className='bg-gray-200 lg:w-[50%] w-full lg:ps-[90px] ps-[25px] pe-[25px] pb-[70px]'>

          <h1 className='text-[40px] logo text-[rgb(48,49,49)] lg:pt-[125px] pt-[60px]'>
            ABOUT JADE
          </h1>

          <p className='lg:w-[410px] w-full text-[16px] text-[rgb(48,49,49)] mt-4'>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
          </p>

          <p className='lg:w-[410px] w-full text-[16px] text-[rgb(48,49,49)] pb-[40px] mt-4'>
            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.
          </p>

          <h2 className='text-[20px] text-[rgb(48,49,49)] pb-[7px]'>
            Education:
          </h2>

          <p className='lg:w-[410px] w-full text-[16px] text-[rgb(48,49,49)] pb-[40px]'>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>

          <h2 className='text-[20px] text-[rgb(48,49,49)] pb-3'>
            Awards & Nominations:
          </h2>

          <p className='lg:w-[410px] w-full text-[16px] text-[rgb(48,49,49)]'>
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>

        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default About