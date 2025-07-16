import grainImage from "@/assets/images/grain.jpg";
import { GoArrowUpRight } from "react-icons/go";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left  z-10 relative overflow-hidden">
          <div
            className="inset-0 absolute opacity-10 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you to achieve your goals.
              </p>
            </div>
            <div>
              <a
                href="mailto:manmoksh04+portfolio@gmail.com"
                aria-label="Send email to Manmoksh"
              >
                <button className="text-white bg-gray-900 inline-flex items-center h-12  px-6 rounded-xl gap-2 w-max border border-gray-900 hover:opacity-80 transition-opacity">
                  <span className="font-semibold">Contact Me </span>
                  <GoArrowUpRight className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
