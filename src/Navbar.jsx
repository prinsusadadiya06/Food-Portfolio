import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="w-full fixed bg-white z-50 shadow-md">

        {/* Top bar */}
        <div className="max-w-[1370px] mx-auto flex justify-between items-center px-4 py-5">

          {/* Logo */}
          <h1 className="tracking-[0.2em] text-[22px] md:text-[26px] text-[rgb(48,49,49)]">
            J.ALLSSA
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-[rgb(48,49,49)]">
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/about'>About</Link>
            <Link to='/books'>Books</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/client'>Client Albums</Link>
            <Link to='/contact'>Contact</Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(true)}>
            ☰
          </div>

        </div>

        {/* Mobile Full Screen Menu */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md text-white flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-500
          ${open ? "translate-y-0" : "-translate-y-full"}`}>

          {/* Close button */}
          <div className="absolute top-6 right-6 text-3xl cursor-pointer" onClick={() => setOpen(false)}>
            ✖
          </div>

          <Link onClick={() => setOpen(false)} to='/'>Home</Link>
          <Link onClick={() => setOpen(false)} to='/portfolio'>Portfolio</Link>
          <Link onClick={() => setOpen(false)} to='/about'>About</Link>
          <Link onClick={() => setOpen(false)} to='/books'>Books</Link>
          <Link onClick={() => setOpen(false)} to='/blog'>Blog</Link>
          <Link onClick={() => setOpen(false)} to='/client'>Client Albums</Link>
          <Link onClick={() => setOpen(false)} to='/contact'>Contact</Link>

        </div>

      </div>
    </>
  )
}

export default Navbar