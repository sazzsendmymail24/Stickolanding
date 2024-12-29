import type { NextPage } from "next";
import Image from "next/image";

export type ContactType = {
  className?: string;
};

const Contact: NextPage<ContactType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-base text-royalblue-100 font-text-single-300-bold ${className}`}
    >
      <div className="w-[1240px] flex flex-col items-start justify-start py-0 px-72 box-border gap-[54.7px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[27px] mq800:pl-[72px] mq800:pr-[72px] mq800:box-border mq1300:pl-36 mq1300:pr-36 mq1300:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12.3px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
            <div className="relative tracking-[0.24em] leading-[18px] uppercase font-medium">
              Support
            </div>
          </div>
          <h1 className="m-0 h-[134px] relative text-29xl [text-decoration:line-through] leading-[140%] font-semibold font-title1-bold text-gray-800 inline-block mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
            <p className="m-0">{`Here to Assist You `}</p>
            <p className="m-0">Let Us Help Improve Sticko</p>
          </h1>
        </div>
        <div className="ml-[-300.9px] w-[1264.8px] flex flex-row items-start justify-start gap-10 max-w-[191%] shrink-0 text-left text-colour-gray font-title1-bold mq800:gap-5 mq1300:flex-wrap">
          <div className="flex-1 rounded-21xl bg-neutral-100 flex flex-col items-start justify-start pt-[52px] px-10 pb-10 box-border gap-[29px] min-w-[413px] max-w-full mq800:pt-[34px] mq800:pb-[26px] mq800:box-border mq1125:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-black">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[15px] box-border max-w-full">
                <div className="flex-1 relative leading-[140%] inline-block max-w-full">
                  Sazz
                </div>
              </div>
              <div className="self-stretch h-px relative bg-royalblue-100" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[15px] box-border max-w-full">
                <div className="flex-1 relative leading-[140%] inline-block max-w-full">
                  E-mail
                </div>
              </div>
              <div className="self-stretch h-px relative bg-colour-gray" />
            </div>
            <div className="w-[357px] relative text-3xs tracking-[0.5px] leading-[160%] font-inter text-error hidden items-center max-w-full">
              Please, enter your address
            </div>
            <div className="w-[167px] relative text-3xs tracking-[0.5px] leading-[160%] font-inter text-error hidden items-center">
              Please, enter postcode
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[46px] max-w-full mq800:gap-[23px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
                    <div className="w-[357px] flex flex-col items-start justify-start gap-[11px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[15px] box-border max-w-full">
                        <div className="flex-1 relative leading-[140%] inline-block max-w-full">
                          WhatsApp Number (Live Chat)
                        </div>
                      </div>
                      <div className="self-stretch h-px relative bg-colour-gray" />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full">
                      <div className="flex-1 relative leading-[140%] inline-block max-w-full">
                        Let’s talk about your trouble
                      </div>
                    </div>
                  </div>
                  <div className="w-[167px] flex flex-col items-start justify-start gap-[11px] ml-[-151px]">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[22px] flex flex-row items-start justify-start py-0 px-4 box-border font-title1-bold text-base text-colour-gray min-w-[100px]"
                      placeholder="Package Name"
                      type="text"
                    />
                    <div className="self-stretch h-px relative bg-colour-gray" />
                  </div>
                </div>
                <div className="self-stretch h-px relative bg-colour-gray" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-between max-w-full">
                <div className="self-stretch border-colour-gray border-[1px] border-dashed overflow-hidden flex flex-col items-center justify-center py-[38px] px-5">
                  <div className="flex flex-row items-center justify-start gap-6">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/upload.svg"
                    />
                    <div className="relative leading-[140%]">
                      Upload Additional file
                    </div>
                  </div>
                </div>
                <div className="relative text-smi leading-[140%] inline-block max-w-full">
                  Attach file. File size of your documents should not exceed
                  10MB
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 pl-[34px] pr-[33px] bg-[transparent] rounded-24xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff)] flex flex-row items-start justify-start gap-[11px]">
              <div className="relative text-lgi leading-[140%] font-semibold font-title1-bold text-neutral-100 text-left">
                Leave us a Message
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <Image
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </button>
          </div>
          <Image
            className="w-[589.8px] relative max-h-full max-w-full mq1300:flex-1"
            loading="lazy"
            width={590}
            height={556}
            alt=""
            src="/clip-path-group.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
