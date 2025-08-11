'use client'
import { useRef, useState } from "react";
import Link from 'next/link';

function page() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to next input if value entered
            if (value && index < 3) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <>
            <div className='min-h-[100vh] w-[100%] flex'>
                <div className="login-left min-h-[100%] w-[50%] bg-[]">
                    <img className='pl-[35px] pt-[35px]' src="/images/login-logo.svg" alt="" />
                    <div className='flex flex-col items-center py-[80px]'>
                        <div>
                            <h1 className=' text-align-center text-[#0F172A] font-[700] text-[29.85px] leading-[100%] font-bric'>Enter email verification code</h1>
                            <p className=' text-align-center input-sections font-bric w-[400px] font-[400] text-[18px] leading-[100%] text-[#000000] mt-[20px]'>Please check your email box. We have sent verification code to <span className='font-[600]'>admin@dropleather.com.</span> If you can't find the email, please check your spam folder.</p>
                            <div className="flex mt-[25px] items-center otp-box-gap justify-content-center gap-[18px]">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className={`no-arrows h-[70px] w-[70px] otp-box outline-none border-[2px] -otpinput ${digit ? "border-[#000000]" : "border-[rgba(0,0,0,0.5)]"
                                            } text-[50px] font-[500] font-bric text-center text-[#000000] rounded-[7px]`}
                                    />
                                ))}
                            </div>
                            {/* ---- */}
                            <img className='mt-[25px]' src="/images/clouddummy.svg" alt="" />
                            <button className=' input-sections w-[400px] bg-[#E9E9ED] mt-[20px] rounded-[8.26px] py-[10px] px-[30px] text-[#ADAFB3] text-[15px] font-bric hover:text-[#E9E9ED] duration-500 hover:bg-[#ADAFB3] font-[600]'>Complete Verification</button>

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
