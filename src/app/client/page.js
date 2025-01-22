import Image from "next/image";
import React from "react";
import Client1 from "../../image/client1.png";
import Client2 from "../../image/client2.png";
import Client3 from "../../image/client3.png";
import CeoiMG from "../../image/ceo.png";
import clientPro2 from "../../image/clientPro2.png";
import clientPro3 from "../../image/clientPro3.png";



function Client() {
  return (
    <div><section className="text-black bg-[#ffffff] body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">


      <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" sm:text-4xl text-6xl mb-4  ">
          <span className="text-[#202020] text-4xl font-semibold">
                {" "}
                See what our {" "}
              </span>
              <span className="text-[#85C349] text-4xl font-semibold">
              Client Said                
              </span>



              <span className="text-[#202020] text-4xl font-semibold">
                {" "}
                about us{" "}
              </span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore the best reviews we got from out clients.            </p>
          </div>


      <div className="p-4 md:w-1/3">
          <div className="h-full border-2 shadow-xl  rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={Client1}
              alt="blog"
            />
            <div className="p-6">
              
              <p className="leading-relaxed mb-3">
              "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!”
              </p>
               <a className="inline-flex items-center">
                                <Image
                                  alt="testimonial"
                                  src={clientPro3}
                                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-semibold text-gray-900">
                                  Ryan Ekstrom Bothman{" "}
                                  </span>
                                  <span className="text-black text-sm">
                                  Farmer
                                  </span>
                                </span>
                              </a>
             
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 shadow-xl  rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={Client2}
              alt="blog"
            />
            <div className="p-6">
              
              <p className="leading-relaxed mb-3">
              "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!”              </p>
               <a className="inline-flex items-center">
                                <Image
                                  alt="testimonial"
                                  src={CeoiMG}
                                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-semibold text-gray-900">
                                  Marley Franci{" "}
                                  </span>
                                  <span className="text-black text-sm">
                                  Producer                                  </span>
                                </span>
                              </a>
             
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 shadow-xl  rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={Client3}
              alt="blog"
            />
            <div className="p-6">
              
              <p className="leading-relaxed mb-3">
              "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!”
              </p>
               <a className="inline-flex items-center">
                                <Image
                                  alt="testimonial"
                                  src={clientPro2}
                                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-semibold text-gray-900">
                                  Anika Septimus{" "}
                                  </span>
                                  <span className="text-black text-sm">
                                  Consumer
                                  </span>
                                </span>
                              </a>
             
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  </section>
  </div>
  )
}

export default Client