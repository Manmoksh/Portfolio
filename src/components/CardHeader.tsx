import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

type Props = { title: string; description: string; className?: string };

export const CardHeader = ({ title, description, className }: Props) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2 lg:text-base max-w-xs">
        {description}
      </p>
    </div>
  );
};
