import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  frame: string;
  sticko: string;
  category: string;
  calendar: string;
  activity: string;
  wallet: string;
  chat: string;

  /** Style props */
  groupDivWidth?: CSSProperties["width"];
  categoryIconMinHeight?: CSSProperties["minHeight"];
  dashboardDisplay?: CSSProperties["display"];
  dashboardMinWidth?: CSSProperties["minWidth"];
  calendarIconMinHeight?: CSSProperties["minHeight"];
  userManageDisplay?: CSSProperties["display"];
  userManageMinWidth?: CSSProperties["minWidth"];
  sidebarItemTrueFalseBorderRadius?: CSSProperties["borderRadius"];
  sidebarItemTrueFalseBackground?: CSSProperties["background"];
  activityIconMinHeight?: CSSProperties["minHeight"];
  subscriptionColor?: CSSProperties["color"];
  walletIconMinHeight?: CSSProperties["minHeight"];
  sidebarItemTrueFalseBorderRadius1?: CSSProperties["borderRadius"];
  sidebarItemTrueFalseBackground1?: CSSProperties["background"];
  chatIconMinHeight?: CSSProperties["minHeight"];
  settingsColor?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  groupDivWidth,
  frame,
  sticko,
  category,
  categoryIconMinHeight,
  dashboardDisplay,
  dashboardMinWidth,
  calendar,
  calendarIconMinHeight,
  userManageDisplay,
  userManageMinWidth,
  sidebarItemTrueFalseBorderRadius,
  sidebarItemTrueFalseBackground,
  activity,
  activityIconMinHeight,
  subscriptionColor,
  wallet,
  walletIconMinHeight,
  sidebarItemTrueFalseBorderRadius1,
  sidebarItemTrueFalseBackground1,
  chat,
  chatIconMinHeight,
  settingsColor,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
    };
  }, [groupDivWidth]);

  const categoryIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: categoryIconMinHeight,
    };
  }, [categoryIconMinHeight]);

  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      display: dashboardDisplay,
      minWidth: dashboardMinWidth,
    };
  }, [dashboardDisplay, dashboardMinWidth]);

  const calendarIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: calendarIconMinHeight,
    };
  }, [calendarIconMinHeight]);

  const userManageStyle: CSSProperties = useMemo(() => {
    return {
      display: userManageDisplay,
      minWidth: userManageMinWidth,
    };
  }, [userManageDisplay, userManageMinWidth]);

  const sidebarItemTrueFalse2Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: sidebarItemTrueFalseBorderRadius,
      background: sidebarItemTrueFalseBackground,
    };
  }, [sidebarItemTrueFalseBorderRadius, sidebarItemTrueFalseBackground]);

  const activityIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: activityIconMinHeight,
    };
  }, [activityIconMinHeight]);

  const subscriptionStyle: CSSProperties = useMemo(() => {
    return {
      color: subscriptionColor,
    };
  }, [subscriptionColor]);

  const walletIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: walletIconMinHeight,
    };
  }, [walletIconMinHeight]);

  const sidebarItemTrueFalse3Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: sidebarItemTrueFalseBorderRadius1,
      background: sidebarItemTrueFalseBackground1,
    };
  }, [sidebarItemTrueFalseBorderRadius1, sidebarItemTrueFalseBackground1]);

  const chatIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: chatIconMinHeight,
    };
  }, [chatIconMinHeight]);

  const settings1Style: CSSProperties = useMemo(() => {
    return {
      color: settingsColor,
    };
  }, [settingsColor]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onSidebarItemTrueFalseContainerClick = useCallback(() => {
    // Please sync "User Management" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-12 text-left text-base text-colour-black font-title1-bold ${className}`}
    >
      <div
        className="flex flex-row items-end justify-start gap-[7.3px] shrink-0 cursor-pointer"
        onClick={onGroupContainerClick}
        style={groupDiv1Style}
      >
        <Image
          className="h-[30.2px] w-[30.2px] relative overflow-hidden shrink-0"
          loading="lazy"
          width={30}
          height={30}
          alt=""
          src={frame}
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
          <Image
            className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            width={69}
            height={17}
            alt=""
            src={sticko}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2.5 shrink-0">
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px] cursor-pointer"
          onClick={onGroupContainerClick}
        >
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={category}
            style={categoryIconStyle}
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative leading-[140%] inline-block min-w-[91px]"
              style={dashboardStyle}
            >
              Dashboard
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[11.5px] px-[7px] gap-[7.5px] cursor-pointer"
          onClick={onSidebarItemTrueFalseContainerClick}
        >
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={calendar}
            style={calendarIconStyle}
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative leading-[140%] inline-block min-w-[107px]"
              style={userManageStyle}
            >
              User Manage
            </div>
          </div>
        </div>
        <div
          className="self-stretch rounded-22xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff)] flex flex-row items-start justify-start py-[11.5px] px-6 gap-[7.5px] text-neutral-100"
          style={sidebarItemTrueFalse2Style}
        >
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={activity}
            style={activityIconStyle}
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[140%]" style={subscriptionStyle}>
              Subscription
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px]">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={wallet}
            style={walletIconStyle}
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[140%]">Site Content</div>
          </div>
        </div>
        <div
          className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px]"
          style={sidebarItemTrueFalse3Style}
        >
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={chat}
            style={chatIconStyle}
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[140%]" style={settings1Style}>
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
