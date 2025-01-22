import React from 'react';
import Image from 'next/image';
import educationImg1 from '../../image/educationImg1.jpg';
import educationImg2 from '../../image/educationImg2.jpg';
import educationImg3 from '../../image/educationImg3.jpg';


function Education() {
  return (
    <div>

<section className="text-gray-400 bg-[#ffffff] body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
     
    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
  <div>
    <h1 className="sm:text-4xl text-6xl mb-4">
      <span className="text-[#202020] text-4xl font-semibold">
        Resources &{" "}
      </span>
      <span className="text-[#85C349] text-4xl font-semibold">
        Education
      </span>
    </h1>
    <p className="sm:w-3/5 leading-relaxed text-base sm:pl-0 pl-0 sm:whitespace-nowrap whitespace-normal">
      Learn More About Local Recipes, ingredient guides, certifications.
    </p>
  </div>
</div>


    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">


      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-[456px] overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={educationImg1}
          />
        </div>
        <h2 className="text-base leading-relaxed mt-2">
        December 6, 2021 Delia Hernandez 
               </h2>
        <p className="text-xl font-medium title-font text-black mt-5">
        Muddassar MD Collection Emerges As A Favorite Among Designers
        </p>
       
      </div>


      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-[456px] overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={educationImg2}
          />
        </div>
        <h2 className="text-base leading-relaxed mt-2">
        December 6, 2021 Delia Hernandez               </h2>
        <p className="text-xl font-medium title-font text-black mt-5">
        Muddassar MD Collection Emerges As A Favorite Among Designers
        </p>
       
      </div>


      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-[456px] overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={educationImg3}
          />
        </div>
        <h2 className="text-base leading-relaxed mt-2">
        December 6, 2021 Delia Hernandez               </h2>
        <p className="text-xl font-medium title-font text-black mt-5">
        Muddassar MD Collection Emerges As A Favorite Among Designers
        </p>
      </div>


    </div>
  </div>
</section>






    </div>
  )
}

export default Education






