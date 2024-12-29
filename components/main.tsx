import type { NextPage } from "next";
import Image from "next/image";
import SubContainer from "./sub-container";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-aliceblue-100 max-w-full flex flex-row items-start justify-start flex-wrap content-start leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-9xl text-neutral-100 font-title1-bold mq1125:flex-wrap">
        <SubContainer />
        <div className="w-[800px] flex flex-col items-start justify-start pt-[180px] pb-9 pl-[216px] pr-[206px] box-border gap-[25px] bg-[url('/footer@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[800px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[108px] mq1050:pr-[103px] mq1050:box-border mq1050:min-w-full mq750:pt-[117px] mq750:pb-[23px] mq750:box-border mq1125:flex-1">
          <h2 className="m-0 relative text-inherit leading-[140%] font-semibold font-[inherit] z-[1] mq450:text-3xl mq450:leading-[31px]">
            Sticko by Fixefly
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5">
            <h2 className="m-0 w-[238px] h-[78px] relative text-inherit leading-[140%] font-normal font-[inherit] inline-block z-[1] mq450:text-3xl mq450:leading-[31px]">
              Keep Your Ideas at Hand
            </h2>
            <div className="self-stretch flex flex-row items-start justify-end relative">
              <div className="w-[298.7px] flex flex-row items-start justify-start relative">
                <div className="h-[431px] w-[310px] absolute !m-[0] top-[-198px] left-[-107px]">
                  <div className="absolute top-[calc(50%_-_215.5px)] left-[calc(50%_-_155px)] [backdrop-filter:blur(13.6px)] rounded-27xl bg-gray-700 border-gray-600 border-[1px] border-solid box-border w-full h-full" />
                </div>
                <Image
                  className="h-[335px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  width={299}
                  height={335}
                  alt=""
                  src="/fixefly-logo-3d@2x.png"
                />
              </div>
              <Image
                className="h-[79px] w-[79px] absolute !m-[0] top-[17px] left-[-67px] z-[1]"
                loading="lazy"
                width={79}
                height={79}
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
