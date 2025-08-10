import { assetUrl } from "../utils/helpers";
export default function Accreditations() {
  return (
    <section id="accreditations" className="md:pt-[150px] pt-[120px] accreditations relative grid">
        <img className="xl:block hidden absolute bottom-0 left-0" src={assetUrl('images/dhoniWithMan.png')} alt="" />
        <img className="xl:hidden bottom-0 left-0 w-full" src={assetUrl('images/dhonipersonipad.png')} alt="" />
        <div className="container mx-auto px-4 h-full text-white grid xl:justify-end xl:text-left text-center items-center xl:pb-[135px] gap-[30px] xl:order-none order-first md:pb-0 pb-4">
            <h2 className="secTitle pb-2">Need Help Choosing <br /> a Scan Or Package? </h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <div className="flex gap-4 xl:justify-start justify-center">
                <a href="javascript:;" className="themeBtn">
                    Enquire Now
                    <img className="md:block hidden" src={assetUrl('images/whiteArrow.svg')} alt="" />
                </a>
                <a href="javascript:;" className="themeBtn green">
                    <img src={assetUrl('images/wa.svg')} alt="" />
                    <div className="wa">
                        <p>WhatsApp</p>
                        <p>Chat Now</p>
                    </div>
                    <img className="md:block hidden" src={assetUrl('images/whiteArrow.svg')} alt="" />
                </a>
            </div>
            <div>
                <p className="pb-4">Neuberg App on Play Store & iOS</p>
                <div className="flex gap-2 xl:justify-start justify-center">
                    <img src={assetUrl('images/appstore.svg')} alt="" />
                    <img src={assetUrl('images/playstore.svg')} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}