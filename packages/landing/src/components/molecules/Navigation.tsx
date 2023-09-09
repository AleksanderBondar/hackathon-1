import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Close, Hamburger, OurLogo, OurLogoSmall } from "../assets";
import { GithubStars, NavCtaButton } from "../atoms";

export const Navigation: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full  h-[12rem] bg-background-navigation flex items-center backdrop-blur-sm justify-center z-[50] px-[2rem]">
        <div className=" max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl  2xl:max-w-screen-xl  flex justify-between mx-auto w-full relative ">
          <div className="hidden md:block">
            <OurLogo />
          </div>
          <div className="md:hidden">
            <OurLogoSmall />
          </div>
          <div className="flex items-center">
            <div className="gap-[5.6rem] w-min items-center mr-[7rem] hidden md:flex ">
              <Link className="navLink" href={"#"}>
                Dokumentacja
              </Link>
              <Link className="navLink" href={"#"}>
                Discord
              </Link>
            </div>
            <GithubStars />

            <NavCtaButton />
            <div
              className={cn("ml-[3rem]", open && "opacity-0")}
              onClick={() => setOpen(true)}>
              <Hamburger />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed top-0 bottom-0 w-full  backdrop-blur-sm z-50  opacity-100 flex flex-col justify-end p-[5rem] transition-transform",
          !open && "translate-x-full"
        )}>
        <div
          className="h-[12rem] absolute right-0 top-0 flex items-center pr-[3rem]"
          onClick={() => setOpen(false)}>
          <Close />
        </div>
        <Link className="text-[4rem] text-neutral" href={"#"}>
          Dokumentacja
        </Link>
        <Link className="text-[4rem] text-neutral" href={"#"}>
          Discord
        </Link>
      </div>
    </>
  );
};
