import myTubeImage from "@/assets/images/mytube.png";
import docImage from "@/assets/images/docCollab.png";

import { Card } from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "MyTube — YouTube Clone",
    link: "https://mytube.manmoksh.tech",
    github: "https://github.com/manmoksh/MyTube",
    image: myTubeImage,
    techStack: ["Next.js", "Mux", "Clerk", "Gemini", "Tailwind CSS", "Shadcn"],
    results: [
      { title: "Full-featured YouTube clone" },
      { title: "Supports video upload, comments, likes" },
      { title: "Channel pages and real-time features" },
    ],
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "DocCollab — Real-Time Editor",
    link: "https://doc-collabs.vercel.app",
    github: "https://github.com/manmoksh/doc-collab",
    image: docImage,
    techStack: ["React", "Liveblocks", "Clerk", "Tailwind CSS", "Vercel"],
    results: [
      { title: "Collaborative document editing in real time" },
      { title: "Multi-user interactions via WebSockets" },
      { title: "Authentication and document syncing" },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real- World Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experinces"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, idx) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 md:pt-12 md:px-10  lg:pt-16 lg:px-20 pb-0 "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-white/10 text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex  text-white/50 items-center text-sm md:text-base gap-2"
                      >
                        <span>
                          <FaRegCircleCheck className="size-5 md:size-6 text-green-500" />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer">
                        <span>ViewSite</span>

                        <GoArrowUpRight className="size-4" />
                      </button>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="border border-white text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer">
                          <FaGithub className="size-6" />
                          GitHub
                        </button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
