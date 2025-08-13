import { useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";
import { AppointmentForm } from "./AppointmentForm";
export default function TrustNeuberg() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 1280);
        };
    
        handleResize(); // run on mount
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <section id="why-neuberg" className="xl:pt-[70px] whyNeuberg relative">
        <img className="top-0 left-0 absolute w-fit" src={assetUrl("images/leftStar.png")} alt="" />
        <img className="bottom-10 right-0 absolute w-fit" src={assetUrl("images/rightStar.png")} alt="" />
        <div className="container mx-auto px-4">
            {
                isSmallScreen && (
                    <div className="mt-[-50px] pb-[50px] w-[90%] mx-auto">
                        <AppointmentForm />
                    </div>
                )
            }
            <div className="text-center text-white secTitle pb-[40px]">Millions Trust Neuberg Diagnostics <br className="hidden-md" /> for Radiology & Pathology Test</div>
            <div className="iconWrap pb-[60px]">
                <img className="mx-auto" src={assetUrl('images/icon1.svg')} alt="" />
                <img className="mx-auto" src={assetUrl('images/icon2.svg')} alt="" />
                <img className="mx-auto" src={assetUrl('images/icon3.svg')} alt="" />
                <img className="mx-auto" src={assetUrl('images/icon4.svg')} alt="" />
                <img className="mx-auto" src={assetUrl('images/icon5.svg')} alt="" />
            </div>
            <div className="detailWrap relative z-2">
                <div className="box">
                    <img src={assetUrl('images/ic.svg')} alt="" />
                    <div className="data">
                        <div className="title mavenPro font-bold">Integrated Centre</div>
                        <p className="info">
                            One-stop for radiology, pathology, and genomics
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img src={assetUrl('images/machine.svg')} alt="" />
                    <div className="data">
                        <div className="title mavenPro font-bold">HD Imaging Machines</div>
                        <p className="info">
                            1.5T MRI, 500-slice CT, Digital X-ray, Ultrasound & more
                        </p>
                    </div>
                </div>
                <div className="box">
                    <img src={assetUrl('images/accuracy.svg')} alt="" />
                    <div className="data">
                        <div className="title mavenPro font-bold">Speed + Accuracy</div>
                        <p className="info">
                            Same-day reporting with expert radiologists
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}