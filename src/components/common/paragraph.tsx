import { cn } from "@/lib/utils";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  first?: boolean;
}

const Paragraph = ({ children, className, first = false }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "mt-4 text-2xl mx-60 mb-3",
        first &&
          "first-letter:text-8xl first-letter:mt-3 first-letter:font-bold first-letter:text-black-900 first-letter:me-3 first-letter:float-start",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
