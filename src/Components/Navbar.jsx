import Button from './Button'
import React from 'react'


function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto flex py-3 px-2 border-b-[1px] border-zinc-700'>
        <img className="pr-5" src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg" alt="" />
        <div className='links flex items-center gap-6 ml-12 ' >
            {["Home", "Work", "About", "News", "Career"].map((elem, i)=>(<a className='p-2 text-sm flex items-center gap-0.5' href="#" >
                {i==3 && (<span style={{boxShadow:"0 0 0.25em #00FF19"}} className='inline-block h-1 w-1 bg-green-500 rounded-full'></span>)} 
                {elem}</a>))}
                
        </div>
        <div className='ml-[48%] p-0'>
          <Button />
        </div>
    </div> 
  )
}

export default Navbar