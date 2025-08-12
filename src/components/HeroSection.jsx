import { useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";
import { AppointmentForm } from "./AppointmentForm";

export default function HeroSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="heroWrap pt-[7rem] flex-grow min-h-screen relative grid">
      <div className="container mx-auto px-4 grid xl:items-center items-start xl:text-left text-center">
        <div className="bannerCont xl:pt-0 md:pt-[50px]">
          <div className="bannerPref capitalize pb-5 xl:font-semibold">
            Book Trusted MRI, CT & Full Body Scans
          </div>
          <div className="capitalize xl:hidden font-bold bannerCity fadeBlack text-center">
            in Chennai - From <br /> Anywhere.
          </div>
          <div className="bannerSvg hidden xl:block">
            <img src={assetUrl("images/bannerTitle.svg")} alt="" />
          </div>
          {isLargeScreen && (
            <div className="mt-[60px] relative z-1 w-full max-w-[600px]">
              <div className="absolute stamp z-99">
                <img className="stampImg" src={assetUrl("images/stamp.svg")} alt="" />
              </div>
              <AppointmentForm />
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bannerFloat imgResponsive lg:w-auto w-[85%]">
        <div className="relative">
          <img className="xl:w-auto w-full imgResponsiveMob" src={assetUrl("images/dhoni.png")} alt="" />
          {/* stamp.svg for sm → xl */}
            <img
              src={assetUrl("images/stamp.svg")}
              alt=""
              className="hidden sm:block xl:hidden absolute top-[10px] left-[10px] stampImg"
            />

            {/* stampMob.svg for <sm */}
            <img
              src={assetUrl("images/stampMob.svg")}
              alt=""
              className="block sm:hidden absolute top-[-5px] stampImg"
            />
        </div>
      </div>
    </section>
  );
}