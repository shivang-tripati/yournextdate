import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialProps {
  image: StaticImageData;
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, quote, author }) => {

  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <Image
        className="w-[20rem] h-[25rem] mr-6 object-cover"
        src={image}
        alt={author}
      />
      <div>
        <div className="items-center mb-4">
          <p className="text-pink-500 text-6xl">“</p>
          <p className="italic ml-2">{quote}</p>
        </div>
        <p className="text-right font-semibold">{author}</p>
      </div>
    </div>
  );
};

export default Testimonial;
