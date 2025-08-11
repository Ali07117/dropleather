'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function page() {
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(true)
    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 6) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++; // special char
        return strength;
    };

    const strength = getStrength(password);
    return (
        <>
            <div className='min-h-[100vh] w-[100%] flex'>
                <div className="login-left min-h-[100%] w-[50%] bg-[]">
                    <img className='pl-[35px] pt-[35px]' src="/images/login-logo.svg" alt="" />
                    <div className='flex flex-col items-center py-[80px]'>
                        <div>
                            <h1 className=' heading-h1 text-align-center input-sections text-[#0F172A] font-[700] text-[50px] w-[400px] leading-[100%] font-bric'>Let’s Build Your Brand.</h1>
                            <div className=' input-sections flex items-center justify-center cursor-pointer mt-[30px] gap-[10px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]'>
                                <img src="/images/google.svg" alt="" />
                                <p className='text-[#1D1C2B] font-[500] text-[16px] font-bric'>Sign in with Google</p>
                            </div>
                            <div className='flex items-center justify-center gap-[25px] mt-[25px]'>
                                <div className="line-left bg-[#000000] h-[0.79px] flex-1 opacity-[0.10]"></div>
                                <p className='text-[12.7px] font-[500] text-[#000000] opacity-[0.40]'>OR</p>
                                <div className="line-right bg-[#000000] h-[0.79px] flex-1 opacity-[0.10]"></div>
                            </div>

                            <label htmlFor="" className='font-bric mt-[10px] inline-block text-[16px]'>Email <span className='text-[#FF0000]'>*</span> (Required)</label>
                            <div className=' input-sections flex items-center gap-[10px] px-[11px] py-[12px] mt-[5px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]'>
                                <img className='opacity-[0.40]' src="/images/email.svg" alt="" />
                                <input className='opacity-[0.80] w-[80%] text-[#000000] text-[15px] leading-[15.87px] outline-none border-none font-[display]' placeholder='Enter your email' type="email" name="" id="" />
                            </div>
                            <label className="mt-[20px] text-[16px] font-[300] leading-[12.54px] inline-block font-bric">
                                password <span className="text-[#FF0000]">*</span> (Required)
                            </label>

                            <div className="input-sections flex items-center gap-[10px] px-[11px] relative py-[12px] mt-[5px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]">
                                <img className="opacity-[0.40]" src="/images/password.svg" alt="" />
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="opacity-[0.80] w-[80%] font-[display] text-[#000000] text-[15px] leading-[15.87px] outline-none border-none"
                                    placeholder="Enter your password"
                                    type={open ? "password" : "text"}
                                />
                                <img
                                    className="opacity-[0.40] cursor-pointer absolute right-[11px] top-[12px] translate-y-[-10%] bg-[] translate-x-[0]"
                                    src="/images/password-eye.svg"
                                    alt=""
                                    onClick={() => setOpen(!open)}
                                />
                            </div>

                            {/* Strength bars */}
                            <div className="flex justify-between gap-[10px] my-[10px]">
                                {[1, 2, 3, 4].map((level) => (
                                    <div
                                        key={level}
                                        className={`h-[6px] w-[25%] rounded-[8px] ${strength >= level ? "bg-blue-500" : "bg-[#D9D9D9]"
                                            }`}
                                    ></div>
                                ))}
                            </div>
                            <p className=' text-align-center input-sections w-[400px] font-[400] text-[rgba(0,0,0,0.75)] font-bric leading-[20px] text-[16px]'>Your password must be at least 8 characters, and can’t begin or end with a space.</p>
                            <img className='mt-[10px]' src="/images/clouddummy.svg" alt="" />
                            <div className=' text-align-center mt-[30px]'>
                                <img className='inline-flex' src="/images/agreeicon.svg" alt="" />
                                <span className='text-[15px] font-[300] ml-[10px] font-bric leading-[12.54px] line-height-full '>I agree to logo‘s <span className='text-[15px] cursor-pointer font-[600] font-bric leading-[12.54px] underline'>Terms of service</span> and <span className='text-[15px] font-[600] font-bric leading-[12.54px] cursor-pointer underline'>Privacy Policy</span> </span>
                            </div>
                            <Link href="/emailverification"><button className='input-sections w-[400px] bg-[#E9E9ED] mt-[30px] rounded-[8.26px] py-[10px] px-[30px] text-[#ADAFB3] text-[15px] font-bric font-[600]'>Create account</button></Link>
                            <div className='flex justify-center mt-[20px]'>
                                <p className='font-[300] text-[16px] leading-[12.54px] font-bric text-[#000000]'>Do you have an account ? <Link href="/login"><span className='font-[600] text-[16px] leading-[12.54px] font-bric underline text-[#000000]'>Log in</span></Link> </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="login-right min-h-[100%] w-[50%] bg-cover bg-left-top"
                    style={{ backgroundImage: "url('/images/loginbg.svg')" }}
                >
                </div>
            </div>
        </>
    );
}

export default page;
