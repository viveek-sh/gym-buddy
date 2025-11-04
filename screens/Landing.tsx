'use client'
import { Banner, BannerAction, BannerClose, BannerCloseProps, BannerIcon, BannerTitle} from "@/components/Banner";
import { CircleAlert } from 'lucide-react';
import { Hero } from "@/components/Hero";

function BannerTop(){
    return(
        <Banner>
            <BannerIcon icon={CircleAlert} />
            <BannerTitle>Important message</BannerTitle>
            <BannerAction>Learn more</BannerAction>
            <BannerClose />
        </Banner>

    );
  
};
export function Landing(){
    return(
        <div>
            {/* <BannerTop/> */}
            <Hero/>            
        </div>
    );

}