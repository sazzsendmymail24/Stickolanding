import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export type SidebarType = {
  className?: string;
  calendar: string;
  chat: string;

  /** Style props */
  sidebarItemTrueFalseBorderRadius?: CSSProperties["borderRadius"];
  sidebarItemTrueFalseBackground?: CSSProperties["background"];
  addUsersColor?: CSSProperties["color"];
  sidebarItemTrueFalseBorderRadius1?: CSSProperties["borderRadius"];
  sidebarItemTrueFalseBackground1?: CSSProperties["background"];
  settingsColor?: CSSProperties["color"];
};

const Sidebar: NextPage<SidebarType> = ({
  className = "",
  sidebarItemTrueFalseBorderRadius,
  sidebarItemTrueFalseBackground,
  calendar,
  addUsersColor,
  sidebarItemTrueFalseBorderRadius1,
  sidebarItemTrueFalseBackground1,
  chat,
  settingsColor,
}) => {
  const sidebarItemTrueFalseStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: sidebarItemTrueFalseBorderRadius,
      background: sidebarItemTrueFalseBackground,
    };
  }, [sidebarItemTrueFalseBorderRadius, sidebarItemTrueFalseBackground]);

  const addUsersStyle: CSSProperties = useMemo(() => {
    return {
      color: addUsersColor,
    };
  }, [addUsersColor]);

  const sidebarItemTrueFalse1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: sidebarItemTrueFalseBorderRadius1,
      background: sidebarItemTrueFalseBackground1,
    };
  }, [sidebarItemTrueFalseBorderRadius1, sidebarItemTrueFalseBackground1]);

  const settingsStyle: CSSProperties = useMemo(() => {
    return {
      color: settingsColor,
    };
  }, [settingsColor]);

  const router = useRouter();

  const onSidebarItemTrueFalseContainerClick = useCallback(() => {
    router.push("/user-my-plan");
  }, [router]);

  const onSidebarItemTrueFalseContainerClick1 = useCallback(() => {
    router.push("/settings1");
  }, [router]);

  return (
    <div
      className={`w-60 shadow-[0px_4px_103px_rgba(50,_50,_71,_0.01),_0px_4px_59px_rgba(50,_50,_71,_0.03)] rounded-2xl bg-neutral-100 flex flex-col items-start justify-start p-4 box-border gap-[349.8px] text-left text-base text-colour-black font-title1-bold ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-12">
        <div className="flex flex-row items-end justify-start gap-[7.3px]">
          <Image
            className="h-[30.2px] w-[30.2px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={30}
            height={30}
            alt=""
            src="/frame.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
            <Image
              className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              width={69}
              height={17}
              alt=""
              src="/sticko.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
          <div
            className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px] cursor-pointer"
            onClick={onSidebarItemTrueFalseContainerClick}
          >
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/activity.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[140%] inline-block min-w-[63px]">
                My Plan
              </div>
            </div>
          </div>
          <div
            className="self-stretch rounded-22xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff)] flex flex-row items-start justify-start py-[11.5px] px-6 gap-[7.5px] text-neutral-100"
            style={sidebarItemTrueFalseStyle}
          >
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src={calendar}
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[140%]" style={addUsersStyle}>
                Add Users
              </div>
            </div>
          </div>
          <div
            className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px] cursor-pointer"
            onClick={onSidebarItemTrueFalseContainerClick1}
            style={sidebarItemTrueFalse1Style}
          >
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src={chat}
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[140%]" style={settingsStyle}>
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-48 rounded-md flex flex-row items-start justify-start py-[7.5px] px-[7px] box-border gap-[7.5px] text-mid font-poppins">
        <div className="flex-1 relative tracking-[0.25px] font-medium">
          Logout
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/logout@2x.png"
        />
      </div>
    </div>
  );
};

export default Sidebar;
