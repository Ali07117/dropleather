'use client'

import React, { useState } from 'react';
import PricingCard from '../components/pricingCard';

function page() {
    const [selectedPlan, setSelectedPlan] = useState("monthly");
  return (
    <>
    <div className='px-[230px] subscription-page'>

        <div className='m-[80px]'>
            <h1 className='font-[display] font-[600] text-center text-[44px]  leading-[100%] text-[#000000]'>Tailored plans for every stage of your business</h1>
            <p className='font-[display] font-[400] mt-[10px] text-center text-[16px] leading-[100%] text-[#000000]'>Whether you're testing the market or building a leather empire, our flexible plans evolve with your business and branding needs.</p>
        </div>
        <div className="pricing-header bg-[] items-end flex justify-between mt-[50px]">
            <div className='w-[140px] pricing-section-dummy'></div>
            <div className=' flex gap-[5px] rounded-[12px] py-[5px] px-[4px] border border-[rgba(0,0,0,0.35)]'>
      {/* Monthly */}
      <button
        onClick={() => setSelectedPlan("monthly")}
        className={`font-[display] pricing-section-header-text pricing-section-header-button py-[2px] px-[5px] rounded-[7.08px] tracking-[-0.15px] text-[18px] leading-[20.7px] font-[600] 
          ${selectedPlan === "monthly" ? "bg-[#005AFF] text-white" : "bg-transparent text-black"}`}
      >
        Monthly
      </button>

      {/* Yearly */}
      <button
        onClick={() => setSelectedPlan("yearly")}
        className={`font-[display] pricing-section-header-text pricing-section-header-button py-[2px] px-[5px] rounded-[7.08px] tracking-[-0.15px] text-[18px] leading-[20.7px] font-[600] 
          ${selectedPlan === "yearly" ? "bg-[#005AFF] text-white" : "bg-transparent text-black"}`}
      >
        Yearly
      </button>
    </div>
            <p className='font-[display] w-[140px] text-[#000000] pricing-section-price-in-doller pricing-section-header-text text-[18px] font-[300] leading-[26.1px] tracking-[0%] text-[#000000]'>Prices in <span className='font-[600]'>$ USD</span> <img className='inline-flex ml-[7px]' src="/images/pricingarrow.svg" alt="" /></p>
        </div>
        <div className='mt-[20px]'>
            <PricingCard/>
        </div>
        <div className='flex justify-center mt-[30px]'>
        <p className='light-text pricing-page-bottom-text font-[300] text-[17px] leading-[28px] bg-[] w-[80%] text-center'>Each subscription covers one brand. If you want to launch additional brands, you'll need to upgrade your plan or subscribe separately.</p>
        </div>
        <div className='flex justify-center mt-[10px] mb-[40px]'>
        <p className='light-text font-[300] pricing-page-bottom-text text-[17px] leading-[28px] bg-[] w-[80%] text-center'>Our <span className='text-[17px] pricing-page-bottom-text font-[500] leading-[26px] text-[#000000] underline'>free plan includes products without branding,</span> while paid plans unlock full white-label customization.</p>
        </div>
    </div>
    </>
  );
}

export default page;
