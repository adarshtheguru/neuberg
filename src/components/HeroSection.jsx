import { assetUrl } from "../utils/helpers";
import { AppointmentForm } from "./AppointmentForm";

export default function HeroSection() {
  return (
    <section id="home" className="heroWrap pt-[7rem] flex-grow min-h-screen relative grid">
      <div className="container mx-auto px-4 grid items-center">
        <div className="bannerCont">
          <div className="bannerPref capitalize pb-5 font-semibold">
            Book Trusted MRI, CT & <br /> Full Body Scans
          </div>
          <div className="bannerSvg">
            <img className="" src={assetUrl("images/bannerTitle.svg")} alt="" />
          </div>
          <div className="mt-[60px] relative z-1 w-full max-w-[600px]">
            <div className="absolute stamp z-2">
              <img src={assetUrl("images/stamp.svg")} alt="" />
            </div>
            <AppointmentForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bannerFloat imgResponsive">
        <img src={assetUrl("images/dhoni.png")} alt="" />
      </div>
    </section>
  );
}