import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" pb-32 bg-[#080612]">
      <div className="pt-16 px-24 flex justify-between">
        <div>
          <Image
            src="/logo.png"
            className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            height={110}
            width={216}
          />
          <p className=" text-[18px] text-white font-quicksand">
            Experience financial markets <br /> like never before
          </p>
          <div className="flex justify-between">
            <p className=" mt-32 text-[16px] text-[#8D8D8D] font-quicksand">
              2023 © company Ins., All rights reserved
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className=" text-[18px]  text-white font-quicksand">About</h3>
          <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
            About Us
          </p>
        </div>
        <div className="mt-12">
          <h3 className=" text-[18px] text-white font-quicksand">Legal</h3>
          <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
            Terms of use
          </p>
          <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
            Privacy Policy
          </p>
        </div>
        <div className="mt-12">
          <h3 className=" text-[18px] text-white font-quicksand">Contact</h3>
          <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
            000-000-00
          </p>
          <p className=" mt-16 text-[16px] text-[#8D8D8D] font-quicksand">
            hello@logo.com
          </p>
        </div>
      </div>
      <div className=" mr-32 -mt-8 float-right flex gap-10">
        <a href="/">
          {" "}
          <Image className="hover:brightness-125" src="/svg/footeryoutube.svg" height={32} width={45} />{" "}
        </a>
        <a href="/">
          {" "}
          <Image className="hover:brightness-125"
            alt="footer-icons"
            src="/svg/footer2.svg"
            height={32}
            width={45}
          />
        </a>
        <a href="/">
          {" "}
          <Image className="hover:brightness-125"
            alt="footer-icons"
            src="/svg/footerinsta.svg"
            height={32}
            width={45}
          />
        </a>
        <a href="/">
          {" "}
          <Image className="hover:brightness-125"
            alt="footer-icons"
            src="/svg/footerlinkedin.svg"
            height={32}
            width={45}
          />
        </a>
        <a href="/">
          {" "}
          <Image className="hover:brightness-125"
            alt="footer-icons"
            src="/svg/footertwitter.svg"
            height={32}
            width={45}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
