import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import Image from "next/image";

export type GroupComponentType = {
  className?: string;
  howDoIInstallSticko?: string;

  /** Style props */
  groupDivGap?: CSSProperties["gap"];
  containerWidth?: CSSProperties["width"];
  howDoIWidth?: CSSProperties["width"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  groupDivGap,
  containerWidth,
  howDoIInstallSticko,
  howDoIWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: groupDivGap,
    };
  }, [groupDivGap]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  const howDoIStyle: CSSProperties = useMemo(() => {
    return {
      width: howDoIWidth,
    };
  }, [howDoIWidth]);

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
      className={`w-[896px] h-[132px] shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] rounded-8xl bg-neutral-100 flex flex-row items-start justify-start pt-[40.4px] px-[38px] pb-[40.9px] box-border gap-[470.4px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-left text-4xl text-colour-black font-title1-bold ${className}`}
      data-acc-item
      data-acc-header
      data-acc-original
      onClick={onAccordionHeaderClick}
      style={groupDivStyle}
    >
      <div className="w-[896px] relative shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] rounded-8xl bg-neutral-100 h-[132px] hidden" />
      <div
        className="h-[43.3px] w-[297px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border"
        style={containerStyle}
      >
        <div
          className="w-[298px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]"
          style={howDoIStyle}
        >
          {howDoIInstallSticko}
        </div>
      </div>
      <Image
        className="h-[50.7px] w-[50.7px] relative z-[1]"
        width={51}
        height={51}
        alt=""
        src="/group-35539-1.svg"
      />
    </div>
  );
};

export default GroupComponent;
