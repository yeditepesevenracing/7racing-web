import Paragraph from "@/components/common/paragraph";
import Title from "@/components/common/title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#269b76_100%)] -z-10">
      <Image
        src="/logo-bg.png"
        width={480}
        height={480}
        alt="Team logo"
        className="mt-20"
      />
      <Title text="We are 7Racing." />
      <p className="mt-5 text-gray font-md">
        United by engineering. Driven by purpose.
      </p>
    </div>
  );
}
