import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DetailLabelType = {
  className?: string;
  labelText?: string;
  placeholder?: string;

  /** Style props */
  detailValueBorder?: CSSProperties["border"];
  proWidth?: CSSProperties["width"];
};

const DetailLabel: NextPage<DetailLabelType> = ({
  className = "",
  labelText,
  detailValueBorder,
  placeholder,
  proWidth,
}) => {
  const detailValueStyle: CSSProperties = useMemo(() => {
    return {
      border: detailValueBorder,
    };
  }, [detailValueBorder]);

  const pro1Style: CSSProperties = useMemo(() => {
    return {
      width: proWidth,
    };
  }, [proWidth]);

  return (
    <div
      className={`h-[90px] w-[228px] flex flex-col items-start justify-between text-left text-base text-colour-black font-title1-bold ${className}`}
    >
      <div className="self-stretch relative leading-[140%]">{labelText}</div>
      <div
        className="self-stretch rounded-2xl bg-gray-500 border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-start py-[15px] px-[23px]"
        style={detailValueStyle}
      >
        <input
          className="w-6 [border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-gray-100 text-left inline-block p-0"
          placeholder={placeholder}
          type="text"
          style={pro1Style}
        />
      </div>
    </div>
  );
};

export default DetailLabel;
