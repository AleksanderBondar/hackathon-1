import React, { FC, useState } from "react";
import { GradientBall, ThirdSectionSpan } from "@/components";
import { cn } from "@/lib/utils";

export const ThirdSection: FC = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="lg:min-h-[calc(100vh-12rem)] lg:px-0">
      <h2 className="text-[4.8rem] leading-[120%] textGradient bg-textSection ">
        Dlaczego warto wykorzystać nasze rozszerzenie?
      </h2>
      <p className=" lg:bg-textSection lg:textGradient text-[2.4rem] lg:text-[1.6rem] leading-[140%] mt-[2rem] tracking-[0.2px]">
        Utrzymuj projekt na bieżąco, aktualizując go w razie potrzeby i dbając o
        jego zgodność z nowymi wersjami formatów README oraz <br />
        ewentualne zmiany w środowisku programistycznym.
      </p>

      <div className="mt-[10rem] mb-[10rem] lg:mb-[35rem]  grid md:grid-cols-2 gap-[3.5rem] justify-items-center w-full">
        <div className="grid grid-cols-2 md:hidden">
          <div
            className="flex flex-col items-center"
            onClick={() => setToggle((p) => !p)}>
            <h3
              className={cn(
                " text-[2.4rem] sm:text-[3rem] font-bold text-center transition-opacity",
                !toggle && " opacity-50"
              )}>
              Tworzenie README z FOSScode
            </h3>
            <span
              className={cn(
                "text-[6.4rem] sm:text-[8rem]",
                !toggle && "animate-pulse"
              )}>
              &#128525;
            </span>
          </div>
          <div
            className="flex flex-col items-center"
            onClick={() => setToggle((p) => !p)}>
            <h3
              className={cn(
                " text-[2.4rem] sm:text-[3rem] font-bold text-center transition-opacity",
                toggle && " opacity-50"
              )}>
              Tworzenie README bez FOSScode
            </h3>
            <span
              className={cn(
                "text-[6.4rem] sm:text-[8rem]",
                toggle && "animate-pulse"
              )}>
              &#128545;
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3
            className={
              "text-[2.4rem] sm:text-[3rem] font-bold text-center hidden md:block"
            }>
            Tworzenie README z FOSScode
          </h3>
          <span className={"text-[6.4rem] sm:text-[8rem] hidden md:block"}>
            &#128525;
          </span>

          <div
            className={cn(
              "flex-col items-center gap-[3.5rem] hidden md:flex",
              toggle && "flex"
            )}>
            <ThirdSectionSpan>
              Zainstaluj rozszerzenie FOSScode do VS Code
            </ThirdSectionSpan>
            <ThirdSectionSpan>Użyj komendy</ThirdSectionSpan>
            <ThirdSectionSpan>Odpowiedz na pytania</ThirdSectionSpan>
            <ThirdSectionSpan>Pushnij zmiany i gotowe!</ThirdSectionSpan>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3
            className={
              "text-[2.4rem] sm:text-[3rem] font-bold text-center hidden md:block"
            }>
            Tworzenie README bez FOSScode
          </h3>
          <span className={"text-[6.4rem] sm:text-[8rem] hidden md:block"}>
            &#128545;
          </span>

          <div
            className={cn(
              "flex-col items-center gap-[3.5rem] hidden md:flex",
              !toggle && "flex"
            )}>
            <ThirdSectionSpan>
              Zidentyfikuj, co chcesz umieścić w README
            </ThirdSectionSpan>
            <ThirdSectionSpan>Wybierz format dokumentacji</ThirdSectionSpan>
            <ThirdSectionSpan>
              Określ hierarchię i treść poszczególnej sekcji
            </ThirdSectionSpan>
            <ThirdSectionSpan>Rozpocznij pisanie README</ThirdSectionSpan>
            <ThirdSectionSpan>Dodawaj instrukcje instalacji</ThirdSectionSpan>
            <ThirdSectionSpan>Dodawaj przykłady użycia</ThirdSectionSpan>
            <ThirdSectionSpan>Sprawdź wszystkie błędy</ThirdSectionSpan>
            <ThirdSectionSpan>Sprawdź poprawność informacji</ThirdSectionSpan>
            <ThirdSectionSpan>Sprawdź poprawność informacji</ThirdSectionSpan>
            <ThirdSectionSpan>
              Stwórz plik README.md w głównym katalogu repozytorium
            </ThirdSectionSpan>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden w-[350px] sm:w-full max-w-screen-lg">
        <GradientBall className="absolute -top-1/4 -left-[6rem]  opacity-70" />
        <div className="flex justify-between flex-col lg:flex-row items-center px-[0.6rem] w-full lg:px-[6rem] p-[6rem] bg-background-navigation backdrop-blur-md rounded-[0.8rem]">
          <div>
            <h3 className="text-[2.4rem] leading-[90%] font-bold mb-[2.4rem] text-center">
              Powodzenia w pracy nad swoim
              <br className="sm:hidden" />
              projektem!
            </h3>
            <p className="text-[2rem] leading-[110%] tracking-[0.2px] text-center mb-[3.2rem]">
              Tworzenie narzędzi open-source to proces ciągły, który może <br />
              przynieść wiele korzyści dla społeczności programistycznej.
            </p>
          </div>
          <div>
            <button className="text-[2rem] font-bold bg-buttonSection px-[3.2rem] py-[1.2rem] lg:px-[7.2rem] lg:py-[1.3rem]">
              Rozpocznij z FOSScode
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
