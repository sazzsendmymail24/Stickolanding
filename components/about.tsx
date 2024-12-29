import type { NextPage } from "next";
import Image from "next/image";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-29xl text-gray-800 font-title1-bold ${className}`}
    >
      <div className="w-[1240px] flex flex-row items-start justify-start gap-[130.5px] max-w-full mq450:gap-4 mq800:gap-[33px] mq1125:flex-wrap mq1300:gap-[65px]">
        <div className="h-[597px] flex-1 flex flex-col items-start justify-between min-w-[395px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[34px] shrink-0 mq800:gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-between">
              <h1 className="m-0 self-stretch relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(97.56deg,_#0077ff,_#2dc2ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">{`Sticko by Fixefly `}</h1>
              <h1 className="m-0 self-stretch relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                UI/UX agency
              </h1>
            </div>
            <div className="self-stretch relative text-lgi leading-[140%] text-slategray-100 text-justify">
              <p className="m-0">
                We’ve all been there working in the browser, copying text, and
                suddenly having a great idea, only to forget it! Switching tabs
                or openings windows notepad to copy multiple pieces of text is
                such a hassle.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                So, we at Fixefly thought, “Why not make life easier?”
              </p>
              <p className="m-0">{`We’ve created an incredibly easy-to-use extension that keeps your notes and ideas right at your fingertips. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`Whether you're a student, developer, or designer, Sticko helps you stay organized and productive without the hassle. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                No more lost thoughts just smooth, productive vibes! 🚀💡
              </p>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-[34px] bg-[transparent] w-[234px] rounded-24xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-center justify-between box-border whitespace-nowrap gap-4">
            <div className="relative text-lgi leading-[140%] font-semibold font-title1-bold text-neutral-100 text-left">
              Let’s Try Free
            </div>
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/arrowright.svg"
            />
          </button>
        </div>
        <div className="h-[709px] w-[501.5px] flex flex-row items-start justify-start relative min-w-[501.5px] max-w-full mq800:min-w-full mq1125:flex-1">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <Image
              className="absolute top-[354.4px] left-[0px] w-[501.5px] h-[354.6px] object-contain"
              width={502}
              height={355}
              alt=""
              src="/fixefly-3d-2@2x.png"
            />
            <Image
              className="absolute top-[0px] left-[2.9px] w-[495.7px] h-[555.9px] object-cover z-[1]"
              loading="lazy"
              width={496}
              height={556}
              alt=""
              src="/fixefly-3d-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
