const Footer = () => {
  return (
    <div>
      <div className="flex flex-col mb-20 font-poppins gap-[29px] items-center justify-start max-w-[1680px] mt-20 mx-auto md:px-5 w-full">
        <div className="flex flex-col gap-[29px] items-center justify-start w-full">
          <div className="bg-light_blue_500 h-px w-full"></div>
          <div className="flex flex-col items-center justify-start w-[79%] px-32 md:w-full">
            <div className="flex flex-row md:gap-10 gap-[359px] items-start justify-between w-auto md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[19%] md:w-full">
                <img
                  src="logo.png"
                  className="h-[78px] md:h-auto object-cover w-[78px]"
                  alt="imageThree_One"
                />
                <h3 className="text-blue_gray_700 font-semibold text-center">
                  100xInvestor
                </h3>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start">
                <h5 className="font-medium text-blue_gray_900 text-center">
                  Company
                </h5>
                <h6 className="font-normal text-center text-gray_700">
                  Team@100xinvestor.xyz
                </h6>
              </div>
              <div className="flex flex-col gap-[13px] items-end justify-end w-[12%] md:w-full">
                <h5 className="font-medium text-blue_gray_900 text-center">
                  Legal
                </h5>
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                    <a
                      href="#"
                      className="font-normal text-center text-gray_700"
                    >
                      <h6>Terms of Service</h6>
                    </a>
                    <a
                      href="#"
                      className="font-normal text-center text-gray_700"
                    >
                      <h6>Privacy Policy</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer bg-light_blue_500 py-3 font-semibold leading-[normal] max-w-[1680px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-full">
          Copyright © 2022 100xinvestor, Inc. All Rights Reserved.
        </button>
      </div>
    </div>
  );
};

export default Footer;
