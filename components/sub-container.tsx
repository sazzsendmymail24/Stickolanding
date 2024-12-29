import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

export type SubContainerType = {
  className?: string;
};

const SubContainer: NextPage<SubContainerType> = ({ className = "" }) => {
  const onStickoLogoContainerClick = useCallback(() => {
    // Please sync "Sticko" to the project
  }, []);

  const onGetItNowClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start py-[100px] px-5 box-border gap-8 bg-[url('/sub-container@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[416px] max-w-full text-center text-14xl text-colour-black font-title1-bold mq450:gap-4 mq450:min-w-full mq750:pt-[65px] mq750:pb-[65px] mq750:box-border ${className}`}
    >
      <div className="w-[376px] flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div
          className="w-[168.9px] flex flex-row items-end justify-start gap-[11.6px] cursor-pointer"
          onClick={onStickoLogoContainerClick}
        >
          <Image
            className="h-[48.1px] w-[48.1px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={48}
            height={48}
            alt=""
            src="/frame1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9.6px]">
            <Image
              className="self-stretch h-[27.7px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              width={109}
              height={28}
              alt=""
              src="/sticko1.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[376px] flex flex-col items-start justify-start gap-[11px] max-w-full">
        <h1 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(97.56deg,_#0077ff,_#2dc2ff),_#191919] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-xl mq450:leading-[28px] mq1050:text-7xl mq1050:leading-[37px]">
          Login
        </h1>
        <div className="relative text-base leading-[140%] text-left">
          Let’s login to your sticko account
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[18px] max-w-full mq450:flex-wrap">
        <button className="cursor-pointer [border:none] py-[18.8px] px-[34px] bg-neutral-100 rounded-2xl flex flex-row items-start justify-start gap-[9px] whitespace-nowrap hover:bg-gainsboro-100">
          <Image
            className="h-[23.4px] w-[23px] relative object-cover min-h-[23px]"
            loading="lazy"
            width={23}
            height={23}
            alt=""
            src="/google-1@2x.png"
          />
          <div className="relative text-base leading-[140%] font-title1-bold text-gray-100 text-left">
            Log in with google
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[19.5px] pl-[21px] pr-5 bg-aliceblue-400 rounded-2xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-200">
          <div className="relative text-base leading-[140%] font-title1-bold text-royalblue-100 text-left">
            Sign Up
          </div>
        </button>
      </div>
      <div className="w-[376px] flex flex-col items-center justify-center max-w-full text-left text-base text-royalblue-100 mq450:gap-[15px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-3">
          <div className="rounded-2xl bg-gray-500 border-royalblue-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[15px] pl-[18px] pr-[214px] gap-3.5 min-w-[226px] mq450:pr-5 mq450:box-border">
            <Image
              className="h-[18px] w-4 relative min-h-[18px]"
              loading="lazy"
              width={16}
              height={18}
              alt=""
              src="/vector1.svg"
            />
            <input
              className="[border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-gray-100 text-left whitespace-nowrap"
              type="text"
            />
          </div>
          <div className="self-stretch rounded-2xl bg-gray-500 flex flex-row items-center justify-between py-3.5 px-[18px] box-border min-w-[226px] gap-5">
            <div className="w-[93px] flex flex-row items-center justify-between">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/frame-121.svg"
              />
              <input
                className="[border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-colour-gray text-left"
                type="text"
              />
            </div>
            <Image
              className="h-2 w-5 relative"
              loading="lazy"
              width={20}
              height={8}
              alt=""
              src="/vector-121.svg"
            />
          </div>
          <div className="self-stretch h-[94.9px] flex flex-col items-end justify-between">
            <button
              className="cursor-pointer [border:none] py-[15px] px-5 bg-[transparent] self-stretch rounded-2xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-center justify-center mq450:pl-5 mq450:pr-5 mq450:box-border"
              onClick={onGetItNowClick}
            >
              <div className="relative text-base leading-[140%] font-title1-bold text-neutral-100 text-left">
                Login
              </div>
            </button>
            <a className="[text-decoration:none] relative leading-[140%] text-[inherit]">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubContainer;
