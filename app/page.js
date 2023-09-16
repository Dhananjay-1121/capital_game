import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-gray-300 w-full text-31xl font-poppins">
      <Image src="/bg@2x.png" fill />
      <div className="flex justify-center">
      <Nav />
      </div>
      
      
      
      {/* <div className=" mx-24 flex">
        <div className="flex gap-60 text-center mx-auto">
          <Image src="/logo.png" width={110} height={70} />
          <div className="flex gap-14 z-30">
            <button className="navItem">Home</button>
            <button className="navItem">About Us</button>
            <button className="navItem">Timeline</button>
            <button className="navItem">Blog</button>
          </div>
          <button className=" text-4xl"> PLAY NOW</button>
        </div>
      </div> */}
      
      
      <div className="flex justify-center text-center mt-48 ">
        <div>
          <h2 className=" leading-tight text-white z-20">LEARN HOW TO GROW YOUT MONEY WITH CAPITAL RUSH</h2>
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
