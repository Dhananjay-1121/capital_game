import Image from "next/image";
import Link from "next/link";
import Nav from "../common/Nav";

const Home1 = () => {
  return (
    <section className="sec1-bg bg-cover bg-center h-screen ">
      <div className="flex  justify-center ">
        <Nav />
      </div>

      <div className=" text-center mt-20 mb-20">
        <div className="">
          <h2 className="  mx-28 leading-tight text-white text-[60px] ">
            LEARN HOW TO
            <span className=" text-yellow-300 text-stroke text-stroke-white">
              {" "}
              GROW YOUT MONEY WITH CAPITAL RUSH
            </span>
          </h2>
          <p className=" text-white font-quicksand text-[30px]">
            Experience financial markets like never before
          </p>
          <div className="flex justify-center mt-12 gap-6 ml-6 mr-10">
            <div className=" cursor-pointer flex items-center justify-center ">
              <Link href="/">
                <Image
                  src="/svg/apple.svg"
                  alt="SVG Image"
                  width={350}
                  height={300}
                  layout="intrinsic"
                  objectFit="cover"
                  className="mt-6 hzoom1"
                />
              </Link>
            </div>
            <div className="border-1 border-white cursor-pointer flex items-center justify-center ">
              <Link href="/">
                <Image
                  src="/svg/android.svg"
                  alt="SVG Image"
                  width={280}
                  height={280}
                  layout="intrinsic"
                  objectFit="cover"
                  className="  hzoom1"
                />
              </Link>
            </div>
            <div className="ml-8  cursor-pointer flex items-center justify-center ">
              <Link href="/">
                <Image
                  src="/svg/watchvd.svg"
                  alt="SVG Image"
                  width={300}
                  height={300}
                  layout="intrinsic"
                  objectFit="cover"
                  className="hzoom1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;
