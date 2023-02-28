import React from 'react'
import { card } from '../../assets'
import Button from '../Button'

export default function Card() {
  return (
    <section className='flex items-center justify-between gap-10 mt-16 max-lg:flex-col'>
        <div className='texts w-3/5  max-lg:w-full text-white text-start flex flex-col gap-8'>
            <h1>Find a better card deal in few easy steps.</h1>
            <p className='font-normal w-10/12 text-[#FFFFFFB2] leading-8'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button/>
        </div>
        <img className='w-5/12   max-lg:w-full' src={card} alt="" />
    </section>
  )
}
