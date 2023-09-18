import Image from "next/image";
import React from "react";
import "./caurosalhome2.css";

const CaurosalElemHome2 = () => {
  return (
    <div className="slider">
      <input type="radio" name="toggle" id="btn-1" defaultChecked />
      <input type="radio" name="toggle" id="btn-2" />
      <input type="radio" name="toggle" id="btn-3" />

      <div className="slider-controls">
        <label htmlFor="btn-1"></label>
        <label htmlFor="btn-2"></label>
        <label htmlFor="btn-3"></label>
      </div>

      <ul className="slides">
        <li className="slide">
          <div className="slide-content">
          <h2 className=" leading-tight w-[600px] mb-8  text-white text-[48px] ">
                  Optimise the Capital
                </h2>
                <p className=" w-[530px] text-white -mt-5 font-quicksand leading-normal text-[20px]">
                  Utilize your in-hand capital via investing in various assets
                  like Equity, Crypto, Commodities, Bonds and Venture Capital
                  and explore the world of Investing like never before!
                </p>
            <a href="#" className="slide-link">
              Learn more
            </a>
          </div>
          <div className="group">
            <div className="">
              <div className="">
                <Image
                  className=" relative bottom-[250px] right-[75px] group-hover:brightness-125"
                  src="/boy.png"
                  height={597}
                  width={380}
                />
              </div>
            </div>
          </div>
        </li>
        {/* <li className="slide">
        <div className="slide-content">
          <h2 className="slide-title">Slide #2</h2>
          <p className="slide-text">Nisi ratione magni ea quis animi incidunt velit voluptate dolorem enim possimus, nam provident excepturi ipsam nihil molestiae minus delectus!</p>
          <a href="#" className="slide-link">Amazing deal</a>
        </div>
        <p className="slide-image">
          <Image  src="/boy.png" alt="stuff" width="320" height="240" />
        </p>
      </li>
      <li className="slide">
        <div className="slide-content">
          <h2 className="slide-title">Slide #2</h2>
          <p className="slide-text">Nisi ratione magni ea quis animi incidunt velit voluptate dolorem enim possimus, nam provident excepturi ipsam nihil molestiae minus delectus!</p>
          <a href="#" className="slide-link">Amazing deal</a>
        </div>
        <p className="slide-image">
          <Image  src="/boy.png" alt="stuff" width="320" height="240" />
        </p>
      </li> */}
      </ul>
    </div>
  );
};

export default CaurosalElemHome2;

// <div>
//   <div className="group">
//     <div className="">
//       <div className="bg-gradient-to-bl from-[#FC6C64]  to-[#E02961] w-screen h-[540px] "></div>
//       <Image
//         className="relative bottom-[250px] right-[75px] group-hover:brightness-125"
//         src="/boy.png"
//         height={597}
//         width={380}
//       />
//     </div>
//   </div>
// </div>
