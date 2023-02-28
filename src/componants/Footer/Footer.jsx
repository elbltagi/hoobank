import React from 'react'
import { copyRight, facebook, instagram, linkedin, logo, twitter } from '../../assets'
import Links from './Links'

export default function Footer() {
    const data = [
        {
            title: "Usefull Links",
            elements: [
                "Content",
                "How it Works",
                "Create",
                "Explore",
                "Terms & Services"
            ]
        },
        {
            title: "Community",
            elements: [
                "Help Center",
                "Partners",
                "Suggestions",
                "Blog",
                "Newsletters"
            ]
        },
        {
            title: "Partner",
            elements: [
                "Our Partner",
                "Become a Partner"
            ]
        }
    ]
    return (
        <footer className='bg-[#0B0A0C] w-[120%] text-white p-12 '>
            <div className='flex text-start max-lg:flex-col justify-start gap-11 border-b-2 pb-6 border-[#ffffff7a] '>
                <div className='flex flex-col gap-2'>
                    <img className='w-1/2' src={logo} alt="" />
                    <p className='text-[#ffffff7a] w-2/3 text-base ml-5'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='flex gap-11'>
                    {data.map((item) => {
                        return <Links {...item} />
                    })}
                </div>
            </div>
            <div className='flex items-center flex-1 justify-between pt-5 '>
                <div className='flex justify-start items-center gap-5 text-[#ffffff8a]'>
                    <p className='flex gap-1'>Copyright <img src={copyRight} alt="" /></p>
                    <p>2021 HooBank. All Rights Reserved.</p>
                </div>
                <div className='flex gap-4'>
                    <img src={instagram}/>
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={linkedin}/>
                </div>

            </div>
        </footer>
    )
}
