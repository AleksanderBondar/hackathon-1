import React, { FC } from "react";
import { DiscrordLogo, GithubLogo, OurLogo } from "../assets";

export const Footer: FC = () => {
  return (
    <div className="w-full mt-[14rem]  pt-[8rem] border-t-[1px] border-[#232A2F]">
      <div className="w-full  max-w-screen-sm xl:max-w-screen-lg  2xl:max-w-screen-xl flex items-center justify-between mx-auto">
        <div>
          <div className="flex gap-[8rem]">
            <GithubLogo bigger />
            <DiscrordLogo />
          </div>
          <p className="color-[rgba(255, 255, 255, 0.68)] text-[1.4rem] leading-[2.4rem] mt-[7rem] mb-[1.6rem]">
            Copyright &copy; 2022 AEXOL, Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
        </div>
        <OurLogo />
      </div>
    </div>
  );
};
