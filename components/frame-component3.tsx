import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-29xl text-colour-black font-title1-bold ${className}`}
    >
      <div className="w-[1240px] flex flex-row items-start justify-start relative max-w-full">
        <Image
          className="h-[983px] w-[1437px] absolute !m-[0] top-[-243px] left-[-99px] overflow-hidden shrink-0"
          width={1437}
          height={983}
          alt=""
          src="/background-pattern.svg"
        />
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-5 box-border gap-[46.5px] max-w-full z-[1] mq800:gap-[23px]">
          <div className="w-[626px] h-[66.3px] flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
            <Image
              className="h-[66.3px] w-[184.1px] relative"
              loading="lazy"
              width={184}
              height={66}
              alt=""
              src="/sticko-logo-fixelfy.svg"
            />
          </div>
          <div className="w-[626px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[10.9px] box-border gap-[11.3px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] inline-block [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] max-w-full mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                  Keep Your Ideas at Hand
                </h1>
                <div className="w-[337.4px] !m-[0] absolute right-[44.6px] bottom-[-89.2px] flex flex-row items-start justify-start pt-3 px-[13px] pb-[10.4px] box-border z-[1] text-black">
                  <h1 className="m-0 flex-1 relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                    Productivity
                  </h1>
                  <Image
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    loading="lazy"
                    width={337}
                    height={89}
                    alt=""
                    src="/group-1597883251.svg"
                  />
                </div>
              </div>
              <div className="w-[266px] flex flex-row items-start justify-start py-0 pl-[60px] pr-[59px] box-border text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h1 className="m-0 flex-1 relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                  Boost
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[626px] relative text-lgi leading-[140%] text-dimgray-100 text-center flex items-center justify-center max-w-full">
            Sticko is a browser extension that helps you capture, organize, and
            sync notes seamlessly, boosting productivity with customizable
            themes and Google Drive integration.
          </div>
          <div className="w-[626px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-row items-start justify-center gap-[22px] max-w-full mq450:flex-wrap">
              <button className="cursor-pointer [border:none] py-[18.5px] pl-[45px] pr-11 bg-[transparent] rounded-23xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-start justify-start whitespace-nowrap">
                <div className="relative text-base leading-[140%] font-semibold font-title1-bold text-neutral-100 text-left">
                  Get it now
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[18.5px] px-[50px] bg-neutral-100 shadow-[-2px_9px_12.6px_#eaf4ff] rounded-24xl flex flex-row items-start justify-start hover:bg-gainsboro-100">
                <div className="relative text-base leading-[140%] font-semibold font-title1-bold text-darkslategray-200 text-left">
                  Pricing
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
