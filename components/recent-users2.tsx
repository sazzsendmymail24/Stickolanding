import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import RecentUsers1 from "./recent-users1";

export type RecentUsers2Type = {
  className?: string;
};

const RecentUsers2: NextPage<RecentUsers2Type> = ({ className = "" }) => {
  const onRecentUsersContainerClick = useCallback(() => {
    // Please sync "User Management" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-[15px] max-w-full cursor-pointer text-left text-base text-colour-gray font-title1-bold mq725:pl-[71px] mq725:pr-[71px] mq725:box-border mq675:pl-[35px] mq675:pr-[35px] mq675:box-border ${className}`}
      onClick={onRecentUsersContainerClick}
    >
      <RecentUsers1 edit="Editor" />
      <RecentUsers1 edit="Admin" />
      <div className="rounded-32xl bg-neutral-100 border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-2 pl-3 pr-10 gap-[53px] max-w-full mq850:gap-[26px] mq850:flex-wrap">
        <Image
          className="h-[63px] w-[58px] relative object-cover"
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
          <button className="cursor-pointer [border:none] py-[9.5px] px-0 bg-whitesmoke w-28 rounded-81xl flex flex-row items-center justify-center box-border hover:bg-gainsboro-300">
            <div className="flex-1 relative text-base leading-[140%] font-title1-bold text-black text-center shrink-0">
              Editor
            </div>
          </button>
        </div>
        <Image
          className="h-5 w-[3.7px] relative"
          width={4}
          height={20}
          alt=""
          src="/group-73.svg"
        />
      </div>
    </div>
  );
};

export default RecentUsers2;
