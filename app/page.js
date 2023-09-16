import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-300 w-full h-screen text-31xl font-poppins">
      <Image src="/bg@2x.png" fill />
      <div className="bg-gradient-to-t from-black via-transparent to-slate-600 ">
        <div className="flex  justify-center ">
          <Nav />
        </div>

        <div className="flex justify-center text-center mt-48 ">
          <div>
            <h2 className=" leading-tight text-white z-20">
              LEARN HOW TO GROW YOUT MONEY WITH CAPITAL RUSH
            </h2>
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
