import React from "react";

export default function OtpVerification({
  mobile,
  enteredOtp,
  setEnteredOtp,
  resendTimer,
  handleResend,
  handleVerify,
  handleTryAnotherNumber,
}) {
  return (
    <div className="w-full xl:max-w-[600px] bg-white rounded-[12px] shadow-md pt-3 py-8 md:pl-[40px] md:pr-[60px] px-[10px] text-[#1C1C1C] text-[14px]">
      <h2 className="md:text-[28px] text-[22px] font-bold mb-2">Enter the Code</h2>
      <p className="text-[#7E818C] font-medium">
        We have sent a code to this phone <span className="text-[#5C2D91] underline">{mobile}</span>
      </p>
      <label htmlFor="otpInput" className="md:pt-[25px] pt-[15px] md:pb-[10px] pb-[5px] block text-[16px] fadeBlack font-medium">Verification Code</label>
      <input
        id="otpInput"
        type="number"
        value={enteredOtp}
        onChange={(e) =>
          e.target.value.length <= 6 && setEnteredOtp(e.target.value)
        }
        placeholder="Enter Code"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />
      <p className="md:pt-[25px] pt-[15px] text-[#7E818C]">
        If you have not received the verification code, please click Resend
        Verification Code
      </p>
      <button
        onClick={handleResend}
        disabled={resendTimer > 0}
        className={`md:pt-[20px] pt-[10px] fadeBlack underline ${
          resendTimer > 0 ? "text-gray-400 cursor-not-allowed" : "text-blue-600 cursor-pointer"
        }`}
      >
        Resend Verification Code {resendTimer > 0 && `(${resendTimer}s)`}
      </button>
      <div className="flex justify-center md:pt-[45px] pt-[15px]">
        <button
          onClick={handleVerify}
          className="rounded-full px-[45px] py-[15px] text-white font-semibold cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, #F7941D -18.22%, #5C2D91 100%)",
          }}
        >
          Verify Code
        </button>
      </div>
      <div className="flex justify-center md:pt-[30px] pt-[10px]">
        <p className="text-[#7E818C] text-center">
          <span> Did not recieve the OTP? Check your spam filter,</span><br />
          <span>or </span>
        <button
          onClick={handleTryAnotherNumber}
          className="underline font-semibold text-[#5C2D91] cursor-pointer"
        >
          try another phone number
        </button>
        </p>
      </div>
    </div>
  );
}