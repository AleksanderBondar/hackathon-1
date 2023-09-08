import { Footer, GradientBall, Navigation } from "@/components";
import React, { FC, PropsWithChildren } from "react";
import { Blinker } from "next/font/google";

const blinker = Blinker({ weight: "400", subsets: ["latin"] });
export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" bg-[url('/background.png')] bg-no-repeat bg-cover bg-center">
      <main
        className={`${blinker.className} w-full max-w-screen-sm xl:max-w-screen-lg  2xl:max-w-screen-xl flex flex-col items-center justify-center mx-auto pt-[12rem]  relative `}>
        <GradientBall className="absolute right-0 opacity-20  top-[5rem] -translate-y-1/2" />
        <Navigation />

        {children}
      </main>
      <Footer />
    </div>
  );
};
