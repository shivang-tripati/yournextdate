// components/Carousel.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselItem {
  image: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="px-5 relative">
          <div className="w-full h-96 relative rounded-xl">
            {" "}
            {/* Set a fixed height to maintain the aspect ratio */}
            <Image
              src={item.image}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-xl" // Optionally add rounded corners
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
