import React from 'react'
import { Link } from 'react-router-dom'

const WhatsPop = () => {
  return (
    <div className='fixed bottom-6 right-5 w-[40px] rounded-full bg-green-700 hover:bg-green-400 aspect-square flex items-center justify-center animate-wiggle hover:text-emerald-700 transition-colors ease-linear sm:w-[50px]'> <Link to="https://wa.me/522215870242" target='_blank' className='sm:text-2xl   font-semibold'><i className="fa-brands fa-whatsapp"></i></Link></div>
  )
}

export default WhatsPop