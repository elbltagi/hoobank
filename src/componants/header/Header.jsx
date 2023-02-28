import React, { useState } from 'react'
import { close, logo, menu } from '../../assets'
import Links from './links'

export default function Header() {
  const [active ,setactive] =useState(true);
  return (
    <header className='flex flex-row w-screen h-min z-20 max-w-full relative justify-between mx-10 mt-8'>
      <div className='w-28'>
        <img className='' src={logo}/>
      </div>
      <Links active={active} texts={["Home","About Us","Features","Solution"]} />
      {!active?<img onClick={()=>setactive(!active)} src={menu} className=" h-full lg:hidden cursor-pointer" alt="" />:<img onClick={()=>setactive(!active)} className="lg:hidden cursor-pointer h-full" src={close}/>}
    </header>
  )
}
