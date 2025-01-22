'use client';
import React, { useState } from "react";
import Image from "next/image";

// Import images
import ProducerImg from "../../image/producer.png"; 
import FarmerImg from "../../image/farmer.png"; 
import HomeCookImg from "../../image/homecook.png"; 

function Farmers() {
  const [activeTab, setActiveTab] = useState("Home Cook");

  // Data for each tab
  const tabData = {
    Producer: {
      img: ProducerImg,
      
    },
    Farmer: {
      img: FarmerImg,
     
    },
    "Home Cook": {
      img: HomeCookImg,
    
    },
  };

  // Active Tab Content
  const { img, title, description } = tabData[activeTab];

  return (
    <div>
<div className="flex flex-col text-center w-full ">
          <h1 className=" sm:text-4xl text-6xl mb-4  ">
          <span className="text-[#85C349] text-4xl font-semibold">
                {" "}
                Connecting Farmers {" "}
              </span>
              <span className="text-[#202020] text-4xl font-semibold">
              and Home Cooks               
              <br className="hidden lg:inline-block font-semibold" />

              for a Thriving Food{" "}
              </span>



              <span className="text-[#85C349] text-4xl font-semibold">
                {" "}
                Community!{" "}
              </span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A platform that connects farmers, producers, and home cooks to promote local, sustainable food.            </p>
          </div>



      <div className="container px-5 py-10 mx-auto flex text-black flex-wrap flex-col">
        {/* Tab Navigation */}
        <div className="flex mx-auto flex-wrap mb-10">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-semibold inline-flex items-center leading-none tracking-wider ${
                activeTab === tab
                  ? "border-[#85C349] text-[#85C349]"
                  : "border-gray-200 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Image */}
        <Image
  className="xl:w-1/2 lg:w-3/4 md:w-2/3 w-full block mx-auto mb-10 object-cover object-center rounded"
  alt={activeTab}
  src={img}
  width={500} 
  height={500} 
/>


       
      </div>
    </div>

  );
}

export default Farmers;
