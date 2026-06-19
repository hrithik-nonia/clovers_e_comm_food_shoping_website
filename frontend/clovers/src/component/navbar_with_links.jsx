import { GiRamProfile } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div>
        {/* heading */}
        <div className="text-[#ffffff] bg-[#8C0000] flex lg:justify-between justify-center lg:px-16 py-4 font-thin text-[15px]">
          <span className="hidden lg:inline">
            <span className="lg:mr-10">About Us</span>
            <span>Customer Support</span>
          </span>

          <span>Get 20% off your first order. Subscribe</span>

          <button className="lg:flex lg:gap-3 hidden">
            <span>
              <GiRamProfile size={"20px"} />
            </span>
            <span className="hover:text-[#eb1414]">Log in</span>
          </button>
        </div>

        {/* navbar */}
        {/* nav links */}
      </div>
    </>
  );
};
export default Navbar;
