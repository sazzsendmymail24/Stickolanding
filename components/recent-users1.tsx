import type { NextPage } from "next";
import Image from "next/image";

export type RecentUsers1Type = {
  className?: string;
  edit?: string;
};

const RecentUsers1: NextPage<RecentUsers1Type> = ({ className = "", edit }) => {
  return (
    <div
      className={`rounded-32xl bg-neutral-100 border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 pl-3 pr-10 gap-[53px] max-w-full text-left text-base text-colour-gray font-title1-bold mq850:gap-[26px] mq850:flex-wrap ${className}`}
    >
      <Image
        className="h-[63px] w-[58px] relative object-cover"
        loading="lazy"
        width={58}
        height={63}
        alt=""
        src="/bitmap1@2x.png"
      />
      <div className="w-[521.3px] flex flex-row items-center justify-center gap-[23px] max-w-full mq675:flex-wrap">
        <div className="flex-1 relative leading-[140%] inline-block min-w-[119px] shrink-0">
          Jonny Rich
        </div>
        <div className="flex-1 relative leading-[140%] text-colour-black inline-block min-w-[119px] whitespace-nowrap shrink-0">
          jonny@gmail.com
        </div>
        <div className="w-28 rounded-81xl bg-whitesmoke flex flex-row items-center justify-center py-[9.5px] px-0 box-border text-center text-black">
          <div className="flex-1 relative leading-[140%] shrink-0">{edit}</div>
        </div>
      </div>
      <Image
        className="h-5 w-[3.7px] relative"
        loading="lazy"
        width={4}
        height={20}
        alt=""
        src="/group-73.svg"
      />
    </div>
  );
};

export default RecentUsers1;
