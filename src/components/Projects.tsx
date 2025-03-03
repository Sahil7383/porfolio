import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
  category: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      demoLink: "#",
      githubLink: "#",
      category: "Web",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["React Native", "Firebase", "Redux", "Health API"],
      demoLink: "#",
      githubLink: "#",
      category: "Mobile",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "A collaborative task management tool with real-time updates, team assignments, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      demoLink: "#",
      githubLink: "#",
      category: "Web",
    },
    {
      id: 4,
      title: "Travel Companion App",
      description:
        "A travel planning app with itinerary management, location-based recommendations, and offline maps.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80",
      techStack: ["Flutter", "Firebase", "Google Maps API", "TripAdvisor API"],
      demoLink: "#",
      githubLink: "#",
      category: "Mobile",
    },
    {
      id: 5,
      title: "AI Content Generator",
      description:
        "A web application that uses AI to generate marketing content, blog posts, and social media captions.",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
      demoLink: "#",
      githubLink: "#",
      category: "Web",
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description:
        "A platform connecting property buyers, sellers, and agents with virtual tours and mortgage calculators.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      techStack: ["React", "Django", "PostgreSQL", "AWS S3"],
      demoLink: "#",
      githubLink: "#",
      category: "Web",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve specific problems and deliver exceptional user experiences.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Web", "Mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? "bg-gray-800" : "bg-white border border-gray-100"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-700 text-blue-400"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
