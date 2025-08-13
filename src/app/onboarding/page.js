"use client";
import React, { useState } from "react";
import HearAbout from "../components/hearAbout";

export default function Page() {
  const [step, setStep] = useState(0); // 0=your-style, 1=know-you-better, 2=what-stage, 3=hear-about-section
  const goTo = (n) => setStep(Math.max(0, Math.min(3, n)));
  const next = () => goTo(step + 1);

  return (
    <div className="onboarding-page relative">
      {/* Pagination (visual only) */}
      <div className="pagination flex fixed bottom-[60px] left-[50%] translate-x-[-50%] items-center justify-center gap-[7px]">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`min-h-[8px] max-h-[8px] transition-all duration-300 ${
              step === i
                ? "min-w-[35px] max-w-[35px] rounded-[50px] bg-[#000000]"
                : "min-w-[8px] max-w-[8px] rounded-[50%] bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>

      <div className="choose-style-section min-h-screen w-screen onboarding-page px-[10px] flex items-center justify-center">
        {/* 1) your-style */}
        <div className={`your-style flex flex-col items-center ${step === 0 ? "block" : "hidden"}`}>
          <h1 className="font-bric font-[600] onboarding-h1 text-[30px] text-center leading-[100%] text-[#000000]">
            Choose your style
          </h1>
          <div className="flex dark-light-box gap-[10px] mt-[50px]">
            <div className="h-[165px] w-[258px] dark-box rounded-[14px] cursor-pointer overflow-hidden hover:border-[#000000] duration-300 bg-[white] border border-color border-[2px]">
              <div
                className="h-[70%] w-[100%] bg-[] bg-cover"
                style={{ backgroundImage: "url('/images/blackbg.svg')" }}
              />
              <div className="h-[30%] w-[100%] px-[15px] border-t-[1px]  py-[10px]">
                <p className="font-bric text-[#000000] dark-box-text text-[18px] font-[500]">Dark</p>
              </div>
            </div>
            <div className="h-[165px] w-[258px] light-box rounded-[14px] cursor-pointer overflow-hidden hover:border-[#000000] duration-300 bg-[white] border border-color border-[2px]">
              <div
                className="h-[70%] w-[100%] bg-[] bg-cover"
                style={{ backgroundImage: "url('/images/whitebg.svg')" }}
              />
              <div className="h-[30%] w-[100%] px-[15px] border-t-[1px] py-[10px]">
                <p className="font-bric text-[#000000] light-box-text text-[18px] font-[500]">Light</p>
              </div>
            </div>
          </div>

          <button
            className="px-[10px] py-[8px] your-style-button mt-[40px] gap-[8px] flex items-center font-bric font-[600] text-[#FFFFFF] bg-[#000000] text-[16px] rounded-[10px]"
            onClick={() => goTo(1)}
          >
            Continue <img className="inline-flex" src="/images/continuearrow.svg" alt="" />
          </button>
        </div>

        {/* 2) know-you-better */}
        <div className={`know-you-better ${step === 1 ? "block" : "hidden"}`}>
          <h1 className="font-bric onboarding-h1 font-[600] text-[30px] text-center leading-[100%] text-[#000000]">
            Let’s get to know you better
          </h1>

          <div className="mt-[30px]">
            <label className="font-bric mt-[50px] font-[500] text-[14px] leading-[12.54px] ">
              What's your name?
            </label>
            <div className=" input-section know-you-better-div flex items-center gap-[10px] px-[11px] py-[12px] mt-[5px] w-[512px] h-[40px] border border-[#D6D6D6] border-[0.79px] rounded-[7px]">
              <input
                className=" w-[80%] text-[#000000] text-[14px] leading-[15.87px] outline-none border-none font-inter"
                placeholder="William"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[20px] know-you-better-div  w-[512px]">
            <label className="text-sm font-medium text-black">What's your date of birth?</label>
            <div className="flex justify-between mt-[5px] know-you-better-div-2">
              <input
                type="text"
                placeholder="DD"
                maxLength={2}
                className="w-14 px-3 border-[#D6D6D6] day-div border-[0.79px] rounded-[7px] h-[40px] w-[85px] text-[#000000] text-[14px] leading-[15.87px] outline-none"
              />
              <div className="relative month-div w-[247px]">
                <select className="appearance-none w-full px-3 border-[#D6D6D6] border-[0.79px] rounded-[7px] h-[40px]  text-black/40 text-[14px] leading-[15.87px] outline-none">
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <img
                  src="/images/montharrow.svg"
                  alt="arrow"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-3 h-3"
                />
              </div>
              <input
                type="text"
                placeholder="YYYY"
                maxLength={4}
                className="w-[160px] year-div px-3 border-[#D6D6D6] border-[0.79px] rounded-[7px] h-[40px] text-[#000000] text-[14px] leading-[15.87px] outline-none"
              />
            </div>
          </div>

          <button
            className="px-[10px] know-you-better-button py-[8px] mt-[30px] h-[35px] gap-[8px] flex items-center font-bric font-[600] text-[#FFFFFF] bg-[#000000] text-[16px] rounded-[10px]"
            onClick={() => goTo(2)}
          >
            Next
          </button>
        </div>

        {/* 3) what-stage */}
        <div className={`what-stage flex flex-col items-center ${step === 2 ? "block" : "hidden"}`}>
          <h1 className="font-bric onboarding-h1 font-[600] text-[30px] text-center leading-[100%] text-[#000000]">
            What stage is your brand at?
          </h1>

          <div className="w-[411px] what-stage-card relative mt-[25px] h-[70px] border border-[#DCDCDC] rounded-[8px] flex items-center gap-[10px] p-[16px]">
            <div>
              <img src="/images/brandstage.svg" alt="" />
            </div>
            <div className="w-[85%]">
              <p className="font-inter font-[600] text-[14px] leading-[20px]">New Brand</p>
              <p className="font-inter font-[400] text-[13px] leading-[18px]">
                You’re just starting out or still building your identity.
              </p>
            </div>
            <input
              type="radio"
              name="brandType"
              className="appearance-none cursor-pointer w-[20px] h-[20px] border-2 border-gray-300 rounded-[4px] bg-white shadow-sm checked:bg-blue-500 checked:border-blue-500  checked:bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat checked:bg-[length:16px_16px] hover:shadow-md transition absolute translate-y-[50%] right-[16px] top-[16px]"
            />
          </div>

          <div className="w-[411px] what-stage-card relative mt-[15px] h-[70px] border border-[#DCDCDC] rounded-[8px] flex items-center gap-[10px] p-[16px]">
            <div>
              <img src="/images/brandstage.svg" alt="" />
            </div>
            <div className="w-[85%]">
              <p className="font-inter font-[600] text-[14px] leading-[20px]">Established Brand</p>
              <p className="font-inter font-[400] text-[13px] leading-[18px]">
                Already active with an audience or customers.
              </p>
            </div>
            <input
              type="radio"
              name="brandType"
              className="appearance-none cursor-pointer w-[20px] h-[20px] border-2 border-gray-300 rounded-[4px] bg-white shadow-sm checked:bg-blue-500 checked:border-blue-500  checked:bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat checked:bg-[length:16px_16px] hover:shadow-md transition absolute translate-y-[50%] right-[16px] top-[16px]"
            />
          </div>

          <button
            className="px-[15px] what-stage-button py-[8px] mt-[30px] h-[35px] gap-[8px] flex items-center font-bric font-[600] text-[#FFFFFF] bg-[#000000] text-[16px] rounded-[10px]"
            onClick={() => goTo(3)}
          >
            Continue
          </button>
        </div>

        {/* 4) hear-about-section */}
        <div className={`px-[20px] hear-about-section ${step === 3 ? "block" : "hidden"}`}>
          <h1 className="font-bric onboarding-h1 font-[600] text-[30px]  leading-[100%] text-[#000000]">
            How did you hear about DropLeather?
          </h1>

          <div className="flex gap-[10px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-[25px]">
            <HearAbout name={"Newsletter or Blog"} image={"newsletter"} />
            <HearAbout name={"Friends or School"} image={"school"} />
            <HearAbout name={"In the news"} image={"news"} />
            <HearAbout name={"From work"} image={"work"} />
            <HearAbout name={"Podcast"} image={"podcast"} />
            <HearAbout name={"Facebook"} image={"facebook"} />
            <HearAbout name={"X"} image={"x"} />
            <HearAbout name={"TikTok"} image={"tiktok"} />
            <HearAbout name={"YouTube"} image={"youtube"} />
            <HearAbout name={"LinkedIn"} image={"linkedin"} />
            <HearAbout name={"Instagram"} image={"instagram"} />
            <HearAbout name={"Google"} image={"googlemain"} />
            <HearAbout name={"Don't remember"} image={"dont"} />
            <HearAbout name={"Other"} image={"other"} />
          </div>

          <button className="mt-[15px] font-inter font-[400] mb-[20px] p-[10px] text-[13px] leading-[18px]">
            skip
          </button>
        </div>
      </div>
    </div>
  );
}




// import React from 'react';
// import HearAbout from '../components/hearAbout';

// function page() {
//     return (
//         <div className='onboarding-page'>
//         <div className="pagination flex absolute bottom-[60px] left-[50%] translate-x-[-50%] items-center justify-center gap-[7px]">
//             <div className='min-h-[8px] rounded-[50%] max-h-[8px] min-w-[8px] max-w-[8px] bg-[#D9D9D9]'></div>
//             <div className='min-w-[35px] max-w-[35px] rounded-[50px] min-h-[8px] max-h-[8px] bg-[#000000]'></div>
//             <div className='min-h-[8px] rounded-[50%] max-h-[8px] min-w-[8px] max-w-[8px] bg-[#D9D9D9]'></div>
//             <div className='min-h-[8px] rounded-[50%] max-h-[8px] min-w-[8px] max-w-[8px] bg-[#D9D9D9]'></div>
//         </div>
//             <div className="choose-style-section h-screen w-screen flex items-center justify-center">
//                 <div className='your-style flex flex-col items-center hidden'>
//         <h1 className='font-bric font-[600] text-[30px] text-center leading-[100%] text-[#000000]'>Choose your style</h1>
//         <div className='flex gap-[10px] mt-[50px]'>
//         <div className='h-[165px] w-[258px] rounded-[14px] cursor-pointer overflow-hidden hover:border-[#000000] duration-300 bg-[white] border border-color border-[2px]'>
//         <div className='h-[70%] w-[100%] bg-[] bg-cover' style={{ backgroundImage: "url('/images/blackbg.svg')" }}>
//         </div>
//         <div className='h-[30%] w-[100%] px-[15px] border-t-[1px]  py-[10px]'>
//           <p className='font-bric text-[#000000] text-[18px] font-[500]'>Dark</p>
//         </div>
//         </div>
//         <div className='h-[165px] w-[258px] rounded-[14px] cursor-pointer overflow-hidden hover:border-[#000000] duration-300 bg-[white] border border-color border-[2px]'>
//         <div className='h-[70%] w-[100%] bg-[] bg-cover' style={{ backgroundImage: "url('/images/whitebg.svg')" }}>
//         </div>
//         <div className='h-[30%] w-[100%] px-[15px] border-t-[1px] py-[10px]'>
//           <p className='font-bric text-[#000000] text-[18px] font-[500]'>Light</p>
//         </div>
//         </div>
//         </div>
//         <button className='px-[10px] py-[8px] your-style-button mt-[40px] gap-[8px] flex items-center font-bric font-[600] text-[#FFFFFF] bg-[#000000] text-[16px] rounded-[10px]'>Continue <img className='inline-flex' src="/images/continuearrow.svg" alt="" /></button>
//       </div>
//                 <div className='know-you-better hidden'>
//                     <h1 className='font-bric font-[600] text-[30px] text-center leading-[100%] text-[#000000]'>Let’s get to know you better</h1>
//                     <div className='mt-[30px]'>
//                         <label htmlFor="" className='font-bric mt-[50px] font-[500] text-[14px] leading-[12.54px] '>What's your name?</label>
//                         <div className=' input-sections flex items-center gap-[10px] px-[11px] py-[12px] mt-[5px] w-[512px] h-[40px] border border-[#D6D6D6] border-[0.79px] rounded-[7px]'>
//                             <input className=' w-[80%] text-[#000000] text-[14px] leading-[15.87px] outline-none border-none font-inter' placeholder='William' type="text" name="" id="" />
//                         </div>
//                     </div>
//                     <div className="flex flex-col mt-[20px]">
//                         <label className="text-sm font-medium text-black">
//                             What's your date of birth?
//                         </label>
//                         <div className="flex justify-between mt-[5px]">
//                             <input
//                                 type="text"
//                                 placeholder="DD"
//                                 maxLength={2}
//                                 className="w-14 px-3 border-[#D6D6D6] border-[0.79px] rounded-[7px] h-[40px] w-[85px] text-[#000000] text-[14px] leading-[15.87px] outline-none"
//                             />
//                             <div className="relative w-[247px]">
//                                 <select
//                                     className="appearance-none w-full px-3 border-[#D6D6D6] border-[0.79px] rounded-[7px] h-[40px]  text-black/40 text-[14px] leading-[15.87px] outline-none"
//                                 >
//                                     <option>Month</option>
//                                     <option>January</option>
//                                     <option>February</option>
//                                     <option>March</option>
//                                     <option>April</option>
//                                     <option>May</option>
//                                     <option>June</option>
//                                     <option>July</option>
//                                     <option>August</option>
//                                     <option>September</option>
//                                     <option>October</option>
//                                     <option>November</option>
//                                     <option>December</option>
//                                 </select>
//                                 <img
//                                     src="/images/montharrow.svg" // put your arrow icon in /public
//                                     alt="arrow"
//                                     className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-3 h-3"
//                                 />
//                             </div>
//                             <input
//                                 type="text"
//                                 placeholder="YYYY"
//                                 maxLength={4}
//                                 className="w-[160px] px-3 border-[#D6D6D6] border-[0.79px] rounded-[7px] h-[40px] text-[#000000] text-[14px] leading-[15.87px] outline-none"
//                             />
//                         </div>
//                     </div>
//                     <button className='px-[10px] know-you-better-button py-[8px] mt-[30px] h-[35px] gap-[8px] flex items-center font-bric font-[600] text-[#FFFFFF] bg-[#000000] text-[16px] rounded-[10px]'>Next</button>
//                 </div>
//                 <div className=' what-stage flex flex-col items-center hidden'>
//                     <h1 className='font-bric font-[600] text-[30px] text-center leading-[100%] text-[#000000]'>What stage is your brand at?</h1>
//                     <div className='w-[411px] relative mt-[25px] h-[70px] border border-[#DCDCDC] rounded-[8px] flex items-center gap-[10px] p-[16px]'>
//                         <div><img src="/images/brandstage.svg" alt="" /></div>
//                         <div className='w-[85%]'>
//                             <p className='font-inter font-[600] text-[14px] leading-[20px]'>New Brand</p>
//                             <p className='font-inter font-[400] text-[13px] leading-[18px]'>You’re just starting out or still building your identity.</p>
//                         </div>
//                         <input
//                             type="radio"
//                             name="brandType"
//                             className="appearance-none cursor-pointer w-[20px] h-[20px] border-2 border-gray-300 rounded-[4px] bg-white shadow-sm checked:bg-blue-500 checked:border-blue-500  checked:bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat checked:bg-[length:16px_16px] hover:shadow-md transition absolute translate-y-[50%] right-[16px] top-[16px]"
//                         />
//                     </div>

//                     <div className='w-[411px] relative mt-[15px] h-[70px] border border-[#DCDCDC] rounded-[8px] flex items-center gap-[10px] p-[16px]'>
//                         <div><img src="/images/brandstage.svg" alt="" /></div>
//                         <div className='w-[85%]'>
//                             <p className='font-inter font-[600] text-[14px] leading-[20px]'>Established Brand</p>
//                             <p className='font-inter font-[400] text-[13px] leading-[18px]'>Already active with an audience or customers.</p>
//                         </div>
//                         <input
//                             type="radio"
//                             name="brandType"
//                             className="appearance-none cursor-pointer w-[20px] h-[20px] border-2 border-gray-300 rounded-[4px] bg-white shadow-sm checked:bg-blue-500 checked:border-blue-500  checked:bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M5 13l4 4L19 7%27/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat checked:bg-[length:16px_16px] hover:shadow-md transition absolute translate-y-[50%] right-[16px] top-[16px]"
//                         />
//                     </div>
//                     <button className='px-[15px] what-stage-button py-[8px] mt-[30px] h-[35px] gap-[8px] flex items-center font-bric font-[600] text-[#FFFFFF] bg-[#000000] text-[16px] rounded-[10px]'>Continue</button>
//                 </div>
//                 <div className='px-[20px] hear-about-section'>
//                     <h1 className='font-bric font-[600] text-[30px]  leading-[100%] text-[#000000]'>How did you hear about DropLeather?</h1>
//                     <div className='flex gap-[10px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-[25px]'>
//                         <HearAbout name={"Newsletter or Blog"} image={"newsletter"}/>
//                         <HearAbout name={"Friends or School"} image={"school"}/>
//                         <HearAbout name={"In the news"} image={"news"}/>
//                         <HearAbout name={"From work"} image={"work"}/>
//                         <HearAbout name={"Podcast"} image={"podcast"}/>
//                         <HearAbout name={"Facebook"} image={"facebook"}/>
//                         <HearAbout name={"X"} image={"x"}/>
//                         <HearAbout name={"TikTok"} image={"tiktok"}/>
//                         <HearAbout name={"YouTube"} image={"youtube"}/>
//                         <HearAbout name={"LinkedIn"} image={"linkedin"}/>
//                         <HearAbout name={"Instagram"} image={"instagram"}/>
//                         <HearAbout name={"Google"} image={"googlemain"}/>
//                         <HearAbout name={"Don't remember"} image={"dont"}/>
//                         <HearAbout name={"Other"} image={"other"}/>
//                     </div>
//                     <button className='mt-[15px] font-inter font-[400] p-[10px] text-[13px] leading-[18px]'>skip</button>
//                 </div>
//             </div>
//             {/* == */}

//         </div>
//     );
// }

// export default page;
