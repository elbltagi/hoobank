import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../../assets'

export default function Brands() {
  return (
    <div className="flex justify-between items-center  max-lg:justify-center gap-10">
        <img className='w-[192px] max-lg:w-20'  src={airbnb} alt="" />
        <img className='w-[192px] max-lg:w-20'  src={binance} alt="" />
        <img className='w-[192px] max-lg:w-20'  src={coinbase} alt="" />
        <img className='w-[192px] max-lg:w-20' src={dropbox} alt="" />
    </div>
  )
}
