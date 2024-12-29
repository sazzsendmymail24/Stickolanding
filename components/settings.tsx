import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "./frame-component";
import RecentUsers2 from "./recent-users2";

export type SettingsType = {
  className?: string;
};

const Settings: NextPage<SettingsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1370px] bg-aliceblue-100 max-w-full flex flex-row items-start justify-start p-[42px] box-border gap-4 leading-[normal] tracking-[normal] mq850:pl-[21px] mq850:pr-[21px] mq850:box-border ${className}`}
    >
      <aside className="w-60 shadow-[0px_4px_103px_rgba(50,_50,_71,_0.01),_0px_4px_59px_rgba(50,_50,_71,_0.03)] rounded-2xl bg-neutral-100 flex flex-col items-start justify-start p-4 box-border gap-[236.8px] mq850:hidden">
        <FrameComponent
          groupDivWidth="106px"
          frame="/frame.svg"
          sticko="/sticko.svg"
          category="/category.svg"
          categoryIconMinHeight="24px"
          dashboardDisplay="unset"
          dashboardMinWidth="unset"
          calendar="/calendar.svg"
          calendarIconMinHeight="24px"
          userManageDisplay="unset"
          userManageMinWidth="unset"
          sidebarItemTrueFalseBorderRadius="6px"
          sidebarItemTrueFalseBackground="unset"
          activity="/activity.svg"
          activityIconMinHeight="24px"
          subscriptionColor="#191919"
          wallet="/wallet.svg"
          walletIconMinHeight="24px"
          sidebarItemTrueFalseBorderRadius1="41px"
          sidebarItemTrueFalseBackground1="linear-gradient(108.27deg, #0077ff 2.38%, #2dc2ff)"
          chat="/chat.svg"
          chatIconMinHeight="24px"
          settingsColor="#fff"
        />
        <button className="cursor-pointer [border:none] py-[7.5px] px-[7px] bg-[transparent] w-48 rounded-md flex flex-row items-start justify-start box-border gap-[7.5px]">
          <div className="flex-1 relative text-base leading-[140%] font-title1-bold text-colour-black text-left">
            Logout
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover min-h-[24px]"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/logout@2x.png"
          />
        </button>
      </aside>
      <section className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[166px] box-border gap-8 max-w-[calc(100%_-_256px)] mq850:max-w-full mq675:gap-4 mq675:pb-[108px] mq675:box-border">
        <header className="self-stretch rounded-2xl bg-neutral-100 flex flex-row items-center justify-between py-[15.5px] px-[18px] top-[0] z-[99] sticky gap-5 text-left text-13xl text-colour-black font-inter">
          <h1 className="m-0 relative text-inherit leading-[140%] font-medium font-[inherit] whitespace-nowrap">
            Settings
          </h1>
          <div className="w-[303px] flex flex-row items-center justify-start gap-2.5 text-smi font-title1-bold">
            <div className="rounded-3xs bg-royalblue-300 flex flex-row items-center justify-center p-4">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/notification.svg"
              />
            </div>
            <div className="flex-1 rounded-3xs bg-gray-300 border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-start p-[7px] gap-2.5">
              <Image
                className="h-[38px] w-[38px] relative rounded-10xl-7 overflow-hidden shrink-0 object-cover min-h-[38px]"
                loading="lazy"
                width={38}
                height={38}
                alt=""
                src="/frame-435@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch h-3.5 relative leading-[140%] flex items-center shrink-0 whitespace-nowrap">
                  Welcome back,
                </div>
                <div className="self-stretch relative text-base leading-[140%] font-semibold whitespace-nowrap">
                  Sazz
                </div>
              </div>
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/arrow--down-2.svg"
              />
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-end justify-center gap-[42px] max-w-full mq675:gap-[21px]">
          <button className="cursor-pointer [border:none] py-[16.5px] px-[23px] bg-[transparent] rounded-37xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff),_#f2f8ff] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-2.5">
              <Image
                className="h-5 w-5 relative"
                width={20}
                height={20}
                alt=""
                src="/vector-1.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-base leading-[140%] font-title1-bold text-neutral-100 text-left whitespace-nowrap">
                  New User
                </div>
              </div>
            </div>
          </button>
          <RecentUsers2 />
        </div>
      </section>
    </div>
  );
};

export default Settings;
