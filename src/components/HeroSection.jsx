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
          <div className="capitalize font-bold bannerCity fadeBlack">
            From Health checks to<br> Advanced scans
          </div>
          <div className="bannerPref capitalize pb-5 xl:font-semibold">
            with Speed, Accuracy, and Trusted care.
          </div>
       {/*   <div className="bannerSvg hidden xl:block">
            <img src={assetUrl("images/bannerTitle.svg")} alt="" />
          </div>*/}
          {isLargeScreen && (
            <div className="mt-[50px] relative z-1 w-full max-w-[600px]">
              {/* <div className="absolute stamp z-99">
                <img className="stampImg" src={assetUrl("images/stamp.svg")} alt="" />
              </div> */}
              <AppointmentForm />
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bannerFloat hidden-md imgResponsive lg:w-auto w-[85%]">
        <div className="relative">
          <img className="xl:w-auto w-full imgResponsiveMob" src={assetUrl("images/dhoni.png")} alt="" />
        </div>
      </div>
      <div className="relative bottom-[-10px] left-[50%] translate-x-[-50%] visible-md w-full">
        <div className="relative">
          <img className="w-full" src={assetUrl("images/dhoniMob.png")} alt="" />
        </div>
      </div>
    </section>
  );
}