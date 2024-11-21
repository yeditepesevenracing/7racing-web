"use client";

import Title from "@/components/common/title";
import { useIsVisible } from "@/lib/hooks";
import Image from "next/image";

import { useRef } from "react";

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const isVisibleLogo = useIsVisible(logoRef);
  const isVisibleAbout = useIsVisible(aboutRef);

  // relative flex flex-col items-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#269b76_100%)] -z-10
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#269b76_100%)]"></div>
      <div
        onScroll={() => console.log("hello")}
        className="flex flex-col items-center"
      >
        <div
          ref={logoRef}
          className={`flex flex-col items-center transition-opacity ease-in duration-700 ${
            isVisibleLogo ? "opacity-100" : "opacity-0"
          }`}
        >
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

        <div
          // className="border rounded-lg m-[500px] bg-black/20 p-5"
          className={`border rounded-lg m-[500px] bg-black/20 p-5 transition-opacity ease-in duration-700 ${
            isVisibleAbout ? "opacity-100" : "opacity-0"
          }`}
          ref={aboutRef}
        >
          <p className="font-bold text-2xl">
            Seven Racing, organized under Yeditepe University Mechanical
            Engineering Department, is a racing team that brings engineering
            students together and encourages them to work together on
            competition projects. We are preparing to successfully represent our
            country in the Shell Eco Marathon 2025 Competition in the Internal
            Combustion Engine Prototype Concept. As a passionate and dedicated
            team, our goal is not only to design vehicles, but also to be part
            of a movement that supports sustainability and innovation. In the
            days to come, we aim to expand our team's sphere of influence by
            growing and developing further, and to inspire those who will take
            our place.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
