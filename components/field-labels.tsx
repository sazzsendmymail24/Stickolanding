import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FieldLabelsType = {
  className?: string;
  labelText?: string;
  placeholder?: string;

  /** Style props */
  fieldValuesBorder?: CSSProperties["border"];
  yourFirstNameWidth?: CSSProperties["width"];
  yourFirstNameColor?: CSSProperties["color"];
};

const FieldLabels: NextPage<FieldLabelsType> = ({
  className = "",
  labelText,
  fieldValuesBorder,
  placeholder,
  yourFirstNameWidth,
  yourFirstNameColor,
}) => {
  const fieldValuesStyle: CSSProperties = useMemo(() => {
    return {
      border: fieldValuesBorder,
    };
  }, [fieldValuesBorder]);

  const yourFirstNameStyle: CSSProperties = useMemo(() => {
    return {
      width: yourFirstNameWidth,
      color: yourFirstNameColor,
    };
  }, [yourFirstNameWidth, yourFirstNameColor]);

  return (
    <div
      className={`w-[415px] flex flex-col items-start justify-between min-h-[90px] max-w-full text-left text-base text-colour-black font-title1-bold ${className}`}
    >
      <div className="self-stretch relative leading-[140%]">{labelText}</div>
      <div
        className="self-stretch rounded-2xl bg-gray-500 border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-start py-[15px] px-[23px]"
        style={fieldValuesStyle}
      >
        <input
          className="w-[108px] [border:none] [outline:none] font-title1-bold text-smi bg-[transparent] relative leading-[140%] text-colour-black whitespace-pre-wrap text-left inline-block p-0"
          placeholder={placeholder}
          type="text"
          style={yourFirstNameStyle}
        />
      </div>
    </div>
  );
};

export default FieldLabels;
