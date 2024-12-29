import type { NextPage } from "next";
import Image from "next/image";
import DragTheExtensionAnywhere1 from "./drag-the-extension-anywhere1";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-29xl text-gray-800 font-title1-bold ${className}`}
    >
      <div className="w-[1026px] flex flex-col items-start justify-start gap-[60px] max-w-full mq1125:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[498px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 w-[213px] relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(97.56deg,_#0077ff,_#2dc2ff),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                Features
              </h1>
            </div>
            <h1 className="m-0 self-stretch relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
              Here is what you get
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[22px] max-w-full text-4xl text-colour-black">
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[326px] max-w-full">
            <div className="self-stretch shadow-[0px_4px_32px_rgba(214,_233,_255,_0.71)] rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-[37px] pl-[41px] pr-5 box-border gap-[30px] max-w-full mq450:gap-[15px] mq450:pt-[34px] mq450:pb-6 mq450:box-border">
              <Image
                className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
                loading="lazy"
                width={64}
                height={64}
                alt=""
                src="/cardi1.svg"
              />
              <div className="relative leading-[140%] font-semibold inline-block max-w-full mq450:text-lg mq450:leading-[26px]">
                Drag the Extension Anywhere
              </div>
              <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
                Move Sticko across your screen effortlessly! Keep your notes in
                view while you browse or work without interruptions.
              </div>
            </div>
            <DragTheExtensionAnywhere1
              themesIcon="/themes-icon.svg"
              amazingThemes="Amazing Themes"
              personalizeYourExperienceWith="Personalize your experience with stunning themes. Choose a style that matches your workflow and personality."
            />
            <DragTheExtensionAnywhere1
              themesIcon="/group-1597880454.svg"
              themesIconHeight="20px"
              amazingThemes="Customize Your Fonts"
              personalizeYourExperienceWith="Choose from a variety of fonts to make your notes look just the way you want. Personalization made easy!"
            />
            <div className="self-stretch rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-[84px] pl-[41px] pr-5 box-border gap-[30px] max-w-full text-lgi mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[55px] mq450:box-border">
              <Image
                className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
                width={64}
                height={64}
                alt=""
                src="/cardi1-1.svg"
              />
              <div className="relative leading-[140%] font-semibold inline-block max-w-full">
                Use Sticko outside of the browser
              </div>
              <div className="w-[403px] relative text-base leading-[140%] text-colour-gray flex items-center max-w-full">
                Effortlessly use Sticko on any part of your computer screen, not
                stuck in just the web browser.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[326px] max-w-full">
            <div className="self-stretch rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-16 pl-[41px] pr-5 box-border gap-[30px] max-w-full mq450:gap-[15px] mq450:pt-[34px] mq450:pb-[42px] mq450:box-border">
              <div className="w-16 rounded-xl border-aliceblue-300 border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-[17px] px-4">
                <div className="h-[26px] w-[30.1px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-sm border-royalblue-100 border-[2px] border-solid box-border w-[14.3px] h-7" />
                  <div className="absolute top-[0px] left-[17.8px] rounded-sm border-lightsteelblue border-[2px] border-solid box-border w-[14.3px] h-7" />
                </div>
              </div>
              <div className="relative leading-[140%] font-semibold mq450:text-lg mq450:leading-[26px]">
                Blocks System
              </div>
              <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
                Break down your notes into clearly separated text blocks for
                better readability and easy organization.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="self-stretch rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-[248px] pl-[41px] pr-5 box-border relative gap-[30px] max-w-full mq450:gap-[15px] mq800:pt-[34px] mq800:pb-[161px] mq800:box-border">
                <Image
                  className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
                  loading="lazy"
                  width={64}
                  height={64}
                  alt=""
                  src="/cardi7.svg"
                />
                <div className="relative leading-[140%] font-semibold mq450:text-lg mq450:leading-[26px]">
                  Minimal View
                </div>
                <div className="w-[403px] relative text-lgi leading-[140%] text-colour-gray flex items-center max-w-full">
                  Letting you concentrate solely on your notes. Perfect for deep
                  work and brainstorming.
                </div>
                <Image
                  className="w-full h-[191px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={502}
                  height={191}
                  alt=""
                  src="/mask-group.svg"
                />
              </div>
              <div className="self-stretch rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] pb-[217px] pl-[41px] pr-5 box-border relative gap-[30px] max-w-full text-lgi mq450:gap-[15px] mq800:pt-[34px] mq800:pb-[141px] mq800:box-border">
                <Image
                  className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0"
                  loading="lazy"
                  width={64}
                  height={64}
                  alt=""
                  src="/cardi6.svg"
                />
                <div className="w-40 relative leading-[140%] font-semibold flex items-center">
                  Dark Mode 🌙
                </div>
                <div className="w-[403px] h-[108px] relative leading-[140%] text-colour-gray flex items-center max-w-full">
                  Work day or night with Sticko’s built-in dark mode, reducing
                  eye strain and boosting productivity in any lighting
                  condition.
                </div>
                <Image
                  className="w-full h-[217px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
                  width={502}
                  height={217}
                  alt=""
                  src="/mask-group-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
