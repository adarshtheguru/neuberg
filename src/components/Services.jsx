import { useRef } from "react";
import { assetUrl } from "../utils/helpers";
import Slider from "react-slick";

export default function Services() {
    const sliderRef = useRef(null);

  // Slick settings
  const settings = {
    arrows: false, // Disable default slick arrows
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  // Example slider items with listData
  const slides = [
    {
      id: 1,
      img: assetUrl("images/service1.png"),
      title: "MRI Scan",
      subTitle: "High-Definition, Noise-Free Imaging",
      listData: {
        "Fast Results": "Get your MRI results within hours.",
        "Patient Comfort": "Silent and spacious machine for a stress-free scan.",
        "High Accuracy": "Advanced imaging for precise diagnosis.",
        "Helps In": "Detecting tumors, brain disorders, and spinal issues."
      }
    },
    {
      id: 2,
      img: assetUrl("images/service2.png"),
      title: "CT Scan",
      subTitle: "Low Dose. High Resolution",
      listData: {
        "Fast Results": "Quick scans with minimal radiation exposure.",
        "Patient Comfort": "Short scan times reduce discomfort.",
        "High Accuracy": "Detailed cross-sectional images.",
        "Helps In": "Detecting internal injuries and diseases."
      }
    },
    {
      id: 3,
      img: assetUrl("images/service3.png"),
      title: "Ultrasound",
      subTitle: "Instant, High-Quality Diagnostics",
      listData: {
        "Fast Results": "Real-time imaging during the procedure.",
        "Patient Comfort": "Non-invasive and painless process.",
        "High Accuracy": "Clear visuals for accurate detection.",
        "Helps In": "Monitoring pregnancy, diagnosing organ issues."
      }
    },
    {
      id: 4,
      img: assetUrl("images/service1.png"),
      title: "X-Ray",
      subTitle: "High-Definition, Noise-Free Imaging",
      listData: {
        "Fast Results": "Images ready within minutes.",
        "Patient Comfort": "Quick and simple positioning.",
        "High Accuracy": "Crisp images for better diagnosis.",
        "Helps In": "Detecting fractures, infections, and lung issues."
      }
    }
  ];

  return (
    <section id="services" className="pt-[200px] pb-[150px] z-1 services relative">
      <div className="container mx-auto px-4 relative">
        <img src={assetUrl('images/thumb.png')} alt="" className="absolute top-[-75px] left-[-40px] z-2" />
        <h2 className="secTitle text-black font-bold pb-2 relative z-3">
          Precision Scans. Proven Speed. <br /> Personalized Reporting.
        </h2>
        <div className="flex place-content-between">
          <p className="fadeBlack font-medium">
            Chennais top-rated radiology centre - trusted for fast, accurate
            diagnosis using the latest global technology.
          </p>
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
        </div>

        {/* Slider */}
        <div className="mt-10 servicesSliderWrapper">
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
                      <div className="text-gray-500">{slide.subTitle}</div>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {Object.entries(slide.listData).map(([key, value], idx) => (
                        <li key={idx}>
                          <strong>{key}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                    <a href="javascript:;" className="themeBtn text-center w-full block">
                      Book {slide.title} Now
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