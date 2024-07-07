import React from 'react'
import { PiArrowElbowDownRightBold } from "react-icons/pi";

function Button({title= 'Get Started'}) {
  return (
    <div className='bg-white rounded-full w-[9vw] h-[2vw]  items-center justify-between flex'>
    <span className='text-slate-950 pl-[12%] font-medium flex items-center justify-center gap-4 tracking-normal'>{title} <PiArrowElbowDownRightBold size={12} className=''/></span>
    </div>
    
  )
}

export default Button