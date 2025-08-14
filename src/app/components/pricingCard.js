"use client"
import React, { useEffect, useState } from 'react';
import PricingOption from './pricingOption';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function PricingCard() {

  return (
    <>
      <div className=''>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            1120: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
        >
          {/* =========== card 1 ============= */}
          <SwiperSlide>
            <div className='py-[30px] px-[17px] pricing-card border-[rgba(0, 0, 0, 0.35)] border-[1px] rounded-[16px] '>
              <p className='font-[display] font-[500] card-header-text text-[26px] leading-[28px] tracking-[-0.1px] text-[#000000]'>Free Plan</p>
              <p className='font-[display] flex items-center font-[700] card-header-price text-[40px] leading-[52px] tracking-[-0.4px] text-[#000000]'>$0 <span className='font-[600] text-[20px] leading-[26.1px] pl-[3px] pt-[5px] text-[#000000]'>/forever</span></p>
              <p className='light-text pricing-para font-[300] mt-[10px] font-[display] card-header-para text-[18px] leading-[22px]  bg-[]'>For individuals who want to buy premium products for personal use or resell them without any branding.</p>
              <button className='font-[display] pricing-card-button w-full mt-[40px] py-[15px] px-[61px] rounded-[8px] bg-[#000000] text-[#FFFFFF] font-[500] text-[22px] leading-[28px] tracking-[-0.1px]'>Select plan</button>
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Products</p>
              <PricingOption text={"#000000"} available={"add"} option={"Premium Leather Products"} />
              <PricingOption text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Create Your Own Products"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Customization</p>
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Your Logo on Every Product"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Fully Custom Packaging"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Custom Dust Bag"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Personalized Hang Tags"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Create Your Own Packaging"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Personalized Ribbon"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Custom Wrapping Paper"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Interactive Showcase</p>
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"AI Fashion Model"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"360° Branding Views"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Support</p>
              <PricingOption text={"#000000"} available={"add"} option={"Reliable 24/7 support"} />
            </div></SwiperSlide>

          {/* =========== card 2 ============= */}
          <SwiperSlide>
            <div className='py-[30px] px-[17px] pricing-card border-[rgba(0, 0, 0, 0.35)] border-[1px] rounded-[16px] '>
              <p className='font-[display] font-[500] text-[26px] card-header-text leading-[28px] tracking-[-0.1px] text-[#000000]'>Professional Plan</p>
              <div className='flex justify-between items-center'>
                <p className='font-[display] flex items-center font-[700] text-[40px] leading-[52px] card-header-price tracking-[-0.4px] text-[#000000]'> <span className='font-[700] text-[30px] leading-[52px] tracking-[-0.4px] light-text text-decoration mr-[12px]'>$49</span> $24 <span className='font-[600] text-[20px] leading-[26.1px] pl-[3px] pt-[5px] text-[#000000]'>/mo</span></p>
                <button className='bg-[#ECFDF3] h-[25px] px-[20px] rounded-[25px] font-[600] text-[#037847] text-[14px] card-header-off tracking-[-1px]'>First month 50% off</button>
              </div>
              <p className='light-text font-[300] pricing-para mt-[10px] font-[display] text-[18px] card-header-para leading-[22px]'>For growing brands that want to sell premium leather goods with their own logo, customized packaging, and brand-ready product presentation.</p>
              <button className='font-[display] pricing-card-button w-full mt-[40px] py-[15px] px-[61px] rounded-[8px] bg-[#000000] text-[#FFFFFF] font-[500] text-[22px] leading-[28px] tracking-[-0.1px]'>Select plan</button>
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Products</p>
              <PricingOption text={"#000000"} available={"add"} option={"Premium Leather Products"} />
              <PricingOption text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Create Your Own Products"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Customization</p>
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Your Logo on Every Product"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Fully Custom Packaging"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Custom Dust Bag"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Personalized Hang Tags"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Create Your Own Packaging"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Personalized Ribbon"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"remove"} option={"Custom Wrapping Paper"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Interactive Showcase</p>
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"AI Fashion Model"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"360° Branding Views"} />
              <p className='font-[600] text-[18px] leading-[26.1px] pricing-point-heading mb-[15px] mt-[20px]'>Support</p>
              <PricingOption text={"#000000"} available={"add"} option={"Reliable 24/7 support"} />
            </div>
          </SwiperSlide>
          {/* =========== card 3 ============= */}
          <SwiperSlide>
            <div className='py-[30px] px-[17px] pricing-card border-[rgba(0, 0, 0, 0.35)] border-[1px] rounded-[16px] '>
              <p className='font-[display] font-[500] text-[26px] leading-[28px] tracking-[-0.1px] card-header-text text-[#000000]'>Enterprise Plan</p>
              <div className='flex justify-between items-center'>
                <p className='font-[display] flex items-center font-[700] text-[40px] leading-[52px] card-header-price tracking-[-0.4px] text-[#000000]'> <span className='font-[700] text-[30px] leading-[52px] tracking-[-0.4px] light-text text-decoration mr-[12px]'>$99</span> $49 <span className='font-[600] text-[20px] leading-[26.1px] pl-[3px] pt-[5px] text-[#000000]'>/mo</span></p>
                <button className='bg-[#ECFDF3] h-[25px] px-[20px] rounded-[25px] font-[600] text-[#037847] text-[14px] card-header-off tracking-[-1px]'>First month 50% off</button>
              </div>
              <p className='light-text font-[300] pricing-para mt-[10px] font-[display] text-[18px] card-header-para leading-[22px]'>For established brands seeking exclusive products, advanced packaging solutions, and a higher level of customization tailored to their unique identity.</p>
              <button className='font-[display] pricing-card-button w-full mt-[40px] py-[15px] px-[61px] rounded-[8px] bg-[#000000] text-[#FFFFFF] font-[500] text-[22px] leading-[28px] tracking-[-0.1px]'>Select plan</button>
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Products</p>
              <PricingOption text={"#000000"} available={"add"} option={"Premium Leather Products"} />
              <PricingOption text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Create Your Own Products"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Customization</p>
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Your Logo on Every Product"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Fully Custom Packaging"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Custom Dust Bag"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Personalized Hang Tags"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Create Your Own Packaging"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Personalized Ribbon"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"Custom Wrapping Paper"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Interactive Showcase</p>
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"AI Fashion Model"} />
              <PricingOption i={"i"} text={"rgba(0, 0, 0, 0.75)"} available={"add"} option={"360° Branding Views"} />
              <p className='font-[600] text-[18px] pricing-point-heading leading-[26.1px] mb-[15px] mt-[20px]'>Support</p>
              <PricingOption text={"#000000"} available={"add"} option={"Reliable 24/7 support"} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default PricingCard;
