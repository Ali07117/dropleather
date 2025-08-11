import React from 'react';
import Link from 'next/link';

function page() {
    return (
        <>
            <div className='min-h-[100vh] w-[100%] flex'>
                <div className="login-left min-h-[100%] w-[50%] bg-[]">
                    <img className='pl-[35px] pt-[35px] login-logo' src="/images/login-logo.svg" alt="" />
                    <div className='flex flex-col items-center py-[80px]'>
                        <div>
                            <h1 className='text-[#0F172A] font-[700] text-align-center text-[29.85px] leading-[100%] font-bric'>Forgot your password?</h1>
                            <p className='input-sections font-bric w-[400px] font-[400] text-align-center text-[18px] leading-[100%] text-[#000000] mt-[20px]'>Don't worry, we'll send you a message to help you reset your password.</p>
                            <div className='input-sections mt-[30px] flex items-center gap-[10px] px-[11px] py-[12px] w-[400px] h-[40px] border border-[#A6A6A6] border-[0.79px] rounded-[7px]'>
                                <img className='opacity-[0.40]' src="/images/email.svg" alt="" />
                                <input className='opacity-[0.80] w-[80%] text-[#000000] text-[15px] leading-[15.87px] outline-none border-none font-[display]' placeholder='Enter your E-mail' type="email" name="" id="" />
                            </div>
                            <img className='mt-[25px]' src="/images/clouddummy.svg" alt="" />
                            <Link href="/setpassword"> <button className='input-sections w-[400px] bg-[#E9E9ED] mt-[20px] rounded-[8.26px] py-[10px] px-[30px] text-[#ADAFB3] text-[15px] font-bric font-[600]'>Reset password</button></Link>
                            <div className='flex justify-end mt-[20px] justify-content-center'>
                                <p className='font-bric font-[500] text-align-center line-height-full text-[16px] leading-[12.54px] text-[#363636]'>Don't have a DropLeather account yet? <Link href="/signup"><span className='text-[#000000] font-[600] text-[16px] font-bric leading-[12.54px] underline'>Sign Up</span></Link></p>
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
