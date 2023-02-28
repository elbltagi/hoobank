import React from 'react'
import Button from '../Button'

export default function Start() {
  return (
    <div className='flex p-16 max-lg:p-8 liner justify-evenly items-center max-lg:flex-col rounded-2xl mt-10'>
        <div className='text-start flex flex-col gap-3'>
            <h1>Let’s try our service now!</h1>
            <p className='w-3/5 max-lg:w-full text-[#ffffff7a]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <Button/>
    </div>
  )
}
