import React from "react";
import { assetUrl } from "../utils/helpers";

export default function OtpSuccessScreen({ onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full xl:max-w-[600px] bg-white rounded-[12px] shadow-md pt-3 py-8 md:pl-[40px] md:pr-[60px] px-[10px] text-[#1C1C1C] text-[14px]">
      <div className="pb-[20px] pt-[30px]">
        <img src={assetUrl('images/like.svg')} alt="" />
      </div>
      <h2 className="text-[28px] font-bold pb-[70px] uppercase">Thank You</h2>
      <p className="fadeBlack text-[16px] pb-[20px] font-medium">
        Thank you for reaching out to Neuberg Diagnostics.
      </p>
      <p className="text-[#7E818C] pb-[40px]">
        Our Partners in Health are at your service and will connect with you shortly to guide you through the next steps.
      </p>
      <button
        onClick={onContinue}
        className="px-6 py-2 rounded-full text-white font-medium cursor-pointer"
        style={{
          background: "linear-gradient(90deg, #f97316 0%, #9333ea 100%)"
        }}
      >
        Continue Browsing
      </button>
    </div>
  );
}