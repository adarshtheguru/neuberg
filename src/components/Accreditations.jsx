import { assetUrl } from "../utils/helpers";
export default function Accreditations() {
  return (
    <section id="accreditations" className="pt-[150px] accreditations relative">
        <img className="absolute bottom-0 left-0" src={assetUrl('images/dhoniWithMan.png')} alt="" />
        <div className="container mx-auto px-4 h-full text-white grid justify-end items-center pb-[135px] gap-[30px]">
            <h2 className="secTitle pb-2">Need Help Choosing <br /> a Scan Or Package? </h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <div className="flex gap-4">
                <a href="javascript:;" className="themeBtn">
                    Enquire Now
                    <img src={assetUrl('images/whiteArrow.svg')} alt="" />
                </a>
                <a href="javascript:;" className="themeBtn green">
                    <img src={assetUrl('images/wa.svg')} alt="" />
                    <div className="wa">
                        <p>WhatsApp</p>
                        <p>Chat Now</p>
                    </div>
                    <img src={assetUrl('images/whiteArrow.svg')} alt="" />
                </a>
            </div>
            <div>
                <p className="pb-4">Neuberg App on</p>
                <div className="flex gap-2">
                    <img src={assetUrl('images/appstore.svg')} alt="" />
                    <img src={assetUrl('images/playstore.svg')} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}