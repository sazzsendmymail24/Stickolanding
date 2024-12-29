import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-29xl text-gray-800 font-title1-bold ${className}`}
    >
      <div className="w-[1240px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1125:flex-wrap">
        <div className="w-[548px] flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[548px] max-w-full mq450:pt-[66px] mq450:box-border mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-14 z-[1] mq800:gap-7">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 self-stretch relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(97.56deg,_#0077ff,_#2dc2ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                  Ideas Organized
                </h1>
                <h1 className="m-0 self-stretch relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] z-[1] mt-[-8px] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                  Never lose again!
                </h1>
              </div>
              <div className="self-stretch relative text-lgi leading-[140%] text-lightslategray">
                <span>{`With Sticko, `}</span>
                <span className="text-gray-800">
                  easily capture, organize, and sync your ideas
                </span>
                <span>
                  {" "}
                  across devices, ensuring you never lose a thought again.
                </span>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 pl-5 pr-[19px] bg-neutral-100 rounded-2xl flex flex-row items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <Image
                  className="w-[46px] h-10 relative rounded-md overflow-hidden shrink-0 object-cover"
                  width={46}
                  height={40}
                  alt=""
                  src="/chrome-store@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="relative text-base-9 leading-[20px] font-inter text-black text-left">
                  Install from
                </div>
                <div className="relative text-xl-2 leading-[24px] font-inter text-black text-left whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                  Chrome Web Store
                </div>
              </div>
            </button>
          </div>
        </div>
        <Image
          className="h-[531px] flex-1 relative max-w-full overflow-hidden min-w-[450px] z-[1] mq800:min-w-full"
          loading="lazy"
          width={692}
          height={531}
          alt=""
          src="/group-1597883265.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
