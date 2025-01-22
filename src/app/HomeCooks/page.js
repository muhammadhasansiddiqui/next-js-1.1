import Image from "next/image";
import React from "react";
import ScrenPart from "../../image/MacbookAir2.png";
import greenTick from "../../image/image.png"

function HomeCooks() {
  return (
    <div className="grid  bg-white items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <section className="text-gray-400 bg-[#F3F9ED] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={ScrenPart}
                  />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

    <span className="text-lg border rounded-full p-2 m-10  h-[46] w-[158]   font-medium text-[#548828] bg-[#E5F3D4]">
              {" "}
            For Consumers            </span>

            <h1 className=" sm:text-4xl text-6xl mb-4  ">
            <span className="text-[#747772] text-6xl font-semibold">
                Home{" "}
              </span>
              <span className="text-[#85C349] text-6xl font-semibold">
                Cooks{" "}
              </span>

              <br className="hidden lg:inline-block font-semibold" />

              <span className="text-[#747772] text-6xl font-semibold"> & </span>

              <span className="text-[#202020] text-6xl font-semibold">
                {" "}
                Chefs{" "}
              </span>
            </h1>
            <p className="mb-8 leading-relaxed  text-[#414040] text-lg ">
            Find local producers in your area, get reminders to go to market, know what's available each week. Learn about ingredients and growing practices, be inspired by new recipes.
            </p>

      <p className="flex items-center text-[#202020] font-semibold">
        <Image
          className="object-cover object-center rounded mr-2 "
          alt="hero"
          src={greenTick}
          height={20}
          width={20}
        />
Easier access to local ingredients.      </p>
      <p className="flex items-center text-[#202020] font-semibold">
        <Image
          className="object-cover object-center rounded mr-2"
          alt="hero"
          src={greenTick}
          height={20}
          width={20}
        />Improved eating habits and confidence in food quality.</p>
      <br/>
      
                  <div className="flex justify-center">
                   
                    <button className="ml-4 inline-flex text-[#ffffff] bg-[#85C349] border-0 py-2 px-6 focus:outline-none hover:bg-[#98dd54] hover:text-black rounded-full text-lg">
                    Join the Culineer Community             </button>
                  </div>
                </div>
              </div>
</section>
</div>

  )
}

export default HomeCooks