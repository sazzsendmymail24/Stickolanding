import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import FrameComponent from "./frame-component";
import PageHeader from "./page-header";
import DetailLabel from "./detail-label";

export type SubscriptionManagementType = {
  className?: string;
};

const SubscriptionManagement: NextPage<SubscriptionManagementType> = ({
  className = "",
}) => {
  const onGetItNowClick = useCallback(() => {
    // Please sync "Subscription Management" to the project
  }, []);

  return (
    <div
      className={`w-[1440px] bg-aliceblue-100 max-w-full overflow-hidden flex flex-row items-start justify-start py-[39px] px-[35px] box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="flex-1 flex flex-row items-start justify-start gap-[17px] max-w-full text-left text-base text-colour-black font-title1-bold">
        <div className="w-60 shadow-[0px_4px_103px_rgba(50,_50,_71,_0.01),_0px_4px_59px_rgba(50,_50,_71,_0.03)] rounded-2xl bg-neutral-100 flex flex-col items-start justify-start p-4 box-border gap-[236.8px] mq900:hidden">
          <FrameComponent
            frame="/frame2.svg"
            sticko="/sticko2.svg"
            category="/category1.svg"
            calendar="/calendar2.svg"
            activity="/activity2.svg"
            wallet="/wallet1.svg"
            chat="/chat2.svg"
          />
          <div className="w-48 rounded-md flex flex-row items-start justify-start py-[7.5px] px-[7px] box-border gap-[7.5px]">
            <div className="flex-1 relative leading-[140%]">Logout</div>
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/logout1@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_257px)] text-lgi mq900:max-w-full mq675:gap-4">
          <PageHeader
            myPlan="Subscription Management"
            userInfoAlignSelf="unset"
          />
          <div className="self-stretch rounded-2xl bg-neutral-100 flex flex-col items-start justify-start pt-[30px] px-[31px] pb-[81px] box-border gap-[47px] max-w-full mq675:gap-[23px] mq675:pt-5 mq675:pb-[53px] mq675:box-border">
            <div className="self-stretch flex flex-col items-start justify-start mq675:gap-[23px]">
              <div className="self-stretch relative leading-[140%]">Pro</div>
            </div>
            <form className="m-0 self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[45px] gap-y-[39px] max-w-full mq675:gap-[22px]">
              <DetailLabel labelText="Badge Name" placeholder="Pro" />
              <DetailLabel
                labelText="Devices"
                detailValueBorder="1px solid #0077ff"
                placeholder="5 Devices"
                proWidth="65px"
              />
              <DetailLabel
                labelText="Subtitle"
                detailValueBorder="1px solid #eaf5ff"
                placeholder="For big team user"
                proWidth="115px"
              />
              <DetailLabel
                labelText="Price"
                detailValueBorder="1px solid #eaf5ff"
                placeholder="$4"
                proWidth="18px"
              />
              <div className="h-[225px] w-[228px] flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between gap-5">
                  <div className="relative text-base leading-[140%] font-title1-bold text-colour-black text-left inline-block min-w-[120px]">
                    What Included
                  </div>
                  <Image
                    className="h-4 w-4 relative"
                    loading="lazy"
                    width={16}
                    height={16}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="self-stretch h-[174px] flex flex-col items-start justify-start gap-[9px]">
                  <div className="self-stretch flex-1 rounded-2xl bg-gray-500 border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-start py-[15px] px-[23px]">
                    <input
                      className="w-[78px] [border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-gray-100 text-left inline-block p-0"
                      placeholder="All Features"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch h-[52px] rounded-2xl bg-gray-500 border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[15px] px-[23px]">
                    <div className="relative text-smi leading-[140%] font-title1-bold text-gray-100 text-left">
                      14 Days Free trial
                    </div>
                  </div>
                  <div className="self-stretch h-[52px] rounded-2xl bg-gray-500 border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-start py-[15px] px-[23px]">
                    <div className="relative text-smi leading-[140%] font-title1-bold text-gray-100 text-left inline-block min-w-[84px]">
                      Lifetime Use
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-end pt-[167px] pb-0 pl-[538px] pr-0 box-border gap-[9px] max-w-full mq450:pl-5 mq450:box-border mq900:flex-wrap mq900:pl-[269px] mq900:box-border">
                <button
                  className="cursor-pointer [border:none] py-[11.5px] px-7 bg-[transparent] rounded-23xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-center justify-center"
                  onClick={onGetItNowClick}
                >
                  <div className="relative text-base leading-[140%] font-title1-bold text-neutral-100 text-left inline-block min-w-[62px]">
                    Update
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-[11.5px] px-9 bg-neutral-100 shadow-[-2px_9px_12.6px_#eaf4ff] rounded-24xl flex flex-row items-center justify-center hover:bg-gainsboro-100"
                  onClick={onGetItNowClick}
                >
                  <div className="relative text-base leading-[140%] font-title1-bold text-darkslategray-200 text-left">
                    Back
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionManagement;
