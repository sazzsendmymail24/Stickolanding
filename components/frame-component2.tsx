import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <header className="w-[1032px] [backdrop-filter:blur(80px)] rounded-4xl bg-gray-1200 flex flex-row items-start justify-between py-[9px] px-2.5 box-border gap-5 max-w-full z-[1] text-left text-base text-gray-800 font-title1-bold">
        <div className="w-[106px] flex flex-col items-start justify-start pt-[10.4px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[7.3px]">
            <Image
              className="h-[30.2px] w-[30.2px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={30}
              height={30}
              alt=""
              src="/frame.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <Image
                className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                width={69}
                height={17}
                alt=""
                src="/sticko.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[427px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch h-[22px] relative">
            <div className="absolute top-[0px] left-[0px] leading-[140%] flex items-center w-[71px] h-[22px]">
              Features
            </div>
            <div className="absolute top-[0px] left-[98px] leading-[140%] flex items-center w-11 h-[22px]">
              FAQs
            </div>
            <div className="absolute top-[0px] left-[169px] leading-[140%] text-royalblue-100 flex items-center w-[59px] h-[22px]">
              Pricing
            </div>
            <div className="absolute top-[0px] left-[255px] leading-[140%] flex items-center w-[69px] h-[22px]">
              Support
            </div>
            <div className="absolute top-[0px] left-[351px] leading-[140%] flex items-center w-[77px] h-[22px] whitespace-nowrap">
              About Us
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-4">
          <button className="cursor-pointer [border:none] pt-[14.5px] px-0 pb-0 bg-[transparent] flex flex-col items-start justify-start">
            <div className="relative text-base leading-[140%] font-title1-bold text-gray-800 text-left whitespace-nowrap">
              Log in
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[14.5px] pl-[15px] pr-[13px] bg-[transparent] rounded-smi [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-start justify-start gap-2">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <Image
                className="w-5 h-5 relative overflow-hidden shrink-0"
                width={20}
                height={20}
                alt=""
                src="/chrome-logo.svg"
              />
            </div>
            <div className="relative text-base leading-[140%] font-title1-bold text-neutral-100 text-left whitespace-nowrap">
              Add to Chrome
            </div>
          </button>
        </div>
      </header>
    </header>
  );
};

export default FrameComponent2;
