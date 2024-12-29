import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type DragTheExtensionAnywhere1Type = {
  className?: string;
  themesIcon: string;
  amazingThemes?: string;
  personalizeYourExperienceWith?: string;

  /** Style props */
  themesIconHeight?: CSSProperties["height"];
};

const DragTheExtensionAnywhere1: NextPage<DragTheExtensionAnywhere1Type> = ({
  className = "",
  themesIcon,
  themesIconHeight,
  amazingThemes,
  personalizeYourExperienceWith,
}) => {
  const themesIconStyle: CSSProperties = useMemo(() => {
    return {
      height: themesIconHeight,
    };
  }, [themesIconHeight]);

  return (
    <div
      className={`self-stretch rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-16 pl-[41px] pr-5 box-border gap-[30px] max-w-full text-left text-4xl text-colour-black font-title1-bold mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[42px] mq450:box-border ${className}`}
    >
      <div className="w-16 rounded-xl border-aliceblue-300 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-3.5 px-[15px]">
        <div className="h-8 flex flex-row items-center justify-center py-1 px-0.5 box-border">
          <Image
            className="h-7 w-7 relative"
            loading="lazy"
            width={28}
            height={28}
            alt=""
            src={themesIcon}
            style={themesIconStyle}
          />
        </div>
      </div>
      <div className="relative leading-[140%] font-semibold mq450:text-lg mq450:leading-[26px]">
        {amazingThemes}
      </div>
      <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
        {personalizeYourExperienceWith}
      </div>
    </div>
  );
};

export default DragTheExtensionAnywhere1;
