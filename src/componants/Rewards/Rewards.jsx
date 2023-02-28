import React from 'react'
import { send, shield, star } from '../../assets'
import Button from '../Button'
import Element from './elment'

export default function Rewards() {
  return (
    <section className='text-white flex mt-28 max-lg:mt-5 max-lg:gap-10 max-lg:flex-col max-lg:w-full  gap-6 '>
        <div className='flex w-8/12 max-lg:w-full items-start justify-start flex-col text-start gap-10'>
            <h1 className='font-Poppins text-5xl w-full'>You do the business, we’ll handle the money.</h1>
            <p className='font-Poppins w-9/12 text-neutral-500'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <Button/>
        </div>
        <div className='flex flex-col max-lg:w-full gap-5 w-2/5'>
            <Element image={star} text="The best credit cards offer some tantalizing combinations of promotions and prizes" title={"Rewards"}/>
            <Element image={shield} text="We take proactive steps make sure your information and transactions are secure." title={"100% Secured"}/>
            <Element image={send} text="A balance transfer credit card can save you a lot of money in interest charges." title={"Balance Transfer"}/>
        </div>
    </section>
  )
}
