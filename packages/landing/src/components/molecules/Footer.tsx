import React, { FC } from "react";
import { DiscrordLogo, GithubLogo, OurLogo } from "../assets";

export const Footer: FC = () => {
  return (
    <div className="w-full lg:mt-[14rem] mt-[3.4rem] pt-[1.6rem] lg:pt-[8rem] border-t-[1px] border-neutral-dark">
      <div className="w-full max-w-screen-lg flex items-center flex-col-reverse lg:flex-row justify-between mx-auto">
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-[8rem] mt-[4rem] lg:mt-0 ">
            <GithubLogo bigger />
            <DiscrordLogo />
          </div>
          <p className="text-neutral-light text-[1.4rem] leading-[2.4rem] mt-[3.4rem] lg:mt-[7rem] mb-[1.6rem] text-center lg:text-left">
            Copyright &copy; 2022 AEXOL, Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
        </div>
        <OurLogo />
      </div>
    </div>
  );
};
