import Image from "next/image";
import React from "react";
import ScrenPart from "../../image/MacbookAir.png";
import greenTick from "../../image/image.png";

function FarMarket() {
  return (
    <div className="grid bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="text-gray-400 bg-[#F3F9ED] rounded-3xl body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-16 lg:py-24 items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <span className="text-lg border rounded-full p-2 mb-4 h-[46px] w-[158px] font-medium text-[#548828] bg-[#E5F3D4]">
              For Business
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-4 font-semibold leading-tight">
              <span className="text-[#85C349]">Producers</span>
              <br className="hidden lg:inline-block" />
              <span className="text-[#747772]"> & </span>
              <span className="text-[#202020]">Markets</span>
            </h1>

            <p className="mb-6 leading-relaxed text-[#414040]">
              Capture leads, engage customers, and track your marketing efforts
              with limited to no marketing expertise. Culineer makes growing
              your business easy!
            </p>

            <div className="space-y-4 text-left">
              <p className="flex items-center text-[#202020] font-semibold">
                <Image
                  className="object-cover object-center rounded mr-2"
                  alt="hero"
                  src={greenTick}
                  height={20}
                  width={20}
                />
                Increase sales and improve profits.
              </p>
              <p className="flex items-center text-[#202020] font-semibold">
                <Image
                  className="object-cover object-center rounded mr-2"
                  alt="hero"
                  src={greenTick}
                  height={20}
                  width={20}
                />
                Streamlined marketing and data insights.
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button className="inline-flex text-white bg-[#85C349] border-0 py-2 px-6 focus:outline-none hover:bg-[#98dd54] hover:text-black rounded-full text-lg">
                Upgrade to a Professional Account
              </button>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={ScrenPart}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FarMarket;
