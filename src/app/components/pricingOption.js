import React from 'react';

function PricingOption(props) {
  return (
    <div className='flex items-center pricing-component-main mt-[8px]'>
      <img src={`/images/${props.available}.svg`} alt="" />
      <p className={`font-[display] font-[400] pricing-component pl-[8px] text-[18px] leading-[26.1px]`} style={{color:`${props.text}`}}>{props.option}</p>
      <img className='pb-[5px] pl-[5px]' src={`/images/pricing${props.i}.svg`} alt="" />
    </div>
  );
}

export default PricingOption;
