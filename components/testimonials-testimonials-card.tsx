import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type TestimonialsTestimonialsCardType = {
  className?: string;
  paragraphFeatureDescription?: string;
  cardPhoto1: string;
  h3FeatureTitle?: string;
  paragraphFeatureDescription1?: string;

  /** Style props */
  paragraphFeatureDescriptionDisplay?: CSSProperties["display"];
  paragraphFeatureDescriptionMinWidth?: CSSProperties["minWidth"];
};

const TestimonialsTestimonialsCard: NextPage<
  TestimonialsTestimonialsCardType
> = ({
  className = "",
  paragraphFeatureDescription,
  cardPhoto1,
  h3FeatureTitle,
  paragraphFeatureDescription1,
  paragraphFeatureDescriptionDisplay,
  paragraphFeatureDescriptionMinWidth,
}) => {
  const paragraphFeatureDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      display: paragraphFeatureDescriptionDisplay,
      minWidth: paragraphFeatureDescriptionMinWidth,
    };
  }, [paragraphFeatureDescriptionDisplay, paragraphFeatureDescriptionMinWidth]);

  return (
    <div
      className={`flex-1 rounded-32xl bg-neutral-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[35px] px-10 box-border gap-5 max-w-full text-left text-sm text-colour-black font-inter mq450:pt-[23px] mq450:pb-[23px] mq450:box-border ${className}`}
    >
      <Image
        className="w-12 h-[43.2px] relative overflow-hidden shrink-0"
        loading="lazy"
        width={48}
        height={43}
        alt=""
        src="/biquote.svg"
      />
      <div className="self-stretch relative tracking-[0.2px] leading-[20px]">
        {paragraphFeatureDescription}
      </div>
      <Image
        className="w-24 h-[13.8px] relative overflow-hidden shrink-0"
        width={96}
        height={14}
        alt=""
        src="/rating-stars.svg"
      />
      <div className="self-stretch h-px relative bg-aliceblue-500" />
      <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-4 gap-4">
        <Image
          className="h-16 w-16 relative rounded-lg object-cover"
          loading="lazy"
          width={64}
          height={64}
          alt=""
          src={cardPhoto1}
        />
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <div className="flex flex-col items-start justify-start">
            <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
              {h3FeatureTitle}
            </div>
            <div
              className="relative text-xs tracking-[0.2px] leading-[16px] text-colour-gray whitespace-nowrap"
              style={paragraphFeatureDescriptionStyle}
            >
              {paragraphFeatureDescription1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTestimonialsCard;
