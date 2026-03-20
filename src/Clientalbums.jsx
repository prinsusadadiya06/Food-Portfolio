import React from 'react'
import Navbar from './Navbar'
import { clientdata } from './Clientalbumdata'

const Clientalbums = () => {
    return (
        <>
            {/* navbar  */}
            <Navbar />

            <div className="container-fluid pt-[100px]">
                <h1 className='logo md:text-[40px] text-2xl text-center'>CLIENT ALBUMS</h1>
            </div>
            <div className="max-w-[1370px] mx-auto sm:flex gap-2">
                {clientdata.map((v, i) => {
                    return (
                        <div className='flex pt-[30px] gap-2 justify-center container mx-auto sm:pb-[35px] relative transform transition duration-500 md:hover:scale-98'>
                            <img src={v.url}  className='px-2 w-[100%]' alt="" />
                            <p className='logo sm:text-[45px] text-[55px] absolute text-white pt-[150px]  text-center'>{v.title}</p>
                            <p className='absolute text-white pt-[280px] text-[20px] '>{v.client}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Clientalbums
