import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=' pb-32 bg-[#080612]'>
      <div className='pt-16 px-24 flex gap-32'>
        <div>
        <Image src="/logo.png" height={110} width={216} />
        </div>
      </div>
    </div>
  )
}

export default Footer