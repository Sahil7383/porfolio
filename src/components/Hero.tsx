import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-white"
      } pt-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-lg md:text-xl font-medium text-blue-600 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sahil Naliyadhara
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Building Scalable Web & Mobile Solutions
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I'm a full-stack developer specializing in creating exceptional
              digital experiences. With expertise in both web and mobile
              development, I bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center shadow-md hover:shadow-lg"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#projects"
                className={`px-6 py-3 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                    : "bg-white hover:bg-gray-50 border-gray-200"
                } border font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg`}
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGVyfGVufDB8fDB8fHww"
                  alt="Sahil Naliyadhara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute -bottom-4 -right-4 px-6 py-2 ${
                  darkMode ? "bg-gray-800" : "bg-white border border-gray-100"
                } rounded-full shadow-lg`}
              >
                <span className="text-blue-600 font-bold">
                  3+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
