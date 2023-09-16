import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex gap-60  ">
      <div className="z-20 ">
        <Image src="/logo.png" width={120} height={75} />
      </div>
        <div className="flex z-30">
          <ul className="list-none -mt-0 gap-14 flex">
            <li>
              <a href="/">
                <button className="navItem">Home</button>
              </a>
            </li>
            <li>
              <a href="/">
                <button className="navItem">About Us</button>
              </a>
            </li>
            <li>
              <a href="/">
                <button className="navItem">Timeline</button>
              </a>
            </li>
            <li>
              <a href="/">
                <button className="navItem ">Blog</button>
              </a>
            </li>
          </ul>
          {/* <button className="navItem">Home</button>
            <button className="navItem">About Us</button>
            <button className="navItem">Timeline</button>
            <button className="navItem">Blog</button> */}
        </div>
        <div className="z-40 -mt-1">
        <button className=" py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "> <span className="button-text-shadow ">PLAY NOW</span></button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
