import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 py-4 border-zinc-700 border-t-[1px] border-b-[1px] border-r-[1px]  flex justify-between'>
      <img src={val.url} className='' alt="" />
      <span className='pl'>{val.number}</span>
    </div>
  )
}

export default Stripe