import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-4xl text-colour-black font-title1-bold ${className}`}
    >
      <div className="w-[1026px] flex flex-row items-center justify-center gap-[22px] max-w-full mq1125:flex-wrap">
        <div className="flex-1 rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-16 pl-[41px] pr-5 box-border gap-[30px] max-w-full mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[42px] mq450:box-border">
          <Image
            className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
            width={64}
            height={64}
            alt=""
            src="/cardi1.svg"
          />
          <div className="relative leading-[140%] font-semibold mq450:text-lg mq450:leading-[26px]">{`Data Backup & Sync`}</div>
          <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
            Never lose a note! Sticko syncs seamlessly with Google Drive,
            ensuring your notes are always safe and accessible.
          </div>
        </div>
        <div className="flex-1 rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-16 pl-[41px] pr-5 box-border gap-[30px] max-w-full mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[42px] mq450:box-border">
          <Image
            className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
            loading="lazy"
            width={64}
            height={64}
            alt=""
            src="/cardi8.svg"
          />
          <div className="relative leading-[140%] font-semibold mq450:text-lg mq450:leading-[26px]">
            Suitable Canvas
          </div>
          <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
            Choose between Regular, Small, or Large Canvas sizes based on your
            content needs—more space, better organization!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
