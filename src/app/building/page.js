import Image from "next/image";
import React from "react";
import building1 from "../../image/building1.png";
import building2 from "../../image/building2.png";
import building3 from "../../image/building3.png";
import building4 from "../../image/building4.png";
import building5 from "../../image/building5.png";
import building6 from "../../image/building6.png";

function Building() {
  // Define unique dimensions for each image
  const imageDimensions = [
    { width: 10, height: 20 }, // Dimensions for building1
    { width: 50, height: 20 }, // Dimensions for building2
    { width: 50, height: 20 }, // Dimensions for building3
    { width: 50, height: 20 }, // Dimensions for building4
    { width: 50, height: 20 }, // Dimensions for building5
    { width: 50, height: 20 }, // Dimensions for building6
  ];

  const images = [building1, building2, building3, building4, building5, building6];

  return (
    <div>
      <section className="text-black bg-[#ffffff] body-font">
        <div className="py-24 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" sm:text-4xl text-6xl mb-4  ">
          <span className="text-[#202020] text-4xl font-semibold">
                {" "}
                Start building your {" "}
              </span>
              <span className="text-[#85C349] text-4xl font-semibold">
              market               <br className="hidden lg:inline-block font-semibold" />
              community{" "}
              </span>



              <span className="text-[#202020] text-4xl font-semibold">
                {" "}
                today.{" "}
              </span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Join our community to stay updated with your favorite food producer or market.
            </p>
          </div>

          {/* <div className=" flex justify-between items-end gap-4 bg-red-500">
            {images.map((Image, index) => (
              <div
                key={index}
                className="flex-1 flex justify-center"
                style={{
                  position: "relative",
                  height: `${imageDimensions[index].height}px`,
                }}
              >
                <Image
                  alt={`Building ${index + 1}`}
                  className="rounded-lg object-cover"
                  src={Image}
                  style={{
                    position: "absolute",
                    // bottom: 100,
                  }}
                  width={imageDimensions[index].width}
                  height={imageDimensions[index].height}
                />
              </div>
            ))}
          </div> */}
<div className=" container ">
  <section className="text-gray-400  body-font">
    <div className=" mx-auto">
      <div className="flex flex-nowrap  justify-between overflow-x-auto">
        {/* Image 1 */}
        <div className="w-[20.66%] ">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-contain object-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] block"
              src={building1}
            />
          </a>
        </div>
        {/* Image 2 */}
        <div className="w-[16.66%] p-4 b">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-contain object-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] block"
              src={building2}
            />
          </a>
        </div>
        {/* Image 3 */}
        <div className="w-[16.66%] p-4">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-contain object-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] block"
              src={building3}
            />
          </a>
        </div>
        {/* Image 4 */}
        <div className="w-[16.66%] p-4 ">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-contain object-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] block"
              src={building4}
            />
          </a>
        </div>
        {/* Image 5 */}
        <div className="w-[16.66%] p-4 ">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-contain object-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] block"
              src={building5}
            />
          </a>
        </div>
        {/* Image 6 */}
        <div className="w-[16.66%] pr-0 p-4">
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              className="object-contain object-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] block"
              src={building6}
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</div>





        </div>
      </section>
    </div>
  );
}

export default Building;
