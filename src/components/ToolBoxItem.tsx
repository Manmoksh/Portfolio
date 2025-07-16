import { TechIcon } from "@/components/TechIcon";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPlotly,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";

import { GiGemini } from "react-icons/gi";
import { RiChromeFill } from "react-icons/ri";

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
const toolboxItems = [
  { title: "C", iconType: SiC },
  { title: "C++", iconType: SiCplusplus },
  { title: "Python", iconType: FaPython },
  { title: "Java", iconType: FaJava },
  { title: "Node.js", iconType: SiNodedotjs },
  { title: "Express.js", iconType: SiExpress },
  { title: "MongoDB", iconType: SiMongodb },
  { title: "MySQL", iconType: SiMysql },
  { title: "PostgreSQL", iconType: SiPostgresql },
  { title: "SQLite", iconType: SiSqlite },
  { title: "Firebase", iconType: SiFirebase },

  { title: "JavaScript", iconType: SiJavascript },
  { title: "TypeScript", iconType: SiTypescript },
  { title: "React", iconType: FaReact },
  { title: "Next.js", iconType: SiNextdotjs },
  { title: "HTML5", iconType: FaHtml5 },
  { title: "CSS3", iconType: FaCss3Alt },
  { title: "Tailwind CSS", iconType: SiTailwindcss },

  { title: "GitHub", iconType: FaGithub },
  { title: "Git", iconType: SiGit },

  { title: "Vercel", iconType: SiVercel },
  { title: "Netlify", iconType: SiNetlify },
  { title: "Chrome", iconType: RiChromeFill },
  { title: "VS Code", iconType: VscVscode },
  { title: "Pandas", iconType: SiPandas },
  { title: "OpenAI", iconType: SiOpenai },
  { title: "Gemini", iconType: GiGemini },
  { title: "NumPy", iconType: SiNumpy },
  { title: "Matplotlib", iconType: SiPlotly },
  { title: "Jupyter", iconType: SiJupyter },
];
const ToolBoxItems = ({
  className,
  itemWrapperCln,
}: {
  className?: string;
  itemWrapperCln?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemWrapperCln)}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {toolboxItems.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-white/10 outline-2 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold"> {item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
