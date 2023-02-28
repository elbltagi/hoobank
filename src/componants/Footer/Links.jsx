import React from 'react'

export default function Links({title,elements}) {
  return (
    <div className='flex flex-col gap-3 '>
        <p className='font-medium text-lg'>{title}</p>
        <div className='text-[#ffffff7a] flex flex-col gap-1'>
            {elements.map(item=>{
                return <p className='cursor-pointer hover:text-white transition-all font-normal text-base'>{item}</p>
            })}
        </div>
    </div>
  )
}
