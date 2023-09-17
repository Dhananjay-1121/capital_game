import React from "react";
import CarousalElem from "../common/CarousalElem";

const Home2 = () => {
  return (
    <section className="home-sec2">
      <div className=" py-24">
        <div className=" text-center">
          <h2 className="  mx-28 leading-tight text-white text-[50px] ">
            WHY
            <span className=" text-yellow-300 text-stroke text-stroke-white">
              {" "}
              CAPITAL RUSH?
            </span>
          </h2>
          <p className=" text-white -mt-5 font-quicksand leading-normal text-[20px]">
            Transforming gaming into learning: Capital Rush merges finance
            education <br /> and fun, perfect for gamers and investment novices
          </p>
        </div>
        <div className=" mt-12 xl:mx-32 mx-16">
            <CarousalElem />
            <div className="z-40 text-center ">
          <button
            className="transform hover:scale-105 transition-transform duration-300 py-3 px-10 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;">
            {" "}
            <span className="button-text-shadow ">PLAY NOW</span>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
