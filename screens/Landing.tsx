"use client";
import {
  Banner,
  BannerAction,
  BannerClose,
  BannerCloseProps,
  BannerIcon,
  BannerTitle,
} from "@/components/Banner";
import { CircleAlert } from "lucide-react";
import { Hero } from "@/components/Hero";
import Second from "@/components/Second";
import { ShineBorder } from "@/components/ui/shine-border";
import { ExploreSection } from "@/components/Explore";
import { FAQSection } from "@/components/Faq";

function BannerTop() {
  return (
    <Banner>
      <BannerIcon icon={CircleAlert} />
      <BannerTitle>Important message</BannerTitle>
      <BannerAction>Learn more</BannerAction>
      <BannerClose />
    </Banner>
  );
}
export function Landing() {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <Hero />
      <div className="px-5 lg:px-0">
        <Second />
      </div>
      <ExploreSection />
      <FAQSection />
      {/* <BannerTop/> */}
      {/* <ShineBorder></ShineBorder> */}
    </div>
  );
}
