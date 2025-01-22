// src/app/Producers/page.js
'use client'; // Adding the 'use client' directive to make this a client-side component

import mainImg from "../../image/HeroV1.png";
import Image from "next/image";

const Producerss = () => {
  return (
    <div className="grid  bg-white items-center justify-items-center     gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src={mainImg}
        alt="main Image"
        width={1200} // Adjust the width as needed
        height={600} // Adjust the height as needed
        layout="intrinsic"
      />
    </div>
  );
};

export default Producerss; // Default export
