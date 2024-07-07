import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card({width, start, para, hover='false'}) {

  return (
    <motion.div 
      whileHover={{
        backgroundColor: hover == "true" && '"#7443ff"',
        padding: "25px",
      }}
      className= {`w-1/2 bg-zinc-800 flex hover:${hover} flex-col justify-between p-5 rounded-lg min-h-[27rem] ${width}`}>
      <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
          <h3>Heading 1</h3>
          <FaArrowRightLong size={12}/>
        </div>
        <h1 className='text-2xl font-medium mt-6'>Heading 2</h1>
      </div>
      <div>
        {start && (
          <>
            <h1 className='text-7xl leading-none font-semibold tracking-tight'>Start a Project</h1>
            <button className='rounded-full border-[1.5px] text-white font-medium border-zinc-400 py-1 px-2 mt-3'>Contact Us</button>
          </>
        )}
        {para && (
          <p className='text-sm  text-zinc-400'>Paragraph</p>
        )}
        
      </div>
    </motion.div>
  )
}

export default Card