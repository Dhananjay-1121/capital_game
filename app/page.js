import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-400 w-full h-full  text-31xl font-poppins">
      <div>
        {/* <Image src="/bg@2x.png" fill  className=" opacity-60 "/> */}
      </div>
      <div className="sec1-bg bg-cover bg-center h-screen">
        <div className="flex  justify-center ">
          <Nav />
          {/* <Image src="/bg@2x.png" layout="fill" objectFit="cover" alt="" /> */}
        </div>

        <div className=" text-center mt-48 ">
          <div className="">
            <h2 className="  mx-28 leading-tight text-white text-[60px] ">
              LEARN HOW TO
              <span className=" text-yellow-400 text-stroke text-stroke-white">
                {" "}
                GROW YOUT MONEY WITH CAPITAL RUSH
              </span>
            </h2>
            <p className=" text-white font-quicksand text-[30px]">
              Experience financial markets like never before
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <img
  className=" h-[95.54%] w-[95.49%] top-[4.09%] right-[2.64%] bottom-[0.37%] left-[1.88%] max-w-full  max-h-full"
  alt=""
  src="/tiles-path.svg"
/> */
}
