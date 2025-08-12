import { useRef, useState, useEffect } from "react";
import { assetUrl } from "../utils/helpers";
import Slider from "react-slick";
import { scrollToWithAnimation } from "../utils/helpers";

export default function Services() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [dotsStatus, setDotsStatus] = useState(false);
  const [arrowStatus, setArrowStatus] = useState(true);

  const handleClick = () => {
      scrollToWithAnimation("formBox", -200, "shake", 1000);
    };

  // Detect device width and set slides count
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        // iPhone
        setSlidesToShow(1);
        setDotsStatus(true);
        setArrowStatus(false);
      } else if (width <= 992) {
        // iPad
        setSlidesToShow(1);
        setDotsStatus(true);
        setArrowStatus(false);
      } else if (width <= 1024) {
        // Small laptop
        setSlidesToShow(2);
        setDotsStatus(true);
        setArrowStatus(false);
      } else {
        // Desktop
        setSlidesToShow(3);
        setDotsStatus(false);
        setArrowStatus(true);
      }
    };

    updateSlides(); // Run on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    arrows: arrowStatus,
    dots: dotsStatus,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
  };

  // Example slider items with listData
  const slides = [
  {
    id: 1,
    img: assetUrl("images/service1.png"),
    title: "MRI Scan",
    subTitle: "High-Definition, Noise-Free Imaging",
    buttonText : "Book MRI Scan Now",
    listData: {
      "Fast Results": "Same-day reports with advanced 1.5T MRI.",
      "Patient Comfort": "Noise-reduction technology with shorter scan times.",
      "High Accuracy": "Detailed brain, spine, joint, and liver imaging with colour maps.",
      "Helps In": "Brain, spine, soft-tissue, sports injuries, tumour screening."
    }
  },
  {
    id: 2,
    img: assetUrl("images/service2.png"),
    title: "CT Scan",
    subTitle: "Low Dose, High Resolution",
    buttonText : "Schedule CT Appointment",
    listData: {
      "Crystal-Clear Imaging": "Sub-millimetre slices with organ-specific precision.",
      "Safe & Smart": "ASIR + organ dose modulation for lower radiation.",
      "Quick Turnaround": "Rapid post-processing & cardiologist-reviewed reports.",
      "Helps In": "Chest, cardiac, abdomen, trauma & full body scans."
    }
  },
  {
    id: 3,
    img: assetUrl("images/service3.png"),
    title: "Digital X-Ray",
    subTitle: "Instant, High-Quality Diagnostics",
    buttonText : "Book Digital X-Ray",
    listData: {
      "Instant Viewing": "Direct digital imaging with no film delay.",
      "Accurate & Efficient": "Reduced retakes and enhanced clarity with Cesium Iodide detectors.",
      "Patient Friendly": "Portable option available with low radiation dose.",
      "Helps In": "Chest, bone, dental, and injury scans."
    }
  },
  {
    id: 4,
    img: assetUrl("images/service4.png"),
    title: "Portable Digital X-Ray",
    subTitle: "Comfort Meets Convenience",
    buttonText : "Book Home X-Ray Visit",
    listData: {
      "At-Home Service": "No travel needed for the patient.",
      "Quick & Safe": "Mobility-enabled with fast turnaround.",
      "Reliable Quality": "No compromise on image clarity.",
      "Helps In": "Senior citizens, bedridden or post-surgical patients."
    }
  },
  {
    id: 5,
    img: assetUrl("images/service5.png"),
    title: "Ultrasound & Doppler",
    subTitle: "Real-Time, Dynamic Imaging",
    buttonText : "Book Ultrasound/Doppler",
    listData: {
      "Clarity in Motion": "4D ultrasound with advanced Doppler sensitivity.",
      "Expert Analysis": "Female radiologists available on request.",
      "Flexible Delivery": "Available at centre or via mobile units.",
      "Helps In": "Pregnancy, abdomen, pelvis, vascular, thyroid."
    }
  },
  {
    id: 6,
    img: assetUrl("images/service6.png"),
    title: "Mammography",
    subTitle: "Early Detection That Saves Lives",
    buttonText : "Book Mammogram Screening",
    listData: {
      "Low-Dose Screening": "Digital mammogram for minimal exposure.",
      "Fast Reports": "Same-day availability for peace of mind.",
      "Women First": "Specialised care environment for women.",
      "Helps In": "Women 40+, preventive care, breast health."
    }
  },
  {
    id: 7,
    img: assetUrl("images/service7.png"),
    title: "OPG (Dental X-Ray)",
    subTitle: "Full Jaw View in One Go",
    buttonText : "Book OPG Scan",
    listData: {
      "Panoramic Imaging": "Entire upper & lower jaw in one scan.",
      "Dental Planning": "Detects impacted teeth, alignment, and growth.",
      "Safe & Quick": "Non-invasive with instant output.",
      "Helps In": "Comprehensive dental assessments."
    }
  }
];

  return (
    <section id="services" className="md:pt-[200px] md:pb-[150px] md:text-left pt-[90px] pb-[90px] z-1 services relative">
      <div className="container mx-auto px-4 relative">
        <img src={assetUrl('images/thumb.png')} alt="" className="absolute top-[-75px] left-[-40px] z-2" />
        <h2 className="secTitle text-black font-bold pb-2 relative z-3 xl:text-left text-center">
          Precision Scans. Proven Speed. <br className=" md:block hidden" /> Personalized Reporting.
        </h2>
        <div className="flex place-content-between">
          <p className="fadeBlack font-medium">
            Chennais top-rated radiology centre - trusted for fast, accurate
            diagnosis using the latest global technology.
          </p>
          {
            arrowStatus && (
              <div className="customArrow flex gap-2">
                <div
                  id="servLeft"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="cursor-pointer"
                >
                  <img src={assetUrl("images/left.svg")} alt="Prev" />
                </div>
                <div
                  id="servRight"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="cursor-pointer"
                >
                  <img src={assetUrl("images/right.svg")} alt="Next" />
                </div>
              </div>
            )
          }
        </div>

        {/* Slider */}
        <div className="mt-10 servicesSliderWrapper w-full">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden box">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="content p-4">
                    <div className="upperData title mb-3">
                      <div className="font-semibold text-lg">{slide.title}</div>
                      <div className="text-gray-500 subTitle">{slide.subTitle}</div>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {Object.entries(slide.listData).map(([key, value], idx) => (
                        <li key={idx}>
                          <strong>{key}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                    <a href="javascript:;" className="themeBtn text-center w-full block" data-title={slide.title} onClick={handleClick}>
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}