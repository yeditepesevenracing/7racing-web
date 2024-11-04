import { cn } from "@/lib/utils";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <h1 className={cn("font-sans font-extrabold text-7xl m-10", className)}>
      {text}
    </h1>
  );
};

export default Title;
