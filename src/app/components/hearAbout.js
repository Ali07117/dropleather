import React from 'react';

function HearAbout(props) {
    return (
        <div className='py-[18px] hover:border-[#000000] duration-300 cursor-pointer hear-about-card w-[184px] px-[20px] rounded-[16px] flex flex-col gap-2 sm:gap-4  border-[1px] border-[#DCDCDC]'>
            <img className=' w-[18px]' src={`/images/${props.image}.svg`} alt="" />
            <p className='font-inter font-[400] text-[14px] leading-[18px]'>{props.name}</p>
        </div>
    );
}

export default HearAbout;
