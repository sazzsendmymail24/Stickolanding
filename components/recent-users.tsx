import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";

export type RecentUsersType = {
  className?: string;
  bitmap: string;
  edit?: string;
  edit1?: string;
  edit2?: string;
  edit3?: string;

  /** Style props */
  nameBackgroundColor?: CSSProperties["backgroundColor"];
  editColor?: CSSProperties["color"];
};

const RecentUsers: NextPage<RecentUsersType> = ({
  className = "",
  bitmap,
  edit,
  edit1,
  edit2,
  nameBackgroundColor,
  edit3,
  editColor,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: nameBackgroundColor,
    };
  }, [nameBackgroundColor]);

  const editStyle: CSSProperties = useMemo(() => {
    return {
      color: editColor,
    };
  }, [editColor]);

  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <div
      className={`w-[1043px] h-[84px] rounded-32xl bg-neutral-100 border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-left text-base text-colour-gray font-title1-bold ${className}`}
      data-acc-item
      data-acc-header
      data-acc-original
      onClick={onAccordionHeaderClick}
    >
      <Image
        className="h-[63px] w-[58px] relative object-cover"
        loading="lazy"
        width={58}
        height={63}
        alt=""
        src="/bitmap@2x.png"
      />
      <div className="h-[41px] w-[870px] flex flex-row items-center justify-center gap-[106px]">
        <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
          <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
            {edit}
          </div>
        </div>
        <div className="h-[30px] w-[207px] flex flex-row items-center justify-center py-1 px-0 box-border text-colour-black">
          <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
            {edit1}
          </div>
        </div>
        <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
          <div className="h-[22px] flex-1 relative leading-[140%] whitespace-pre-wrap flex items-center">
            {edit2}
          </div>
        </div>
        <div
          className="h-[41px] flex-1 rounded-81xl bg-lightyellow flex flex-row items-center justify-center py-[9.5px] px-0 box-border text-center text-limegreen"
          style={nameStyle}
        >
          <div
            className="h-[22px] flex-1 relative leading-[140%] flex items-center justify-center"
            style={editStyle}
          >
            {edit3}
          </div>
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

export default RecentUsers;
