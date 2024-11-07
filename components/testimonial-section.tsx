import React from 'react';
import Testimonial from './ui/testimonial';
import { images1 } from '@/utils/image';
import { StaticImageData } from 'next/image';
interface TestimonialData {
  image: StaticImageData
  quote: string;
  author: string;
}

const TestimonialsSection: React.FC = () => {
    const {t1, t2, t3, t4} = images1;
  const testimonials: TestimonialData[] = [
    {
      image: t1, // replace with the actual image path
      quote: 'There is no system in place to filter down people you are both physically and intellectually inspired by. That’s where this app comes in. It is a fantastic choice if you’re looking for a speed blind dates app that also acts as a social media app.',
      author: 'Kate Miller'
    },
    {
      image: t2, // replace with the actual image path
      quote: 'This app helped me find my perfect match in no time!',
      author: 'Jane Doe'
    },
    {
      image: t3, // replace with the actual image path
      quote: 'I love the real-time chat feature. It made connecting so easy!',
      author: 'John Smith'
    },
    {
        image: t4, // replace with the actual image path
        quote: 'This app helped me find my perfect match in no time!',
        author: 'Jane Doe'
      },
  ];

  return (
    <section id="testimonials" className="py-20 w-full bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="max-w-7xl grid lg:grid-cols-2 md:grid-cols-1 mx-auto gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            quote={testimonial.quote}
            author={testimonial.author}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
