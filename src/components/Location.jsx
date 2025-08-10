import { useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";

export default function Location() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 768) {
        setBgImage(assetUrl("images/location-mobile.jpg"));
      } else {
        setBgImage(assetUrl("images/locationBgDesk.jpg"));
      }
    };

    updateBg(); // Initial check
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <section
      id="location"
      className="location relative h-[710px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 w-[80%] h-full relative grid items-center">
        {/* Content */}
        <div className="locData w-[35%]">
            <img src={assetUrl('images/logo.png')} alt="" />
            <div className="addWrapper grid gap-4">
                <p className="font-bold fadeBlack">Neuberg Diagnostics, Chennai</p>
                <div className="flex gap-2">
                    <img src={assetUrl('images/distance.svg')} alt="" />
                    <p>No. 7, Industrial Estate, Opp. to World Trade Center,Perungudi, Chennai - 600 096, Tamil Nadu, India</p>
                </div>
                <div className="flex gap-2">
                    <img src={assetUrl('images/cottage.svg')} alt="" />
                    <p>Home Visit - <a className="underline" href="tel:+918939066655"></a>+91 8939066655</p>
                </div>
                <div className="flex gap-2">
                    <img src={assetUrl('images/headset.svg')} alt="" />
                    <p>Customer Care - <a className="underline" href="tel:+919700369700"></a>+91 9700369700</p>
                </div>
            </div>
            <a href="javascript:;" className="block themeBtn mt-4 w-fit">Get Direction</a>
        </div>
      </div>
    </section>
  );
}