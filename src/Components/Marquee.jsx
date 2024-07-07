import React from 'react'
import { motion } from "framer-motion";

function Marquee({imageurl, direction}) {
    

  return (
    <div className='w-full flex py-5 justify-between'>
        <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imageurl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee