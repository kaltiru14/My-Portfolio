import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "flare-car car rental website",
    description:
      "This website enables car owners to list their vehicles for rent and allows users to book cars effortlessly. Owners can manage their listings, set availability, and earn income, while renters enjoy a seamless experience to find, compare, and reserve vehicles for their needs.",
    image: "/flare-car.png",
    github: "https://github.com/samuel-T12/flare-car",
    link: "",
  },
  {
    name: "AAU Employee Management System",
    description:
      "This employee management system portal provides a comprehensive solution for managing employee-related tasks and processes. It ws built using Nextjs for the frontend, Nodejs for the Backend, and Mongodb for the Database.",
    image: "/AAU.png",
    github: "https://github.com/kalikal1/AAU_Employee_Management",
    link: "https://final-project-nine-pi.vercel.app/",
  },
  {
    name: "To-Do",
    description: "To-Do is a to do list website that is built using HTML,CSS, and Javascript.",
    image: "/todo.png",
    github: "https://github.com/kalikal1/To-Do-List",
    link: "",
  },
  {
    name: "Health Consultation",
    description: "This mobile app is used for patients to chat with available and available doctors incase of emergency and advice.It is built by using reactnative. ",
    image: "/",
    github: "https://github.com/kalikal1/Health_Consultation",
    link: "",
  },
  {
    name: "Where-in-Addis",
    description:
      "Where in addis gives information about different recreational places in addis ababa, Ethiopia.",
    image: "/",
    github: "https://github.com/kalikal1/Where-in-Addis",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2  justify-center">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    {project.link != '' &&
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
