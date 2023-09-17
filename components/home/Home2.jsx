import React from "react";
import CarousalElem from "../common/CarousalElem";

const Home2 = () => {
  return (
    <section className="home-sec2">
      <div className="py-24">
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
        <div className=" mt-24 mx-32">
            <CarousalElem />
        </div>
      </div>
    </section>
  );
};

export default Home2;
