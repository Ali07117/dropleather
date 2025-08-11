'use client'
import React, { useState } from 'react';
import Link from 'next/link';


function page() {
  const [open, setOpen] = useState(true)
  return (
    <div className='min-h-[100vh] w-[100%] flex'>
      <div className="login-left min-h-[100%] w-[50%] bg-[]">
        <img className='pl-[35px] pt-[35px]' src="/images/login-logo.svg" alt="" />
        <div className='flex flex-col items-center py-[80px]'>
          <div>
            <h1 className='text-[#0F172A] font-[700] text-align-center heading-h1 line-height-full text-[50px] font-bric'>Welcome Back.</h1>
            <div className=' input-sections flex items-center justify-center cursor-pointer mt-[30px] gap-[10px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]'>
              <img src="/images/google.svg" alt="" />
              <p className='text-[#1D1C2B] font-[500] text-[16px] font-bric'>Sign in with Google</p>
            </div>
            <div className='flex items-center justify-center gap-[25px] mt-[25px]'>
              <div className="line-left bg-[#000000] h-[0.79px] flex-1 opacity-[0.10]"></div>
              <p className='text-[12.7px] font-[500] text-[#000000] opacity-[0.40]'>OR</p>
              <div className="line-right bg-[#000000] h-[0.79px] flex-1 opacity-[0.10]"></div>
            </div>
            <label htmlFor="" className='font-bric mt-[10px] inline-block '>Email <span className='text-[#FF0000]'>*</span></label>
            <div className=' input-sections flex items-center gap-[10px] px-[11px] py-[12px] mt-[5px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]'>
              <img className='opacity-[0.40]' src="/images/email.svg" alt="" />
              <input className='opacity-[0.80] w-[80%] text-[#000000] text-[15px] leading-[15.87px] outline-none border-none font-[display]' placeholder='Enter your email' type="email" name="" id="" />
            </div>
            <label htmlFor="" className=' mt-[15px] inline-block font-bric'>Password <span className='text-[#FF0000]'>*</span></label>
            <div className=' input-sections flex items-center gap-[10px] px-[11px] relative py-[12px] mt-[5px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]'>
              <img className='opacity-[0.40]' src="/images/password.svg" alt="" />
              <input className='opacity-[0.80] w-[80%] bg-[] text-[#000000] text-[15px] leading-[15.87px] outline-none border-none font-[display]' placeholder='Enter your password' type={open ? "password" : "text"} name="" id="" />
              <img className='opacity-[0.40] cursor-pointer absolute right-[11px] top-[12px] translate-y-[-10%] bg-[] translate-x-[0]' src="/images/password-eye.svg" alt="" onClick={() => setOpen(!open)} />
            </div>
            <img className='mt-[25px]' src="/images/clouddummy.svg" alt="" />
            <div className='flex items-center justify-end justify-content-center mt-[25px]'>
              <Link href="/forgot"><p className='font-bric font-[400] text-[15px] leading-[12.54px] text-[#0074FF]'>Forget your password?</p></Link>
            </div>
            <button className='input-sections w-[400px] bg-[#E9E9ED] mt-[20px] rounded-[8.26px] py-[10px] px-[30px] text-[#ADAFB3] text-[15px] font-bric font-[600]'>Login</button>
            <div className='flex justify-end justify-content-center mt-[20px]'>
              <p className='font-bric font-[500] text-[16px] text-align-center line-height-full leading-[12.54px] text-[#363636]'>Don't have a DropLeather account yet? <Link href="/signup"><span className='text-[#000000] font-[600] text-[16px] font-bric leading-[12.54px] underline'>Sign Up</span></Link></p>
            </div>
            <p className='input-sections text-align-center font-bric w-[400px] mt-[35px] font-[400] text-[16px] leading-[20px] text-[#363636]'>DropLeather, Inc., 11025 Westlake Dr Charlotte, North Carolina 28273, <a href="mailto:support@dropleather.com" className='text-[#005AFF] font-[600] text-[16px] font-bric leading-[20px]'>support@dropleather.com.</a></p>
            <p className='input-sections text-align-center font-bric mt-[20px] w-[400px] font-[400] text-[16px] leading-[20px] text-[#363636]'>This site is protected by Cloudflare Turnstile to prevent spam and abuse. By continuing, you agree to our<span className='text-[#000000] font-[600] text-[16px] font-bric leading-[20px] underline cursor-pointer'>Privacy Policy</span>and <span className='text-[#000000] font-[600] text-[16px] font-bric leading-[20px] underline cursor-pointer'>Terms of Service.</span></p>
          </div>
        </div>
      </div>
      <div
        className="login-right min-h-[100%] w-[50%] bg-cover bg-left-top"
        style={{ backgroundImage: "url('/images/loginbg.svg')" }}
      >
      </div>
    </div>
  );
}

export default page;
