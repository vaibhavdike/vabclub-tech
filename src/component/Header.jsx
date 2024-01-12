import React, { useState } from 'react'
import { IoMdMenu,IoMdClose } from "react-icons/io";
function Header() {
    const [toggle,setToggle]=useState(true);
  return (
    <>

    <div className='bg-[#2699fb] py-5 '>
        <div className=' py-2 max-w-[1240px] mx-auto flex justify-between items-center'>
            <div className="heading">
            <h2 className='text-black text-3xl pl-[20px]'>VabClub Tech</h2>
            </div>

            {
                toggle ? <div className="icon md:hidden pr-[20px]">
                <IoMdMenu onClick={()=>{setToggle(!toggle)}} className='text-white text-3xl cursor-pointer hover:bg-gray-400'/>
            </div> :  <div className="icon md:hidden pr-[20px]">
                <IoMdClose onClick={()=>{setToggle(!toggle)}} className='text-white text-3xl cursor-pointer hover:bg-gray-400'/>
            </div>
            }
            
           
            <div className="navitem hidden md:flex pr-[20px]">
                <ul className='flex gap-7 text-white text-xl'>
                    <li className='cursor-pointer hover:text-gray-400'>Home</li>
                    <li className='cursor-pointer hover:text-gray-400'>Company</li>
                    <li className='cursor-pointer hover:text-gray-400'>Resources</li>
                    <li className='cursor-pointer hover:text-gray-400'>About</li>
                    <li className='cursor-pointer hover:text-gray-400'>contact</li>
                </ul>
            </div>

            {/* responsive  */}
           

        </div>
      

    </div>
    <div className="navitem  ">
                <ul className={` duration-300 text-white text-xl fixed  bg-black  w-[100%] h-screen  md:hidden ${toggle ? 'left-[-100%]' : 'left-0'} `}>
                    <li className='cursor-pointer mt-[15px] p-3  hover:text-gray-400'>Home</li>
                    <li className='cursor-pointer mt-[15px] p-3 hover:text-gray-400'>Company</li>
                    <li className='cursor-pointer mt-[15px] p-3 hover:text-gray-400'>Resources</li>
                    <li className='cursor-pointer mt-[15px] p-3 hover:text-gray-400'>About</li>
                    <li className='cursor-pointer mt-[15px] p-3 mb-[15px] hover:text-gray-400'>contact</li>
                </ul>
            </div>
    </>
  )
}

export default Header
