import React from "react";
import {
  Globe,
  Smartphone,
  Code,
  Database,
  Palette,
  Server,
} from "lucide-react";

interface ServicesProps {
  darkMode: boolean;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services: Service[] = [
    {
      icon: <Globe size={40} className="text-blue-600" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks and best practices for optimal performance and user experience.",
    },
    {
      icon: <Smartphone size={40} className="text-blue-600" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver seamless experiences across all devices.",
    },
    {
      icon: <Palette size={40} className="text-blue-600" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality to create intuitive and engaging interfaces.",
    },
    {
      icon: <Database size={40} className="text-blue-600" />,
      title: "Database Design",
      description:
        "Efficient and scalable database architectures that ensure data integrity, security, and optimal performance.",
    },
    {
      icon: <Server size={40} className="text-blue-600" />,
      title: "API Development",
      description:
        "Robust and well-documented APIs that enable seamless integration between different systems and services.",
    },
    {
      icon: <Code size={40} className="text-blue-600" />,
      title: "Code Review & Optimization",
      description:
        "Comprehensive code analysis and optimization to improve performance, maintainability, and security of existing applications.",
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals bring
            their digital ideas to life with quality and efficiency.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-blue-50 border border-gray-100"
              }`}
            >
              <div
                className={`mb-6 p-4 inline-block rounded-full ${
                  darkMode ? "bg-gray-800" : "bg-blue-50"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
