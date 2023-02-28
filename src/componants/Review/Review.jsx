import React from 'react'
import { people01, people02, people03 } from '../../assets'
import Brands from './brands';
import ReviewCard from './ReviewCard';
import Start from './Start';

export default function Review() {
    const data = [
        {
            text:"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
            name:"Herman Jensen",
            image:people01,
            job_title:"Founder & Leader"
        },
        {
            text:"Money makes your life easier. If you're lucky to have it, you're lucky.",
            name:"Steve Mark",
            image:people02,
            job_title:"Founder & Leader"
        },
        {
            text:"It is usually people in the money business, finance, and international trade that are really rich.",
            name:"Kenn Gallagher",
            image:people03,
            job_title:"Founder & Leader"
        }
    ]
  return (
    <section className='text-white flex flex-col gap-20 mt-28 max-lg:gap-10 max-lg:mt-5'>
        <div className='flex justify-betweenw text-start items-center max-lg:flex-col max-lg:gap-3'>
            <h1 className=''>What people are saying about us</h1>
            <p className='text-[#ffffff7a] font-normal text-base'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='flex mt-12 justify-between gap-6 max-lg:flex-col max-lg:items-center'>
            {data.map((item)=>{
                return <ReviewCard {...item} />;
            })}
        </div>
        <Brands/>
        <Start/>
    </section>
  )
}
