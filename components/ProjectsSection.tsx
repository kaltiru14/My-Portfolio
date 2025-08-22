import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Data Lakehouse Bank Project ",
    description:
      "Designed and implemented a data lakehouse using NiFi, Spark, Iceberg, and MinIO to automate ETL processes from multiple banking data sources. Transformed and stored data efficiently, integrated with Dremio, and developed dashboards in Superset for reporting and analytics.",
    image: "/lakehouse.jpg",
    github: "",
    link: "",
    tech: ["Apache Nifi", "Minio", "Apache Spark", "Apache Iceberg", "Nessie","Dremio", "Apache Superset"],
    featured: true
  },
  {
    name: "FlareCar - Car Rental Website",
    description:
      "This website enables car owners to list their vehicles for rent and allows users to book cars effortlessly. Owners can manage their listings, set availability, and earn income, while renters enjoy a seamless experience to find, compare, and reserve vehicles for their needs.",
    image: "/flare-car.png",
    github: "https://github.com/samuel-T12/flare-car",
    link: "",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    featured: true
  },
  {
    name: "AAU Employee Management System",
    description:
      "This employee management portal provides a comprehensive solution for managing employee-related tasks and processes. It was built using Next.js for the frontend, Node.js for the backend, and MongoDB for the database.",
    image: "/AAU.png",
    github: "https://github.com/kalikal1/AAU_Employee_Management",
    link: "https://final-project-nine-pi.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB"],
    featured: true
  },
  {
    name: "To-Do List",
    description:
      "To-Do is a basic to-do list web application built using HTML, CSS, and JavaScript.",
    image: "/todo.png",
    github: "https://github.com/kalikal1/To-Do-List",
    link: "",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false
  },
  {
    name: "Health Consultation App",
    description:
      "This mobile app allows patients to chat with available doctors for emergency assistance and health advice. It is built using React Native.",
    image: "/placeholder.png",
    github: "https://github.com/kalikal1/Health_Consultation",
    link: "",
    tech: ["React Native"],
    featured: false
  },
  {
    name: "Where in Addis",
    description:
      "Where in Addis provides information about various recreational places in Addis Ababa, Ethiopia.",
    image: "/placeholder.png",
    github: "https://github.com/kalikal1/Where-in-Addis",
    link: "",
    tech: ["React Native", "JavaScript"],
    featured: false
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white dark:bg-stone-900 py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-4xl mb-6">
          My Projects
          <hr className="w-12 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full" />
        </h1>

        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Here are some of my featured projects showcasing my skills in web and mobile development.
          Each project represents different aspects of my technical capabilities.
        </p>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-teal-600 dark:text-teal-400">Featured Work</h2>
          <div className="grid gap-16">
            {projects.filter(project => project.featured).map((project, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 w-full h-80 relative rounded-xl shadow-lg overflow-hidden">
                    {project.image && (
                      <Link href={project.link || project.github || "#"} 
                            target={project.link || project.github ? "_blank" : "_self"}>
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ objectPosition: 'top center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <span className="text-white text-lg font-medium">View Project</span>
                        </div>
                      </Link>
                    )}
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.github && (
                      <Link 
                        href={project.github} 
                        target="_blank"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <BsGithub size={24} />
                        <span>Code</span>
                      </Link>
                      )}
                      {project.link && (
                        <Link 
                          href={project.link} 
                          target="_blank"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                          aria-label={`View live demo of ${project.name}`}
                        >
                          <BsArrowUpRightSquare size={24} />
                          <span>Live Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-teal-600 dark:text-teal-400">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => !project.featured).map((project, idx) => (
              <div key={idx} className="group border border-gray-200 dark:border-stone-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-64 relative overflow-hidden">
                  {project.image && (
                    <Link href={project.link || project.github || "#"} 
                          target={project.link || project.github ? "_blank" : "_self"}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: 'top center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium">View Project</span>
                      </div>
                    </Link>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-stone-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link 
                        href={project.github} 
                        target="_blank"
                        className="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <BsGithub size={16} />
                        <span>Code</span>
                      </Link>
                    )}
                    {project.link && (
                      <Link 
                        href={project.link} 
                        target="_blank"
                        className="text-sm flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <BsArrowUpRightSquare size={16} />
                        <span>Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work?
          </p>
          <Link 
            href="https://github.com/kaltiru14" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <BsGithub size={20} />
            <span>Visit My GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;