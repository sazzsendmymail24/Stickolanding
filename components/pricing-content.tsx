import type { NextPage } from "next";

export type PricingContentType = {
  className?: string;
};

const PricingContent: NextPage<PricingContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base text-royalblue-100 font-title1-bold ${className}`}
    >
      <div className="w-[632px] flex flex-col items-start justify-start gap-[45px] max-w-full mq800:gap-[22px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10.5px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left">
            <div className="relative leading-[140%]">PRICING</div>
          </div>
          <h1 className="m-0 self-stretch relative text-29xl [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] text-colour-black [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">{`Easy Plan No Surprise `}</h1>
          <div className="self-stretch relative text-lgi leading-[140%] text-colour-gray">{`Knowledge, tips & tricks gained when mastering of every new Figma feature - all included in the kit.`}</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-colour-black">
          <div className="w-[255px] flex flex-row items-start justify-start gap-[22px]">
            <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
              <div className="relative leading-[140%]">Monthly</div>
            </div>
            <div className="h-[33px] flex-1 relative rounded-xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff),_#0077ff]">
              <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff),_#0077ff] w-full h-full hidden" />
              <div className="absolute top-[4px] left-[43px] rounded-[50%] bg-neutral-100 w-[25px] h-[25px] z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
              <div className="relative leading-[140%]">Annually</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingContent;
