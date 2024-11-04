import { cn } from "@/lib/utils";

const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-2xl mx-40 mb-3 first-letter:text-7xl first-letter:font-bold first-letter:text-black-900 first-letter:me-3 first-letter:float-start",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
