"use client";
import bookCover from "@/assets/images/book-cover.png";
import smileMemoji from "@/assets/images/memoji-graduate.png";
import mapImage from "@/assets/images/Screenshot 2025-07-16 210529.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolBoxItems from "@/components/ToolBoxItem";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "40%", top: "25%" },
  { title: "Chess", emoji: "♟️", left: "50%", top: "0%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Reading", emoji: "📚", left: "55%", top: "48%" },
  { title: "Coding", emoji: "🧑‍💻", left: "5%", top: "5%" },
  { title: "Puzzle Games", emoji: "🧩", left: "3%", top: "65%" },
  { title: "Cooking", emoji: "🍳", left: "65%", top: "69%" },
  { title: "Music", emoji: "🎵", left: "65%", top: "25%" },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid-cols-5  grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookCover} alt="My reads" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to create exceptional
            digital experience."
              />
              <ToolBoxItems className="" itemWrapperCln="animate-move-left" />
              <ToolBoxItems
                className="mt-6 "
                itemWrapperCln="-translate-x-1/2 animate-move-right"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />

              <div className="relative flex-1 " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={constraintRef}
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="location"
                className="size-full object-cover "
                loading="lazy"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 size-20">
                <div className="absolute inset-0 rounded-full -z-20 animate-ping [animation-duration:2s] bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <div className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  src={smileMemoji}
                  alt="emoji"
                  className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-16"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
