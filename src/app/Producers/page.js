'use client';

import Image from 'next/image';
import producerImg from '../../image/Group1171274742.svg';
import homeCookIMG from '../../image/Group1171274744.svg';
import botIMG from '../../image/botIMG.png';
import fLEFTimg from '../../image/fLEFTimg.png';
import fRightimg from '../../image/fRightimg.png';
import smallIMG1 from "../../image/smallIMG1.png"
import smallIMG2 from "../../image/smallIMG2.png"

const HeroSection = () => {
  return (
    <section className="relative bg-white flex flex-col items-center text-center px-6 md:px-20 py-10">

      {/* Hero Section with Floating Images */}
      <div className="relative w-full max-w-4xl mt-10 flex items-center justify-center">
        {/* Left Floating Image */}
        <Image
          src={producerImg}
          alt="Producer"
          width={285}
          height={285}
          className="absolute left-0 top-2/3 transform -translate-y-1/2 hidden md:block"
        />

        {/* Hero Text */}
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold mt-5">
            Discover and <span className="text-[#85C349]">Support</span> <br />
            Your <span className="text-[#85C349]">Local Food</span> Heroes
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Connecting consumers with local food producers for a healthier, <br /> sustainable future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#96d853] hover:text-white border-2">
              Join as a Consumer
            </button>
            <button className="bg-[#85C349] text-white px-6 py-3 rounded-full font-medium hover:bg-[#96d853]">
              Upgrade Your Business
            </button>
          </div>
        </div>

        {/* Right Floating Image */}
        <Image
          src={homeCookIMG}
          alt="Home Cook"
          width={285}
          height={285}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block"
        />
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-10 mt-10 text-center">
        <div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-gray-500">Total Producers</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">199+</h3>
          <p className="text-gray-500">Happy Customers</p>
        </div>
      </div>

     {/* Bot Image Section */}
<div className="relative w-full max-w-6xl mt-16 flex items-center justify-center">
  {/* Background Floating Images */}
  <Image
    src={fLEFTimg}
    alt="Left Background"
    width={200}
    height={200}
    className="absolute left-[1%] top-[1%] hidden md:block transform -translate-y-1/2"
  />
  <Image
    src={fRightimg}
    alt="Right Background"
    width={200}
    height={200}
    className="absolute right-[5%] top-[2.5%] hidden md:block z-0 transform -translate-y-1/2"
  />

  {/* Main Bot Image */}
  <Image
    src={botIMG}
    alt="Bot"
    width={1000}
    height={1000}
    className="z-10" // Ensure this stays below the floating images
  />

  {/* Foreground Floating Images */}
  <div className="absolute top-20 -left-[0%] hidden md:block z-20">
    <Image
      src={smallIMG1}
      alt="Foreground Left"
      width={325}
      height={325}
      className="z-20"
    />
  </div>
  <div className="absolute top-40 -right-[0%] hidden md:block z-20">
    <Image
      src={smallIMG2}
      alt="Foreground Right"
      width={325}
      height={325}
      className="z-20"
    />
  </div>
</div>

    </section>
  );
};

export default HeroSection;
