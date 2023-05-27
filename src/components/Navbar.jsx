import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-center w-full bg-blue_gray_100 px-10 my-5">
      <div className="flex flex-row  space-x-3 items-center justify-start w-24">
        <img
          src="/src/assets/logo.png"
          className="h-[78px] w-[78px]"
          alt="logo"
        />
        <h1 className="text-blue_gray_700 text-center text-2xl font-bold">
          100xInvestor
        </h1>
      </div>

      <div className="flex items-start justify-center w-full">
        <ul className="flex items-center justify-center space-x-10">
          <li>
            <a
              href="#"
              className="hover:font-semibold font-semibold text-center text-blue_gray_900 hover:text-light_blue_500 text-md"
            >
              <h2>Home</h2>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:font-semibold font-semibold text-center text-blue_gray_900 hover:text-light_blue_500 text-md"
            >
              <h2>Pricing</h2>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:font-semibold font-semibold text-center text-blue_gray_900 hover:text-light_blue_500 text-md"
            >
              <h2>Testimonials</h2>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:font-semibold font-semibold text-center text-blue_gray_900 hover:text-light_blue_500 text-md"
            >
              <h2>Investors</h2>
            </a>
          </li>
        </ul>
      </div>
      <button className="bg-light_blue_500 text-white_A700 w-32 text-base rounded-full font-medium shadow-light_blue_500 px-6 py-2">
        Get Now
      </button>
    </nav>
  );
};

export default Navbar;
