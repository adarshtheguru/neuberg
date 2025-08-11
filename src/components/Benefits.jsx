import { assetUrl } from "../utils/helpers";

export default function Benefits() {
  const benefitsData = [
    {
      img: "images/b1.svg",
      text: "Integrated Radiology + Pathology in One Appointment",
    },
    {
      img: "images/b2.svg",
      text: "Home Sample Collection Available for Pathology",
    },
    {
      img: "images/b3.svg",
      text: "Same-Day Reports for Most Scans",
    },
    {
      img: "images/b4.svg",
      text: "Online Reports via App + WhatsApp",
    },
    {
      img: "images/b5.svg",
      text: "Central Chennai Location with Easy Parking",
    },
  ];

  return (
    <section
      id="benefits"
      className="md:pt-[120px] md:pb-[100px] pt-[30px] pb-[60px] benefits relative"
    >
      <img
        className="absolute bottom-0 left-0 hidden xl:block"
        src={assetUrl("images/person.png")}
        alt=""
      />
      <div className="container mx-auto px-4 relative">
        <h2 className="secTitle xl:absolute left-0 top-[20px] xl:text-left text-center xl:pb-0 pb-[30px]">
          Designed for Patients Who Value <br /> Accuracy, Speed & Comfort
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 ml-auto xl:w-[76%] w-full text-center boxWrapper">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className={`box bg-white md:py-[30px] py-[15px] md:px-[35px] px-[15px] ${
                index === 0 ? "xl:col-start-2" : ""}
                ${index === benefitsData.length - 1 ? "lg:col-span-1  lg:w-[100%] col-span-2 w-[50%] mx-auto" : ""}
                `}
            >
              <img
                className="md:pb-[40px] pb-[20px] mx-auto md:max-w-auto max-w-[45px]"
                src={assetUrl(benefit.img)}
                alt=""
              />
              <p className="fadeBlack font-medium info">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}