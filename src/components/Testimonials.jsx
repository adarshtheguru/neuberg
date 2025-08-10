import { assetUrl } from "../utils/helpers";
import Slider from "react-slick";

export default function Testimonials() {
  const images = [
    "images/test1.png",
    "images/test2.png",
    "images/test3.png",
    "images/test1.png",
    "images/test2.png",
    "images/test3.png",
    "images/test1.png",
    "images/test2.png",
    "images/test3.png",
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Only 1 "layout" per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="pt-[100px] pb-[90px] testimonials relative"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="secTitle text-center fadeBlack pb-4">
          Rated 4.3* by Chennai Patients
        </h2>

        {/* Review Banner */}
        <img
          className="mx-auto max-w-full mb-8"
          src={assetUrl("images/reviewDesk.svg")}
          alt=""
        />

        {/* Slider */}
        <Slider {...settings}>
          {/* Each slide will contain a special grid layout */}
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => {
            const bigImage = images[index * 3];
            const small1 = images[index * 3 + 1];
            const small2 = images[index * 3 + 2];

            return (
              <div key={index} className="px-2">
                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-2 gap-2 h-[400px]">
                  {/* Left Big Image */}
                  <div className="w-full h-full">
                    <img
                      src={assetUrl(bigImage)}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Right Small Images */}
                  <div className="grid grid-rows-2 gap-2 h-full">
                    {small1 && (
                      <img
                        src={assetUrl(small1)}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                    {small2 && (
                      <img
                        src={assetUrl(small2)}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  {bigImage && (
                    <img
                      src={assetUrl(bigImage)}
                      alt=""
                      className="w-full mb-2 object-cover rounded-lg"
                    />
                  )}
                  {small1 && (
                    <img
                      src={assetUrl(small1)}
                      alt=""
                      className="w-full mb-2 object-cover rounded-lg"
                    />
                  )}
                  {small2 && (
                    <img
                      src={assetUrl(small2)}
                      alt=""
                      className="w-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}