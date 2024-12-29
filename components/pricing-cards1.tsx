import type { NextPage } from "next";
import Image from "next/image";

export type PricingCards1Type = {
  className?: string;
};

const PricingCards1: NextPage<PricingCards1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-center pt-0 px-0 pb-[11px] box-border gap-[27.5px] max-w-full text-left text-2xl text-colour-black font-title1-bold mq1125:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.3px] box-border min-w-[296px] max-w-full">
        <div className="self-stretch shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] rounded-51xl bg-neutral-100 border-lavender-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-[38px] px-[39px] pb-11 mq800:pt-[25px] mq800:pb-[29px] mq800:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-royalblue-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-5">
                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                  <Image
                    className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
                    loading="lazy"
                    width={56}
                    height={56}
                    alt=""
                    src="/1devices.svg"
                  />
                  <div className="relative uppercase font-semibold mq450:text-mid">
                    Pro
                  </div>
                </div>
                <h1 className="m-0 self-stretch relative text-21xl leading-[140%] font-semibold font-[inherit] text-colour-black mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
                  1 Device
                </h1>
              </div>
              <div className="self-stretch relative text-lgi leading-[140%] text-colour-gray">
                Best for individual
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[13px] text-41xl font-outfit">
              <div className="h-[76px] relative tracking-[-1px] font-medium inline-block whitespace-nowrap mq450:text-17xl mq800:text-29xl">
                $4
              </div>
              <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0 text-lgi text-colour-gray font-title1-bold">
                <div className="relative leading-[140%] whitespace-nowrap">
                  per month
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[85px] gap-7 text-lgi">
              <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border shrink-0" />
              <div className="self-stretch flex flex-col items-start justify-start gap-3 shrink-0">
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check1.svg"
                  />
                  <div className="flex-1 relative leading-[140%]">
                    All Features
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check1.svg"
                  />
                  <div className="flex-1 relative leading-[140%]">
                    14 Days Free trial
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-4">
                  <Image
                    className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                    width={28}
                    height={28}
                    alt=""
                    src="/check1.svg"
                  />
                  <div className="flex-1 relative leading-[140%]">
                    Premium Support
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[25.5px] px-5 bg-[transparent] self-stretch rounded-30xl [background:linear-gradient(82.35deg,_#0077ff,_#2dc2ff)] flex flex-row items-start justify-center whitespace-nowrap">
              <div className="relative text-lgi leading-[140%] font-semibold font-title1-bold text-neutral-100 text-left">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[133px] box-border min-w-[296px] min-h-[773px] max-w-full text-neutral-100 mq450:pb-14 mq450:box-border mq800:pb-[86px] mq800:box-border">
        <div className="self-stretch shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] rounded-51xl [background:linear-gradient(-28.38deg,_#0077ff,_#2dc2ff)] border-lavender-200 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start py-[38px] px-[39px] gap-6 mq800:pt-[25px] mq800:pb-[25px] mq800:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <div className="self-stretch flex flex-col items-start justify-start gap-5">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                <Image
                  className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
                  loading="lazy"
                  width={56}
                  height={56}
                  alt=""
                  src="/5devices.svg"
                />
                <div className="relative uppercase font-semibold mq450:text-mid">
                  Diamond
                </div>
              </div>
              <h1 className="m-0 self-stretch relative text-21xl leading-[140%] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
                5 Devices
              </h1>
            </div>
            <div className="self-stretch relative text-lgi leading-[140%]">
              Best for family use
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1 gap-[25px] text-41xl font-outfit">
            <div className="h-[76px] relative tracking-[-1px] font-medium inline-block whitespace-nowrap mq450:text-17xl mq800:text-29xl">
              $14
            </div>
            <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0 text-lgi font-title1-bold">
              <div className="relative leading-[140%] whitespace-nowrap">
                per month
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-7 text-lgi">
            <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="self-stretch flex flex-row items-start justify-start gap-4">
                <Image
                  className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                  width={28}
                  height={28}
                  alt=""
                  src="/check-3.svg"
                />
                <div className="flex-1 relative leading-[140%]">
                  All Features
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
                <div className="flex-1 relative leading-[140%]">
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
                <div className="flex-1 relative leading-[140%]">
                  Premium Support
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[26px] px-5 bg-neutral-100 self-stretch rounded-30xl flex flex-row items-start justify-center whitespace-nowrap hover:bg-gainsboro-100">
            <div className="relative text-lgi leading-[140%] font-semibold font-title1-bold text-colour-black text-left">
              Get Started
            </div>
          </button>
        </div>
      </div>
      <div className="flex-[0.7975] shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] rounded-51xl bg-neutral-100 border-lavender-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[38px] px-[39px] gap-11 min-w-[296px] max-w-full text-darkorange-100 mq450:gap-[22px] mq450:flex-1 mq800:pt-[25px] mq800:pb-[25px] mq800:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-5">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <Image
              className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
              loading="lazy"
              width={56}
              height={56}
              alt=""
              src="/custom-devices.svg"
            />
            <div className="relative uppercase font-semibold mq450:text-mid">
              Custom
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-21xl text-colour-black">
            <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
              10 Devices
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-lgi text-colour-gray">
              <div className="self-stretch relative leading-[140%]">
                For big team user
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-5 text-41xl text-colour-black font-outfit">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <div className="h-[76px] relative tracking-[-1px] font-medium inline-block whitespace-nowrap mq450:text-17xl mq800:text-29xl">
                    $40
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0 text-lgi text-colour-gray font-title1-bold">
                    <div className="relative leading-[140%] whitespace-nowrap">
                      per month
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-7 text-lg text-neutral-800 font-text-single-300-bold">
                  <div className="flex flex-row items-start justify-start gap-[21px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                      <div className="relative leading-[30px] whitespace-nowrap">
                        How many users
                      </div>
                    </div>
                    <div className="rounded-mini bg-neutral-100 border-neutral-400 border-[1px] border-solid flex flex-row items-start justify-start py-[13px] px-10 text-xl">
                      <div className="h-[52px] w-[102px] relative rounded-mini bg-neutral-100 border-neutral-400 border-[1px] border-solid box-border hidden" />
                      <b className="relative leading-[22px] z-[1] mq450:text-base mq450:leading-[18px]">
                        10
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-3 text-lgi text-colour-black font-title1-bold">
                    <div className="self-stretch flex flex-row items-start justify-start gap-4">
                      <Image
                        className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                        width={28}
                        height={28}
                        alt=""
                        src="/check1.svg"
                      />
                      <div className="flex-1 relative leading-[140%]">
                        All Features
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-4">
                      <Image
                        className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                        width={28}
                        height={28}
                        alt=""
                        src="/check1.svg"
                      />
                      <div className="flex-1 relative leading-[140%]">
                        14 Days Free trial
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-4">
                      <Image
                        className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0 min-h-[28px]"
                        width={28}
                        height={28}
                        alt=""
                        src="/check1.svg"
                      />
                      <div className="flex-1 relative leading-[140%]">
                        Premium Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[25.5px] px-5 bg-[transparent] self-stretch rounded-20xl [background:linear-gradient(82.35deg,_#0077ff,_#2dc2ff)] flex flex-row items-start justify-center whitespace-nowrap">
          <div className="relative text-lgi leading-[140%] font-semibold font-title1-bold text-neutral-100 text-left">
            Get Started
          </div>
        </button>
      </div>
    </div>
  );
};

export default PricingCards1;
