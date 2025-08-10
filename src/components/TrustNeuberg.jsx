import { assetUrl } from "../utils/helpers";
export default function TrustNeuberg() {
  return (
    <section id="why-neuberg" className="pt-[80px] whyNeuberg relative">
        <img className="top-0 left-0 absolute w-fit" src={assetUrl("images/leftStar.png")} alt="" />
        <img className="bottom-10 right-0 absolute w-fit" src={assetUrl("images/rightStar.png")} alt="" />
        <div className="container mx-auto px-4">
            <div className="iconWrap">
                <img src={assetUrl('images/icon1.svg')} alt="" />
                <img src={assetUrl('images/icon2.svg')} alt="" />
                <img src={assetUrl('images/icon3.svg')} alt="" />
                <img src={assetUrl('images/icon4.svg')} alt="" />
                <img src={assetUrl('images/icon5.svg')} alt="" />
            </div>
            <div className="text-center text-white secTitle pb-[60px]">Thousands Trust Neuberg for <br /> Radiology & Pathology</div>
        </div>
    </section>
  );
}