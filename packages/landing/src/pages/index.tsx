import { GradientBall } from "@/components";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from "@/components/sections";
import { Blinker } from "next/font/google";

const blinker = Blinker({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${blinker.className} w-full relative`}>
      <GradientBall className="absolute top-0 left-1/4 opacity-20" />
      {/* <GradientBall className="absolute top-[20rem] left-1/4 opacity-20" /> */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
