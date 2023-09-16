
import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className=" flex justify-center">
        <div className="flex gap-60  ">
          <Image src="/logo.png" width={120} height={75} />
          <div className="flex gap-14 z-30">
            <button className="navItem">Home</button>
            <button className="navItem">About Us</button>
            <button className="navItem">Timeline</button>
            <button className="navItem">Blog</button>
          </div>
          <button className=" text-4xl"> PLAY NOW</button>
        </div>
      </div>
  )
}

export default Nav