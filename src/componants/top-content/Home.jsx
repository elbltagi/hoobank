import React from 'react'
import { arrowUp, robot ,discount } from '../../assets'
import Number from './number'

export default function Home() {
  return (
    <section className={"w-full flex flex-col justify-start items-center gap-20 min-h-full "}>
        <div className='w-full flex z-40 justify-between max-lg:flex-col max-lg:gap-10 '>
            <div className='texts text-white relative flex flex-col gap-10 '>
                <div className='w-3/5 liner rounded-lg px-2 flex justify-center gap-2 items-center'>
                    <img src={discount} alt="" />
                    <p className='font-Poppins text-xs text-neutral-500 font-normal'><span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</p>
                </div>
                <div className='get-start bg-main z-50 max-lg:hidden'>
                    <p className='z-50 text-start text-liner-2 relative'>Get <br/>Started <img  src={arrowUp} className="absolute top-0 right-0" alt="" /></p>
                </div>
                <div className='border absolute z-10 max-lg:hidden'></div>
                <h1 className='text-start leading-normal font-Poppins font-semibold'>
                    The Next<br/>
                    <span className='text-liner'>Generation</span><br/>
                    Payment Method.
                </h1>
                <p className="w-custom text-start font-Poppins text-neutral-500 font-normal">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.</p>
            </div>
            <div className='right-img w-2/5 max-lg:w-full max-lg:-mr-5 self-end lg:-mr-32 relative'>
                <img src={robot} alt="" className='z-50 relative' />
            </div>
        </div>
        <div className='flex w-full items-center max-lg:flex-col max-lg:items-start max-lg:gap-8 justify-center gap-16'>
            <Number text={"User Active"} nubmer={"3800+"}/>
            <Number text={"TRUSTED BY COMPANY"} nubmer={"230+"}/>
            <Number text={"TRANSACTION"} nubmer={"$230M+"}/>
        </div>
    </section>
  )
}
