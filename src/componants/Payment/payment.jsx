import React from 'react'
import { bill, google,apple } from '../../assets'

export default function Payment() {
  return (
    <section className='flex mt-28 gap-6 texts max-lg:flex-col-reverse max-lg:mt-5 '>
        <div className='w-1/2 bill max-lg:w-full relative z-50'>
            <img className='flex-1 texts w-full z-50' src={bill}/>
        </div>
        <div className=" flex-1 text-white items-start justify-start text-start gap-8 flex flex-col">
            <h1 className='font-semibold'>Easily control your billing & invoicing.</h1>
            <p className='text-[#FFFFFFB2] font-normal'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='flex mt-5 gap-6'>
                <img className='hover:scale-125 cursor-pointer transition-all' src={google} alt="" />
                <img className='hover:scale-125 cursor-pointer transition-all' src={apple} alt="" />
            </div>
        </div>
    </section>
  )
}