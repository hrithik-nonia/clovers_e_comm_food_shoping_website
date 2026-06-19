import { useState, useEffect } from "react";
import banner1 from "../assets/banners/ban-1.avif";
import banner2 from "../assets/banners/ban-2.avif";
import banner3 from "../assets/banners/ban-3.avif";

function Carousel() {
  const images = [banner1, banner2, banner3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      {/* images */}
      <img
        src={images[current]}
        alt="banners"
        className="lg:h-full h-[400px] object-cover"
      />

      {/* text on the image */}

      <section className="absolute inset-0 h-full flex items-center">
        <div className="lg:pl-[25%] pl-5 md:pl-[15%]">
          <p className="lg:text-2xl font-medium md:mb-6 mb-2 md:text-xl ">
            Easy, Fresh & Convenient
          </p>

          <h1 className="lg:text-7xl font-bold leading-tight md:mb-8 mb-2 text-4xl md:text-5xl ">
            Stock Up on
            <br />
            Daily Essentials
          </h1>

          <h2 className="lg:text-5xl font-bold leading-tight lg:mb-10 md:mb-7 mb-4 text-xl md:text-2xl">
            Save Big on Your
            <br />
            Favorite Brands
          </h2>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold lg:px-10 lg:py-4 py-2 px-6 rounded-full lg:text-xl md:text-lg transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
