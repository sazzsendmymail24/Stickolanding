import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import GroupComponent from "./group-component";

export type FaqType = {
  className?: string;
};

const Faq: NextPage<FaqType> = ({ className = "" }) => {
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
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base text-royalblue-100 font-text-single-300-bold ${className}`}
    >
      <div className="w-[896px] flex flex-col items-start justify-start gap-[60px] max-w-full mq1125:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[695px] flex flex-col items-start justify-start gap-[12.2px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
              <div className="relative tracking-[0.24em] leading-[18px] uppercase font-medium">{`TAKE YOU answear `}</div>
            </div>
            <h1 className="m-0 relative text-29xl [text-decoration:line-through] leading-[140%] font-semibold font-title1-bold text-gray-800 mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div
          className="self-stretch h-[1341px] flex flex-col items-start justify-start gap-[45px] text-left text-4xl text-colour-black font-title1-bold"
          data-acc-group
        >
          <div
            className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border flex flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-open
            data-acc-header
            data-acc-original
            data-acc-default-open
            onClick={onAccordionHeaderClick}
          >
            <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
            <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
              <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                <div className="w-[201px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                  1. What is Sticko?
                </div>
                <div
                  className="w-[715.3px] grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                      Sticko is a lightweight browser extension that lets you
                      take quick notes while browsing, keeping your ideas
                      organized and boosting productivity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[50.7px] w-[50.7px] relative">
              <Image
                className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                width={51}
                height={51}
                alt=""
                src="/group-35538.svg"
              />
              <Image
                className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                loading="lazy"
                width={51}
                height={51}
                alt=""
                src="/group-35539.svg"
              />
            </div>
          </div>
          <div
            className="w-[896px] h-[132px] shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] rounded-8xl bg-neutral-100 hidden flex-row items-start justify-start pt-[40.4px] px-[38px] pb-[40.9px] box-border gap-[470.4px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <div className="w-[896px] relative shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] rounded-8xl bg-neutral-100 h-[132px] hidden" />
            <div className="h-[43.3px] w-[297px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
              <div className="w-[201px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                1. What is Sticko?
              </div>
            </div>
            <Image
              className="h-[50.7px] w-[50.7px] relative z-[1]"
              width={51}
              height={51}
              alt=""
              src="/group-35539-1.svg"
            />
            <div className="relative text-[transparent] hidden" />
            <div className="absolute w-0 h-0" />
          </div>
          <div className="w-[896px] h-[1104px] flex flex-col items-start justify-start gap-[30px]">
            <GroupComponent howDoIInstallSticko="2. How do I install Sticko?" />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[298px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    2. How do I install Sticko?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <GroupComponent
              groupDivGap="301.4px"
              containerWidth="466px"
              howDoIInstallSticko="3. Can I customize the themes in Sticko?"
              howDoIWidth="467px"
            />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[467px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    3. Can I customize the themes in Sticko?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <GroupComponent
              groupDivGap="255.4px"
              containerWidth="512px"
              howDoIInstallSticko="4. Does Sticko save my notes automatically?"
              howDoIWidth="513px"
            />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[513px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    4. Does Sticko save my notes automatically?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <GroupComponent
              groupDivGap="255.4px"
              containerWidth="512px"
              howDoIInstallSticko="4. Does Sticko save my notes automatically?"
              howDoIWidth="513px"
            />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[513px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    4. Does Sticko save my notes automatically?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <GroupComponent
              groupDivGap="255.4px"
              containerWidth="512px"
              howDoIInstallSticko="4. Does Sticko save my notes automatically?"
              howDoIWidth="513px"
            />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[513px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    4. Does Sticko save my notes automatically?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <GroupComponent
              groupDivGap="255.4px"
              containerWidth="512px"
              howDoIInstallSticko="4. Does Sticko save my notes automatically?"
              howDoIWidth="513px"
            />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[513px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    4. Does Sticko save my notes automatically?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <GroupComponent
              groupDivGap="255.4px"
              containerWidth="512px"
              howDoIInstallSticko="4. Does Sticko save my notes automatically?"
              howDoIWidth="513px"
            />
            <div
              className="w-[896px] h-48 shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border hidden flex-row items-start justify-start pt-[35.7px] pb-[55.2px] pl-[38px] pr-9 gap-[52.1px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-open
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[896px] relative shadow-[0px_11px_20px_#e9f3ff] rounded-33xl bg-neutral-100 border-royalblue-100 border-[2px] border-solid box-border h-48 hidden" />
              <div className="h-[101.1px] w-[715.3px] flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border">
                <div className="w-[715.3px] h-[89.8px] flex flex-col items-start justify-start gap-[13.8px]">
                  <div className="w-[513px] h-8 relative leading-[140%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[26px]">
                    4. Does Sticko save my notes automatically?
                  </div>
                  <div
                    className="w-[715.3px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base text-colour-gray accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                    data-acc-content
                  >
                    <div className="w-[715.3px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <div className="w-[715.3px] relative leading-[140%] inline-block z-[1]">
                        Sticko is a lightweight browser extension that lets you
                        take quick notes while browsing, keeping your ideas
                        organized and boosting productivity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[50.7px] w-[50.7px] relative">
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35538.svg"
                />
                <Image
                  className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                  loading="lazy"
                  width={51}
                  height={51}
                  alt=""
                  src="/group-35539.svg"
                />
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
