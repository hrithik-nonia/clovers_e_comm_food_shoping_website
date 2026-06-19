import Carousel from "../component/carousel";
import ProductCard from "../component/product_card";
export default function Landing_page() {
  // feature for landing page delivary and service support
  const features = [
    {
      title: "Free Delivery",
      subtitle: "To Your Door",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E53E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 flex-shrink-0"
        >
          <rect x="2" y="7" width="11" height="9" />
          <path d="M13 10h4l3 3v3h-2" />
          <circle cx="6" cy="17.5" r="1.6" fill="#E53E3E" stroke="none" />
          <circle cx="16" cy="17.5" r="1.6" fill="#E53E3E" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Local Pickup",
      subtitle: (
        <>
          Check Out
          <a href="#" className="underline">
            Locations
          </a>
        </>
      ),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E53E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 flex-shrink-0"
        >
          <path d="M5 9h14l-1.2 9.4a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 9z" />
          <path d="M8 9a4 4 0 0 1 8 0" />
          <line x1="9" y1="12.5" x2="9" y2="15" />
          <line x1="12" y1="12.5" x2="12" y2="15" />
          <line x1="15" y1="12.5" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      title: "Available for You",
      subtitle: (
        <>
          <a href="#" className="underline">
            Online Support
          </a>{" "}
          24/7
        </>
      ),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E53E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 flex-shrink-0"
        >
          <path d="M5 13a7 7 0 0 1 14 0" />
          <path d="M5 13v4a1.5 1.5 0 0 0 1.5 1.5H7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H5z" />
          <path d="M19 13v4a1.5 1.5 0 0 1-1.5 1.5H17a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2z" />
          <path d="M9 18.5a2 2 0 0 0 2 1.5h1" />
        </svg>
      ),
    },
    {
      title: "Order on the Go",
      subtitle: (
        <>
          <a href="#" className="underline">
            Download
          </a>{" "}
          Our App
        </>
      ),
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E53E3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 flex-shrink-0"
        >
          <rect x="7.5" y="2.5" width="9" height="19" rx="1.3" />
          <line x1="10.5" y1="19" x2="13.5" y2="19" />
        </svg>
      ),
    },
  ];
  return (
    <>
      {/* carousel for landing page banner */}
      <Carousel />

      {/* customer and delivary support section */}
      <section className="w-full bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex md:flex-col flex-col lg:flex-row sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {features.map((feature, idx) => (
            <div key={idx} className="flex-1 flex items-center gap-4 px-6 py-4">
              {feature.icon}
              <div>
                <h3 className="font-semibold text-gray-900  text-xl leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mt-0.5">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* first product section */}
      <section className="lg:px-32 px-5">
        <div className="font-sans md:text-[33px] font-bold tracking-wide py-7 text-[25px]">
          Best Deals
        </div>

        {/* product shows here */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide mb-12">
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#eb1414] font-sans rounded-full font-bold text-[#ffffff] tracking-wide py-3 text-sm px-10 ">
            Shop Best Deals
          </button>
        </div>
      </section>
    </>
  );
}
