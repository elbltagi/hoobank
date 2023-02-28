import React from 'react'

export default function Links(props) {
  return (
    <ul className={`list-none text-header_link ${props.active?"max-lg:flex":"max-lg:hidden"} flex gap-10 max-lg:flex-col max-lg:absolute max-lg:right-0 max-lg:top-full max-lg:mt-6 max-lg:gap-4 max-lg:p-4 max-lg:bg-[#ffffff4a] rounded-lg`}>  
        {props.texts.map((item)=>{
            return(
                <li className='cursor-pointer h-min hover:text-white transition-all'>{item}</li>
            );
        })}
    </ul>
  )
}
