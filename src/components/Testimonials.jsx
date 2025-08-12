import { assetUrl } from "../utils/helpers";
import Slider from "react-slick";

export default function Testimonials() {
  const images = [
    "images/test1.png",
    "images/test2.png",
    "images/test3.png",
  ];

  const mobimages = [
    "images/test1.png",
    "images/test2.png",
    "images/test3.png",
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="testimonials"
      className="md:pt-[100px] md:pb-[90px] pt-[50px] pb-[90px] testimonials relative"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="secTitle text-center fadeBlack pb-4">
          Rated 4.3* by Chennai Patients
        </h2>

        {/* Review Banner */}
        <img
          className="mx-auto max-w-full mb-8 hidden sm:block"
          src={assetUrl("images/reviewDesk.svg")}
          alt=""
        />
        <img
          className="mx-auto max-w-full mb-8 block sm:hidden"
          src={assetUrl("images/reviewMob.svg")}
          alt=""
        />

        {/* Desktop Slider */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => {
              const bigImage = images[index * 3];
              const small1 = images[index * 3 + 1];
              const small2 = images[index * 3 + 2];

              return (
                <div key={index} className="px-2">
                  <div className="grid grid-cols-2 gap-2 h-[400px]">
                    <div className="w-full h-full">
                      <img
                        src={assetUrl(bigImage)}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
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
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Slider {...settings}>
            {mobimages.map((img, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={assetUrl(img)}
                  alt=""
                  className="w-full object-cover rounded-lg aspect-3/2"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}