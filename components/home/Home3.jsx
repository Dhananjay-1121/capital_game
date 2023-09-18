import React from "react";
import CarousalElemHomeSec3 from "../common/CarousalElemHomeSec3";
import Image from "next/image";
import CaurosalElemHome2 from "../common/CaurosalElemHome2";
import Faq from "../common/Faq";

const faqs=[{question:"Do I need to pay for it?",answer:"No, You don’t need to pay for it. You can play infinite times without even paying a single penny unless you want to either purchase in-game currencies or get more value by getting Capital Rush’s Pro Subscription.. which would give you an in-depth analysis and feedback on your investing strategies and how you can grow your money even more."},
{question:"Is this a kind of gambling ?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
{question:"How is Capital Rush different ?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
{question:"What kind of investment categories do you have ?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
{question:"I don’t have knowledge about Market, Can I pay it ?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
{question:"How does it work ?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
]

const Home3 = () => {
  return (
    <div>
      <div className="py-24">
        <div className=" text-center">
          <h2 className="  mx-28 leading-tight mb-8 text-white text-[50px] ">
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
        <div>
        {/* line connections */}
          <div className="flex-col mt-20">
            <div className="flex justify-between ">
              <div className=" text-left ml-24" id="one">
                <h2 className=" leading-tight w-[600px] mb-8 h-fit text-white text-[48px] ">
                  Sign up & Build your <br /> Capital Empire
                </h2>
                <p className=" w-[530px] text-white -mt-5 font-quicksand leading-normal text-[20px]">
                  Mr Capital will guide you to several amazing adventures
                  throughout this wonderful journey. You would be able to create
                  the desired portfolio from your in-hand cash.
                </p>
              </div>
              <div className="mr-28  -mt-[200px]">
                <Image
                  className=" relative top-[226px] left-6 "
                  src="/p1.png"
                  height={315}
                  width={300}
                />
                <div className="bg-gradient-to-bl from-[#069F67] rounded-l-xl rounded-r-xl to-[#33CB53] w-[350px] h-[205px] "></div>
                <Image
                  className="relative bottom-[350px] right-[75px] opacity-40"
                  src="/p.png"
                  height={520}
                  width={495}
                />
              </div>
            </div>
            <div className="relative bottom-[535px] h-[303px] ml-[235px] mr-[320px] xl:mr-[420px] w-auto">
              <Image src="/pleft.png" fill />
            </div>
            <div className="flex justify-between -mt-[610px]" id="two">
              <div className="ml-16 -mt-[200px]">
                <Image
                  className=" relative top-[226px] right-4 "
                  src="/p2.png"
                  height={315}
                  width={340}
                />
                <div className="bg-gradient-to-bl from-[#FC6C64] rounded-l-xl rounded-r-xl to-[#E02961] w-[350px] h-[205px] "></div>
                <Image
                  className="relative bottom-[350px] right-[75px] opacity-40"
                  src="/p.png"
                  height={520}
                  width={495}
                />
              </div>
              <div className=" text-left mr-20">
                <h2 className=" leading-tight w-[600px] mb-8  text-white text-[48px] ">
                  Optimise the Capital
                </h2>
                <p className=" w-[530px] text-white -mt-5 font-quicksand leading-normal text-[20px]">
                  Utilize your in-hand capital via investing in various assets
                  like Equity, Crypto, Commodities, Bonds and Venture Capital
                  and explore the world of Investing like never before!
                </p>
              </div>
            </div>
            <div className="relative bottom-[535px] h-[303px] ml-[235px] mr-[320px] xl:mr-[380px] w-auto">
              <Image src="/pright.png" fill />
            </div>
            <div className="flex justify-between -mt-[610px]" id="two">
              <div className=" text-left ml-20">
                <h2 className=" leading-tight w-[600px] mb-8 whitespace-nowrap text-white text-[48px] ">
                  On Your Mark, Get Set Go!
                </h2>
                <p className=" w-[530px] text-white -mt-5 font-quicksand leading-normal text-[20px]">
                  Roll the dice to move in-time and see your assets compound in
                  real time. Travel weeks, quarters and years in a flash!
                </p>
              </div>
              <div className="mr-16 -mt-[200px]">
                <Image
                  className=" relative top-[226px] left-12 "
                  src="/p3.png"
                  height={315}
                  width={300}
                />
                <div className="bg-gradient-to-bl from-[#069F67] rounded-l-xl rounded-r-xl to-[#33CB53] w-[350px] h-[205px] "></div>
                <Image
                  className="relative bottom-[350px] right-[75px] opacity-40"
                  src="/p.png"
                  height={520}
                  width={495}
                />
              </div>
            </div>
            <div className="relative bottom-[535px] h-[303px] ml-[235px] mr-[320px] xl:mr-[380px] w-auto">
              <Image src="/pleft.png" fill />
            </div>
            <div className="flex justify-between -mt-[610px]" id="two">
              <div className="ml-16 -mt-[200px]">
                <Image
                  className=" relative top-[226px] left-4 "
                  src="/p4.png"
                  height={315}
                  width={320}
                />
                <div className="bg-gradient-to-bl from-[#FC6C64] rounded-l-xl rounded-r-xl to-[#E02961] w-[350px] h-[205px] "></div>
                <Image
                  className="relative bottom-[350px] right-[75px] opacity-40"
                  src="/p.png"
                  height={520}
                  width={495}
                />
              </div>
              <div className=" text-left mr-20">
                <h2 className=" leading-tight w-[600px] mb-8  text-white text-[48px] ">
                  Never a dull moment
                </h2>
                <p className="  w-[530px] text-white -mt-5 font-quicksand leading-normal text-[20px]">
                  Capital Rush is a fast-paced, high-tempo game that keeps you
                  on edge. You can choose to battle it out against the AI or can
                  play with your friends; the possibilities and surprises are
                  endless over here.
                </p>
              </div>
            </div>
          </div>

          <div className="relative bottom-[200px]">
              <CaurosalElemHome2 />
          </div>
          
          {/* Faq's */}
          <div>
          <div className="py-10 ml-32 mx-auto max-w-screen-xl ">
      <h1 className="text-white text-[48px] ml-2 font-semibold mb-0">
        FAQ
      </h1>
      {faqs.map((elem,index)=>{
        return <Faq question={elem.question} answer={elem.answer} key={index}/>
      })}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
