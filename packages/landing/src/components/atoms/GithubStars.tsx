import React, { FC } from "react";
import { GithubLogo } from "../assets";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const GithubStars: FC = () => {
  return (
    <div className={`flex gap-[0.5rem] ${inter.className} items-stretch`}>
      <div className="px-[0.7rem] py-[0.5rem] border-[1px] flex gap-[0.5rem] items-center  text-neutral  border-neutral">
        <GithubLogo />
        <span className="text-[1.1rem] h-min font-semibold ">Star</span>
      </div>
      <div className="px-[0.7rem] py-[0.5rem] border-[1px] flex gap-[0.5rem] items-center font-semibold text-neutral  border-neutral">
        <span className=" text-[1.1rem]  rounded-[0.4rem]">5.9K</span>
      </div>
    </div>
  );
};
