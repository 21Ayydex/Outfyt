import React, { useEffect } from "react";
import { FaShopify } from "react-icons/fa";

export default function Onboarding() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/signin";
    }, 3000);
  }, []);
  return (
    <div className="h-screen bg-[#E48045] text-white flex flex-col justify-center items-center gap-5">
      <FaShopify size={120} className="animate-logo-dropdown" />
      <h1 className="animate-slidein text-xl font-bold">Look good & Feel Luxury with <b>OUTFYT</b></h1>
    </div>
  );
}


