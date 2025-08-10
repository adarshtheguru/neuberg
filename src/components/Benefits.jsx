import { assetUrl } from "../utils/helpers";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="pt-[120px] pb-[100px] benefits relative"
    >
      <img
        className="absolute bottom-0 left-0"
        src={assetUrl("images/person.png")}
        alt=""
      />
      <div className="container mx-auto px-4 relative">
        <h2 className="secTitle absolute left-0 top-[20px]">Designed for Patients Who Value <br /> Accuracy, Speed & Comfort</h2>
        <div className="grid grid-cols-3 gap-6 ml-auto w-[76%] text-center boxWrapper">
          {/* First row, right aligned */}
          <div className="col-start-2 box bg-white py-[30px] px-[35px]">
            <img className="pb-[40px] mx-auto" src={assetUrl('images/b1.svg')} alt="" />
            <p className="fadeBlack font-medium info">
                Integrated Radiology + Pathology in One Appointment
            </p>
          </div>
          <div className="box bg-white py-[30px] px-[35px]">
            <img className="pb-[40px] mx-auto" src={assetUrl('images/b2.svg')} alt="" />
            <p className="fadeBlack font-medium info">
                Home Sample Collection Available for Pathology
            </p>
          </div>
          {/* Second Row  */}
          <div className="box bg-white py-[30px] px-[35px]">
            <img className="pb-[40px] mx-auto" src={assetUrl('images/b3.svg')} alt="" />
            <p className="fadeBlack font-medium info">
                Same-Day Reports for Most Scans
            </p>
          </div>
          <div className="box bg-white py-[30px] px-[35px]">
            <img className="pb-[40px] mx-auto" src={assetUrl('images/b4.svg')} alt="" />
            <p className="fadeBlack font-medium info">
                Online Reports via App + WhatsApp
            </p>
          </div>
          <div className="box bg-white py-[30px] px-[35px]">
            <img className="pb-[40px] mx-auto" src={assetUrl('images/b5.svg')} alt="" />
            <p className="fadeBlack font-medium info">
                Central Chennai Location with Easy Parking
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}