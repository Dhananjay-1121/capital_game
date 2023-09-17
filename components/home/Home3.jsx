import React from "react";
import CarousalElemHomeSec3 from "../common/CarousalElemHomeSec3";

const Home3 = () => {
  return (
    <div>
      <div className="py-24">
        <div className=" text-center">
          <h2 className="  mx-28 leading-tight text-white text-[50px] ">
            HOW IT WORKS?
          </h2>
          <p className=" text-white -mt-5 font-quicksand leading-normal text-[20px]">
            Explore Capital Rush's immersive fusion of gaming and investing.
            Learn <br /> wealth management, trade assets, and grasp finance
            concepts risk-free
          </p>
        </div>
        <div className="mt-12 xl:mx-32 mx-16">
            <CarousalElemHomeSec3 />
        </div>
      </div>
    </div>
  );
};

export default Home3;
