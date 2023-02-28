import React from 'react'

export default function Element({image,title,text}) {
  return (
    <div className='flex items-center justify-center  p-3 rounded-lg gap-3 hover:bg-gradient-to-tl hover:from-zinc-900 hover:to-slate-800 cursor-pointer'>
        <div className='star'>
          <img className='w-11' src={image} alt="" />
        </div>
        <div className='flex flex-col text-start gap-3'>
            <h1 className='text-xl'>{title}</h1>
            <p className='text-sm text-gray-600'>{text}</p>
        </div>
    </div>
  )
}
