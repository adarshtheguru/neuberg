import { useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";

export default function Location() {
  const [bgImage, setBgImage] = useState("images/locationBgDesk.jpg");

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 1025) {
        setBgImage(assetUrl("images/locationMob.png"));
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
      className="location relative xl:h-[710px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="xl:container mx-auto xl:px-4 xl:w-[80%] w-full h-full relative xl:grid items-center">
        {/* Content */}
        <div className="locData xl:w-[35%] w-full xl:px-0 xl:py-0 xl:pt-0 px-4 py-4 pt-[30px]">
            <img src={assetUrl('images/logo.svg')} alt="" />
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
            <a href="https://maps.app.goo.gl/AwUwXbd5XiYu5ZRF6" target="_blank" className="block themeBtn mt-4 w-fit">Get Direction</a>
        </div>
        <div className="block xl:hidden m-[-2px]">
          <img className="w-full" src={bgImage} alt="" />
        </div>
      </div>
    </section>
  );
}