import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-4xl text-colour-black font-title1-bold ${className}`}
    >
      <div className="w-[1026px] flex flex-row items-start justify-center gap-[22px] max-w-full mq1125:flex-wrap">
        <div className="flex-1 rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-[134px] pl-[41px] pr-5 box-border gap-[30px] max-w-full mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[87px] mq450:box-border">
          <Image
            className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
            loading="lazy"
            width={64}
            height={64}
            alt=""
            src="/cardi9.svg"
          />
          <div className="relative leading-[140%] font-semibold mq450:text-lg mq450:leading-[26px]">
            Outstanding Support 💁‍♂️
          </div>
          <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
            We’ve got your back! Reach out anytime, and our team will assist you
            with any issues or questions promptly.
          </div>
        </div>
        <div className="flex-1 rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-[47px] pl-[41px] pr-5 box-border gap-[30px] max-w-full text-lgi mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[31px] mq450:box-border">
          <Image
            className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
            loading="lazy"
            width={64}
            height={64}
            alt=""
            src="/cardi10.svg"
          />
          <div className="relative leading-[140%] font-semibold">
            Text Formatting
          </div>
          <div className="w-[403px] relative text-base leading-[140%] text-colour-gray flex items-center max-w-full">
            Style your notes with bold, italics, underlines, and more. Customize
            your text to stay organized and creative.
          </div>
          <div className="w-[373px] flex flex-col items-start justify-start gap-2 max-w-full text-xs text-gray-500 font-inter">
            <div className="flex flex-row items-start justify-start py-0 px-3.5">
              <div className="rounded bg-black flex flex-row items-start justify-start py-[8.5px] pl-[9px] pr-1.5">
                <div className="relative tracking-[-0.01em] leading-[8px] font-semibold">
                  Color
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 text-neutral-100 mq450:flex-wrap">
              <div className="h-10 w-[198px] flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[17px] box-border gap-x-[21.8px] gap-y-2.5">
                <Image
                  className="h-3 w-3.5 relative"
                  width={14}
                  height={12}
                  alt=""
                  src="/vector1.svg"
                />
                <Image
                  className="h-[15px] w-[17px] relative"
                  width={17}
                  height={15}
                  alt=""
                  src="/vector-12.svg"
                />
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/vector-21.svg"
                />
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/vector-3.svg"
                />
                <Image
                  className="h-3 w-[9px] relative"
                  width={9}
                  height={12}
                  alt=""
                  src="/vector-4.svg"
                />
                <Image
                  className="h-3 w-[13px] relative"
                  width={13}
                  height={12}
                  alt=""
                  src="/vector-5.svg"
                />
                <Image
                  className="h-3 w-3 relative"
                  width={12}
                  height={12}
                  alt=""
                  src="/vector-6.svg"
                />
                <Image
                  className="h-[9px] w-3 relative"
                  width={12}
                  height={9}
                  alt=""
                  src="/vector-7.svg"
                />
                <Image
                  className="h-3 w-[13px] relative"
                  width={13}
                  height={12}
                  alt=""
                  src="/vector-8.svg"
                />
                <Image
                  className="h-[9px] w-4 relative"
                  width={16}
                  height={9}
                  alt=""
                  src="/vector-9.svg"
                />
                <Image
                  className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
                  width={15}
                  height={15}
                  alt=""
                  src="/frame-12.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                  <div className="rounded [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-start justify-start py-[8.5px] pl-[7px] pr-1">
                    <div className="relative tracking-[-0.01em] leading-[8px] font-semibold">
                      Copied
                    </div>
                  </div>
                </div>
                <Image
                  className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                  width={19}
                  height={19}
                  alt=""
                  src="/frame-21.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
