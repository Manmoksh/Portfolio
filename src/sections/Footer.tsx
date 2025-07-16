import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15  py-6  text-sm flex flex-col items-center gap-6">
          <div className="text-white/40 ">
            &copy; {new Date().getFullYear()} Manmoksh. All rights reserved.
          </div>
          <nav className="inline-flex items-center gap-4 text-2xl">
            <a
              href="https://github.com/Manmoksh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-white/70 transition" />
            </a>
            <a
              href="https://linkedin.com/in/Manmoksh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-white/70  transition" />
            </a>
            <a
              href="https://leetcode.com/Manmoksh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode className="hover:text-white/70  transition" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
