import React from 'react';
import Image from 'next/image';
import lableImg1 from '../../image/lableImg1.png';
import lableImg2 from '../../image/lableImg2.png';
import lableImg3 from '../../image/lableImg3.png';
import lableImg4 from '../../image/lableImg4.png';
import lableImg5 from '../../image/lableImg5.png';
import lableImg6 from '../../image/lableImg6.png';

function Label() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <Image
                src={lableImg1}
                alt="Circooles"
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="title-font font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
                Circooles
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <Image
                src={lableImg2}
                alt="Quotient"
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="title-font font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
                Quotient
              </p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <Image
                src={lableImg3}
                alt="Hourglass"
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="title-font font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
                Hourglass
              </p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <Image
                src={lableImg4}
                alt="Command+R"
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="title-font font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
                Command+R
              </p>
            </div>
            {/* Item 5 */}
            <div className="flex flex-col items-center">
              <Image
                src={lableImg5}
                alt="Catalog"
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="title-font font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
                Catalog
              </p>
            </div>
            {/* Item 6 */}
            <div className="flex flex-col items-center">
              <Image
                src={lableImg6}
                alt="Layers"
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="title-font font-semibold text-sm sm:text-base md:text-lg text-gray-800 text-center">
                Layers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Label;
