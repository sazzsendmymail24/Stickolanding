import type { NextPage } from "next";

export type PricingType = {
  className?: string;
};

const Pricing: NextPage<PricingType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[9px] pl-5 pr-[21px] box-border max-w-full text-center text-3xl text-neutral-100 font-text-single-300-bold ${className}`}
    >
      <div className="w-[786.5px] flex flex-col items-start justify-start gap-[8.1px] max-w-full">
        <div className="w-[118.2px] flex flex-row items-start justify-start py-0 px-[30px] box-border">
          <div className="flex-1 rounded-24xl [background:linear-gradient(-28.38deg,_#0077ff,_#2dc2ff),_#4a3aff] flex flex-row items-start justify-start pt-[7.5px] pb-[18.3px] pl-3 pr-[11px]">
            <div className="h-[43px] w-[57.5px] relative rounded-24xl [background:linear-gradient(-28.38deg,_#0077ff,_#2dc2ff),_#4a3aff] hidden" />
            <b className="flex-1 relative leading-[17.2px] z-[1] mq450:text-lg mq450:leading-[22px]">
              1
            </b>
          </div>
        </div>
        <div className="self-stretch h-[23px] relative">
          <div className="absolute top-[7px] left-[0px] rounded-xl [background:linear-gradient(78.64deg,_#0077ff,_#2dc2ff)] w-[786px] h-2.5" />
          <div className="absolute top-[6px] left-[24.5px] rounded-xl bg-neutral-300 w-[762px] h-[13px] z-[1]" />
          <div className="absolute top-[0px] left-[16.5px] shadow-[0px_2px_4px_rgba(20,_20,_43,_0.08)] rounded-[50%] bg-neutral-100 border-neutral-400 border-[0px] border-solid box-border w-[23px] h-[23px] z-[2]" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
