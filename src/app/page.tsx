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
      {/* <Paragraph className="mt-10 text-2xl text-gray">
        Seven Racing, organized under Yeditepe University Mechanical Engineering
        Department, is a racing team that brings engineering students together
        and encourages them to work together on competition projects. We are
        preparing to successfully represent our country in the Shell Eco
        Marathon 2025 Competition in the Internal Combustion Engine Prototype
        Concept. As a passionate and dedicated team, our goal is not only to
        design vehicles, but also to be part of a movement that supports
        sustainability and innovation. In the days to come, we aim to expand our
        team's sphere of influence by growing and developing further, and to
        inspire those who will take our place.
      </Paragraph> */}
    </div>
  );
}
