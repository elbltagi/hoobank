import React from 'react'

export default function Number({nubmer,text}) {
  return (
    <div className='inline-flex  relative items-center justify-center gap-3 '>
        <h1 className='font-Poppins text-3xl text-white '>{nubmer}</h1>
        <p className=' text-liner text-xl'>{text}</p>
        
    </div>
  )
}
