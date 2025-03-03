import React from "react";
import { Download, CheckCircle } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "Next.js",
        "HTML/CSS",
        "JavaScript/TypeScript",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
      category: "Other",
      items: ["Git/GitHub", "Docker", "AWS", "CI/CD", "RESTful APIs"],
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate software developer with over 5 years of
              experience in creating beautiful, functional, and user-centered
              digital experiences. My journey in software development began with
              a curiosity about how things work on the web, which quickly
              evolved into a career building solutions for clients worldwide.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in both web and mobile development, with a strong
              focus on creating scalable applications that solve real-world
              problems. My approach combines technical expertise with creative
              problem-solving to deliver products that exceed expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentorship.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a> */}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    darkMode ? "bg-gray-700" : "bg-white border border-gray-100"
                  } shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <h4 className="text-xl font-bold mb-4 text-blue-600">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <CheckCircle
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
