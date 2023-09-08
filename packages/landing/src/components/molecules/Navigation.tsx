import Link from "next/link";
import React, { FC } from "react";
import { OurLogo } from "../assets";
import { GithubStars, NavCtaButton } from "../atoms";

export const Navigation: FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[12rem] bg-background-navigation flex items-center backdrop-blur-sm justify-center z-[50]">
      <div className=" max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl  2xl:max-w-screen-xl  flex justify-between mx-auto w-full relative ">
        <OurLogo />
        <div className="flex items-center">
          <div className="flex gap-[5.6rem] w-min items-center mr-[7rem] ">
            <Link className="navLink" href={"#"}>
              Dokumentacja
            </Link>
            <Link className="navLink" href={"#"}>
              Discord
            </Link>
          </div>
          <GithubStars />
          <NavCtaButton />
        </div>
      </div>
    </nav>
  );
};
