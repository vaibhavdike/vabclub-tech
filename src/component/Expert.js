import React from 'react'
import laptop from "../assets/laptopnew.png"
function Expert() {
  return (
    <div className='max-w-[1000px] mx-auto h-[300px] md:grid grid-cols-2'>
        <div className="img grid-cols-1  m-4 flex items-center justify-center"> 
        <img src={laptop} alt="" className='w-[60%]' /></div>
        <div className="text grid-cols-1  m-4">
            <div className='text-[blue] font-bold text-xl p-2'>Learn From Experts?</div>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque pariatur nemo aperiam omnis placeat rerum natus, sint officia tenetur. Voluptas dolorum consequatur perferendis, perspiciatis ipsam, reprehenderit minima ratione eius esse eaque veniam voluptatem voluptatum.</p>
            <button className='bg-black text-white font-bold rounded  w-[150px] h-[40px]  m-2 '>Get Started</button>
        </div>
        
    </div>
  )
}

export default Expert
