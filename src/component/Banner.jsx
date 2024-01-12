import React from 'react'
import Typed from 'react-typed';
function Banner() {
  return (
    <div className='bg-[#2699fb] py-[100px]'>
             <div className='max-w-[1240px] mx-auto text-center'>
                <div className='font-bold text-xl   md:text-3xl md:py-4'>
                    Learn With Us
                </div>
                <h2 className='text-white font-bold text-3xl p-1 md:text-5xl md:py-4'>Grow With Us</h2>
                <div className='text-white font-bold text-2xl p-1 md:text-4xl  md:py-4 '>
                    Learn
                    <Typed className='px-2'
                    strings={['Web Development','Data Structure','Java Development']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                    />
                </div>
                <button className='bg-black text-white font-bold rounded  w-[150px] h-[40px]  mt-[20px]'>Get Started</button>
             </div>
    </div>
  )
}

export default Banner
