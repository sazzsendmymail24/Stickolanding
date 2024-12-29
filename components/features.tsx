import type { NextPage } from "next";
import Image from "next/image";

export type FeaturesType = {
  className?: string;
};

const Features: NextPage<FeaturesType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[9px] pl-5 pr-[21px] box-border max-w-full text-left text-2xl text-mediumseagreen font-title1-bold ${className}`}
    >
      <div className="w-[786px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq800:flex-wrap">
        <div className="flex-1 rounded-tl-51xl rounded-tr-none rounded-br-none rounded-bl-51xl bg-neutral-100 border-neutral-300 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[85px] px-[55px] pb-[114px] gap-3.5 min-w-[288px] max-w-full mq450:pt-[55px] mq450:px-5 mq450:pb-[74px] mq450:box-border">
          <div className="w-[443px] h-[455.5px] relative rounded-tl-51xl rounded-tr-none rounded-br-none rounded-bl-51xl bg-neutral-100 border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
          <div className="w-[318px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border">
            <div className="flex-1 flex flex-row items-start justify-between gap-5 z-[1] mq450:flex-wrap">
              <Image
                className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
                loading="lazy"
                width={56}
                height={56}
                alt=""
                src="/lifetime-icon.svg"
              />
              <div className="h-[26px] relative uppercase font-semibold inline-block mq450:text-mid">
                infinity
              </div>
            </div>
          </div>
          <h1 className="m-0 w-[319px] relative text-21xl leading-[140%] font-semibold font-[inherit] text-colour-black inline-block z-[1] mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
            1 Device
          </h1>
          <div className="w-[318px] flex flex-col items-start justify-start gap-6 text-lgi text-colour-gray">
            <div className="self-stretch relative leading-[140%] z-[1]">
              For seamless experience
            </div>
            <div className="flex flex-row items-start justify-start gap-2.5 z-[1] text-21xl text-colour-black">
              <div className="relative leading-[140%] font-semibold whitespace-nowrap mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
                $60
              </div>
              <div className="relative leading-[140%] font-semibold text-colour-gray whitespace-nowrap mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">{` $150 `}</div>
            </div>
          </div>
        </div>
        <div className="w-[378px] rounded-tl-none rounded-tr-51xl rounded-br-51xl rounded-bl-none [background:linear-gradient(-28.38deg,_#0077ff,_#2dc2ff)] flex flex-col items-start justify-start pt-[71.8px] px-8 pb-[92.4px] box-border gap-[36.4px] min-w-[378px] max-w-full z-[1] ml-[-35px] text-lgi text-neutral-100 mq450:gap-[18px] mq450:pb-[60px] mq450:box-border mq800:flex-1 mq800:min-w-full mq800:ml-0">
          <div className="w-[288.8px] flex flex-col items-start justify-start gap-7">
            <div className="h-[20.2px] relative leading-[140%] inline-block shrink-0">
              What’s included
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[4.1px] gap-[5px] shrink-0">
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check-3.svg"
                  />
                  <div className="relative leading-[140%]">All Features</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check-3.svg"
                  />
                  <div className="relative leading-[140%]">
                    14 Days Free trial
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check-3.svg"
                  />
                  <div className="relative leading-[140%]">Premium Support</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check-3.svg"
                  />
                  <div className="relative leading-[140%]">Lifetime Use</div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[24.3px] px-5 bg-neutral-100 self-stretch rounded-30xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-gainsboro-100">
            <div className="relative text-lgi leading-[140%] font-semibold font-title1-bold text-colour-black text-left">
              Get Started
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
