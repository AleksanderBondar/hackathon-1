import React, { FC } from "react";
import { GithubLogo } from "../assets";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const GithubStars: FC = () => {
  return (
    <div className={`flex gap-[0.5rem] ${inter.className} items-center`}>
      <div className="px-[0.7rem] py-[0.5rem] border-[1px] flex gap-[0.5rem]  color-[#B5BFCA]  border-[#B5BFCA]">
        <GithubLogo />
        <span className="text-[1.1rem] h-min font-semibold ">Star</span>
      </div>
      <div className="px-[0.7rem] py-[0.5rem] border-[1px] flex gap-[0.5rem] font-semibold color-[#B5BFCA]  border-[#B5BFCA]">
        <span className=" text-[1.1rem]  rounded-[0.4rem]">5.9K</span>
      </div>
    </div>
  );
};
