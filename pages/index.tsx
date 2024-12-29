import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import PricingContent from "../components/pricing-content";
import PricingCards1 from "../components/pricing-cards1";
import Pricing from "../components/pricing";
import Features from "../components/features";
import TestimonialsTestimonialsCard from "../components/testimonials-testimonials-card";
import About from "../components/about";
import Faq from "../components/faq";
import Contact from "../components/contact";

const Sticko: NextPage = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border gap-[123px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq800:gap-[31px] mq1300:gap-[61px]">
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <FrameComponent1 />
          <FrameComponent5 />
          <FrameComponent6 />
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[21.4px] box-border max-w-full text-center text-29xl text-colour-black font-title1-bold">
        <div className="w-[1240px] flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq800:gap-8">
          <PricingContent />
          <PricingCards1 />
          <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[9px] box-border max-w-full">
            <div className="w-[655px] flex flex-col items-start justify-start gap-3.5 max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit [text-decoration:line-through] leading-[140%] font-semibold font-[inherit] [text-shadow:8px_12px_24px_rgba(0,_0,_0,_0.05)] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                Lifetime Access
              </h1>
              <div className="self-stretch relative text-lgi leading-[140%] text-colour-gray">
                Enjoy Lifetime Access with seamless workflow, uninterrupted
                connections, and the freedom to work without worries.
              </div>
            </div>
          </div>
          <Pricing />
          <Features />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lgi text-slategray-200">
            <div className="flex flex-row items-start justify-center gap-[5px] max-w-full mq800:flex-wrap">
              <Image
                className="h-[33px] w-[33px] relative min-h-[33px]"
                width={33}
                height={33}
                alt=""
                src="/group-35572.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
                <div className="relative leading-[140%]">
                  <span>{`It's `}</span>
                  <span className="text-royalblue-100">100% free</span>
                  <span> payment is secured by 2checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ml-[-81px] w-[1521px] overflow-x-auto flex flex-row items-start justify-start gap-[37px] max-w-[106%] shrink-0 text-left text-sm text-colour-black font-inter mq800:gap-[18px]">
        <TestimonialsTestimonialsCard
          paragraphFeatureDescription="Sticko has completely transformed how I take notes while researching. It's quick, seamless, and I love the ability to switch themes. I can’t imagine browsing without it!"
          cardPhoto1="/cardphoto1@2x.png"
          h3FeatureTitle="Jane Suey"
          paragraphFeatureDescription1="Freelance Writer"
        />
        <div className="flex-1 rounded-32xl bg-neutral-100 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[35px] px-10 box-border gap-5 max-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border">
          <Image
            className="w-12 h-[43.2px] relative overflow-hidden shrink-0"
            width={48}
            height={43}
            alt=""
            src="/biquote.svg"
          />
          <div className="self-stretch relative tracking-[0.2px] leading-[20px] font-medium">
            I’ve tried countless note-taking tools, but Sticko stands out for
            its simplicity and efficiency. It helps me capture ideas instantly
            and keeps my workflow smooth. A game-changer for productivity!
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
              src="/cardphoto2@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.2px] leading-[24px] font-semibold">
                  Mark Tome
                </div>
                <div className="relative text-xs tracking-[0.2px] leading-[16px] text-colour-gray whitespace-nowrap">
                  Project Manager
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialsTestimonialsCard
          paragraphFeatureDescription="Taking quick notes while studying online has never been this easy. Sticko helps me organize my thoughts effortlessly, and I love how my notes are saved automatically."
          cardPhoto1="/cardphoto3@2x.png"
          h3FeatureTitle="David Kure"
          paragraphFeatureDescription1="Student"
          paragraphFeatureDescriptionDisplay="unset"
          paragraphFeatureDescriptionMinWidth="unset"
        />
        <TestimonialsTestimonialsCard
          paragraphFeatureDescription="Sticko is visually stunning and incredibly intuitive. I use it daily to jot down design ideas and thoughts while working. The customization options are the cherry on top!"
          cardPhoto1="/cardphoto4@2x.png"
          h3FeatureTitle="Emma Rubi"
          paragraphFeatureDescription1="Entrepreneur"
          paragraphFeatureDescriptionDisplay="unset"
          paragraphFeatureDescriptionMinWidth="unset"
        />
      </section>
      <About />
      <Faq />
      <Contact />
      <footer className="self-stretch border-gray-1300 border-t-[1px] border-solid box-border flex flex-row items-start justify-between pt-3 px-28 pb-[13.5px] max-w-full gap-5 text-left text-smi text-colour-gray font-title1-bold mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-14 mq800:pr-14 mq800:box-border mq1125:flex-wrap mq1125:justify-center">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[140%]">
            © Sticko 2025. All rights reserved.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5">
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            width={20}
            height={20}
            alt=""
            src="/icon1.svg"
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            width={20}
            height={20}
            alt=""
            src="/icon-1.svg"
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            width={20}
            height={20}
            alt=""
            src="/icon-2.svg"
          />
          <Image
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            width={20}
            height={20}
            alt=""
            src="/icon-3.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[23px]">
            <div className="relative leading-[140%]">Privacy Policy</div>
            <a
              className="relative leading-[140%] text-[inherit] [text-decoration:none]"
              href="https://hugeicons.com/terms-of-service"
              target="_blank"
            >
              Cookie policy
            </a>
            <div className="relative leading-[140%]">Terms of service</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sticko;
