import Title from "@/components/common/title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center  min-h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#269b76_100%)] -z-10">
      <Title text="We are 7Racing." className="mt-20" />
      <p className="mt-10 text-xl text-gray">
        Fuelled by our passion for engineering, working towards Shell Eco
        Marathon 2025.
      </p>
      {/* <Image
        src="/stockteam.jpg"
        width={1000 / 1}
        height={667 / 1}
        alt="Team"
        className="mt-10"
      /> */}
    </div>

    // <div>
    //   <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#269b76_100%)]"></div>
    //   <Title text="We are 7Racing." className="flex justify-center mt-40" />
    //   <p className="flex justify-center mt-20 text-xl text-gray">
    //     Fuelled by our passion for engineering, working towards Shell Eco
    //     Marathon 2025.
    //   </p>
    //   <Image
    //     src="/stockteam.jpg"
    //     width={1000 / 1.5}
    //     height={667 / 1.5}
    //     alt="Team"
    //     className="flex flex-row justify-center"
    //   />
    // </div>
  );
}
