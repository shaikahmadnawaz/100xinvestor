import React from "react";

const Hero = () => {
  return (
    <header className="relative">
      <img
        src="/src/assets/star1.svg"
        className="h-[27px] absolute inline w-[27px]"
        alt="starOne"
      />
      <div className="flex flex-row font-gelasio items-center justify-center mx-auto w-full">
        <img
          src="/src/assets/star5.svg"
          className="h-[27px] absolute inline w-[27px]"
          alt="starFive"
        />

        <div className="absolute -top-4 py-24 justify-center m-auto w-full">
          <div className="auto w-full">
            <div className="flex h-max inset-[0] items-center justify-center m-auto w-full">
              <img
                src="/src/assets/hero-arrow.svg"
                className="h-[123px] inline absolute right-[570px] -top-[-60px]"
                alt="vectorThirtySeven"
              />
              <h4 className="font-semibold absolute shadow-xl px-4 py-4 top-10 right-80 w-60 text-blue_gray_900 text-center">
                <span className="md:text-xl sm:text-lg text-blue_gray_900 text-[22px] font-poppins">
                  Save{" "}
                </span>
                <span className="md:text-xl sm:text-lg text-light_blue_500 text-[22px] font-poppins">
                  10000 Hours
                </span>
                <span className="md:text-xl sm:text-lg text-blue_gray_900 text-[22px] font-poppins">
                  {" "}
                  of Research
                </span>
              </h4>
              <div className="flex flex-row md:gap-10 items-start justify-center w-full">
                <div className="flex items-center mr-[500px] justify-start">
                  <img
                    src="/src/assets/hero1.png"
                    className="h-[450px] object-cover w-full"
                    alt="hero1"
                  />
                </div>

                <h1 className="text-blue_gray_900 mt-28 w-[620px] absolute font-gelasio font-black text-4xl text-center">
                  Connect with the Best investors to fund your startups.
                </h1>
                <h6 className="font-medium absolute top-80 font-gelasio text-blue_gray_400 text-center w-[500px]">
                  100xInvestor saves you hundreds of hours by aggregating data
                  on 7,000+ venture capitalists, angel investors, and PE funds
                  in one place, complete with their investment preferences and
                  contact info, PlayBook How to raise funds in 20 days.
                </h6>
                <button className="bg-light_blue_500 absolute top-[420px] font-poppins text-white_A700 w-32 text-base rounded-full font-medium shadow-light_blue_500 px-6 py-2">
                  Get Now
                </button>
                <div className="flex items-center mt-32 justify-end">
                  <img
                    src="/src/assets/hero2.png"
                    className="h-[450px] object-cover w-full"
                    alt="rectangleThree"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[145px] inset-x-[0] items-center justify-start mx-auto w-3/5">
              <div className="flex flex-col font-poppins items-center justify-start w-1/5 md:w-full">
                <div className="md:h-[57px] h-[59px] relative w-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-poppins h-max inset-y-[0] justify-start my-auto right-[2%] w-[81%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[448px] w-[66%] md:w-full">
              <img
                src="/src/assets/star7.svg"
                className="h-[27px] inline absolute  w-[27px]"
                alt="starSeven"
              />

              <img
                src="/src/assets/star4.svg"
                className="h-[27px] inline absolute w-[27px]"
                alt="starFour"
              />
            </div>

            <img
              src="/src/assets/hero-up.svg"
              className="absolute top-5 left-44 h-[106px]"
              alt="vectorEight"
            />
            <div className="flex flex-row items-start justify-between mt-[18px] w-[36%] md:w-full">
              <div className="bg-white_A700 absolute top-36 left-20 shadow-xl flex flex-col items-start justify-start rounded-md shadow-bs w-auto px-3 py-2">
                <h4 className="font-semibold w-20 text-blue_gray_900 text-center">
                  <span className="text-light_blue_500">24*7</span> Support
                </h4>
              </div>
              <img
                src="/src/assets/star3.svg"
                className="h-[27px] absolute inline w-[27px]"
                alt="starThree"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/src/assets/star6.svg"
        className="h-[27px] absolute inline w-[27px]"
        alt="starSix"
      />
    </header>
  );
};

export default Hero;
