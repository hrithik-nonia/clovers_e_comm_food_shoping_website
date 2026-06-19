import { GiRamProfile } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { nav_links } from "../constant/constant";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav>
        {/* heading */}
        <div className="text-[#ffffff] bg-[#8C0000] flex lg:justify-between justify-center lg:px-16 py-4 font-thin text-[15px] tracking-wide font-sans">
          <span className="hidden lg:inline">
            <span className="lg:mr-10 cursor-pointer">About Us</span>
            <span className="cursor-pointer">Customer Support</span>
          </span>

          <span>
            Get 20% off your first order.
            <span className="cursor-pointer"> Subscribe</span>
          </span>

          <button className="lg:flex lg:gap-3 hidden lg:pr-10">
            <span>
              <GiRamProfile size={"20px"} />
            </span>
            <span className="hover:text-[#eb1414]">Log in</span>
          </button>
        </div>

        {/* navbar */}
        <div className="flex lg:justify-between lg:px-16 lg:py-7 text-[#ffffff] bg-[#eb1414] lg:items-center md:flex-row flex-col gap-5 py-4 px-5 ">
          <div className="flex justify-between">
            <p className="lg:text-4xl font-bold font-sans tracking-wide cursor-pointer text-2xl">
              Clovers.
            </p>

            <div className="flex items-center gap-4 md:hidden">
              <span className="flex gap-1.5 cursor-pointer items-center">
                <span>
                  <CiShoppingCart size={"25px"} />
                </span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#eb1414]">
                  0
                </span>
              </span>
              <span>
                <RxHamburgerMenu size={"25px"} />
              </span>
            </div>
          </div>

          <div className="flex items-center border border-[#ffffff] rounded-full px-4  w-full max-w-md focus-within:border-gray-400">
            <FiSearch className="text-[#ffffff] mr-2 " size={"25px"} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none bg-transparent"
            />
            <button className=" text-[#ffffff] py-2 hover:text-gray-400">
              Search
            </button>
          </div>

          <div className="lg:flex lg:gap-6 hidden">
            <span className="cursor-pointer">
              <IoLocationSharp size={"25px"} />
            </span>
            <span className="cursor-pointer">
              <FaHeart size={"25px"} />
            </span>

            <span className="lg:flex lg:gap-1.5 cursor-pointer">
              <span>
                <CiShoppingCart size={"25px"} />
              </span>
              <span className="bg-[#ffffff] rounded-full text-[#eb1414] px-2">
                0
              </span>
            </span>
          </div>
        </div>

        {/* nav links */}
        <div className="lg:flex lg:justify-center lg:gap-20 hidden">
          {nav_links.map((link, i) => (
            <span
              className="text-[18px] lg:py-5 font-light cursor-pointer"
              key={i}
            >
              {link.name}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
