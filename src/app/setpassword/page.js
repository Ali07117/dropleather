'use client'
import React, { useState } from 'react';

function page() {
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(true)
    const [open2, setOpen2] = useState(true)
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
                            <h1 className=' text-align-center text-[#0F172A] font-[700] text-[29.85px] leading-[100%] font-bric'>Set a New Password</h1>
                            <p className=' text-align-center input-sections font-bric w-[400px] font-[400] text-[18px] leading-[100%] text-[#000000] mt-[5px]'>Choose a strong password to secure your account. Make sure it’s something only you can remember.</p>
                            <label className="mt-[20px] text-[16px] font-[300] leading-[12.54px] inline-block font-bric">
                                New password <span className="text-[#FF0000]">*</span> (Required)
                            </label>

                            <div className=" input-sections flex items-center gap-[10px] px-[11px] relative py-[12px] mt-[5px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]">
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
                            <label className="mt-[10px] text-[16px] font-[300] leading-[12.54px] inline-block font-bric">
                                Confirm new password <span className="text-[#FF0000]">*</span> (Required)
                            </label>
                            <div className="input-sections flex items-center gap-[10px] px-[11px] relative py-[12px] mt-[5px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]">
                                <img className="opacity-[0.40]" src="/images/password.svg" alt="" />
                                <input
                                    className="opacity-[0.80] w-[80%] font-[display] text-[#000000] text-[15px] leading-[15.87px] outline-none border-none"
                                    placeholder="Confirm your new password"
                                    type={open2 ? "password" : "text"}
                                />
                                <img
                                    className="opacity-[0.40] cursor-pointer absolute right-[11px] top-[12px] translate-y-[-10%] bg-[] translate-x-[0]"
                                    src="/images/password-eye.svg"
                                    alt=""
                                    onClick={() => setOpen2(!open2)}
                                />
                            </div>
                            <img className='mt-[25px]' src="/images/clouddummy.svg" alt="" />
                            <button className=' input-sections w-[400px] bg-[#E9E9ED] mt-[25px] rounded-[8.26px] py-[10px] px-[30px] text-[#ADAFB3] text-[15px] hover:text-[#E9E9ED] duration-500 hover:bg-[#ADAFB3] font-bric font-[600]'>Reset password</button>
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
