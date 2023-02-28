import React from 'react'
import { quotes } from '../../assets'

export default function ReviewCard({text,image,name,job_title}) {
  return (
    <div className=' max-lg:w-5/6 text-start transition-all duration-200 cursor-pointer Review-card rounded-2xl w-1/3 flex flex-col p-5 py-11 gap-12 justify-between'>
        <img className='w-12' src={quotes} />
        <p>{text}</p>
        <div className='flex text-start gap-5'>
            <img className='w-12' src={image} alt="" />
            <div>
                <p>{name}</p>
                <p className='text-[#575757]'>{job_title}</p>
            </div>
        </div>
    </div>
  )
}
