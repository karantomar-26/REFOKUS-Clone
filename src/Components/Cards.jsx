import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full bg-zinc-950'>
        <div className='max-w-screen-lg mx-auto py-20 flex gap-2'>
            <Card width={"basis-2/5"} start={false}  para={true} />
            <Card width={"basis-3/5"} start={true}  para={false} hover={true} />
        </div>
    </div>
  )
}

export default Cards