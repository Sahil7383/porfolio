import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  darkMode: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "Working with Alex was a game-changer for our company. The web application they built for us has streamlined our operations and received fantastic feedback from our users. Their technical expertise and attention to detail are unmatched.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "AppVenture",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "Alex developed a mobile app for our startup that exceeded all expectations. Their ability to understand our vision and translate it into a functional, beautiful product was impressive. They were responsive, professional, and delivered on time and within budget.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Global Brands",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      text: "We hired Alex to redesign our company website, and the results were outstanding. They took the time to understand our brand and created a site that perfectly represents who we are. The increase in user engagement and conversions has been significant.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={`p-8 md:p-12 rounded-lg shadow-lg ${
              darkMode
                ? "bg-gray-800"
                : "bg-gradient-to-br from-blue-50 to-white border border-gray-100"
            }`}
          >
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={60} className="text-blue-600" />
            </div>

            <div className="relative z-10">
              <p className="text-lg md:text-xl italic mb-8 text-gray-700 dark:text-gray-300">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100 dark:border-gray-700">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400">
                    {testimonials[currentIndex].position},{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100 border border-gray-200"
              } shadow-md transition-colors`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-blue-600"
                      : darkMode
                      ? "bg-gray-700"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100 border border-gray-200"
              } shadow-md transition-colors`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
