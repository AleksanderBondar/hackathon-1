import React, { FC } from "react";

export const FirstSection: FC = () => {
  return (
    <section className="lg:px-0 min-h-[calc(100vh-12rem)]">
      <h1 className="sm:text-[6.4rem]">Twórz readme. z łatwością,</h1>
      <span className="text-[5.6rem] sm:text-[9.6rem] leading-[8.8rem] font-bold bg-textFirstSection textGradient sm:my-[4rem]">
        FOSScode
      </span>
      <h1 className="sm:text-[6.4rem]">rozwijaj Open Source z pasją</h1>
      <h2 className="text-[1.8rem] leading-[3.5rem] md:leading-[2.5rem] font-semibold text-center text-neutral  mb-[4rem] mt-[2rem]">
        Tworzenie README dzięki FOSScode dla open-source bibliotek może być
        bardzo użyteczne <br className="hidden sm:block" /> dla programistów i
        projektów open-source.
      </h2>
      <button className="text-[2rem] font-bold bg-buttonSection px-[7.2rem] py-[1.3rem]">
        Rozpocznij
      </button>
    </section>
  );
};
