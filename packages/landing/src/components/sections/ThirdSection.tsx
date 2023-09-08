import React, { FC } from "react";
import { GradientBall } from "@/components";

export const ThirdSection: FC = () => {
  return (
    <section className="w-full  min-h-[calc(100vh-12rem)]">
      <h2 className="text-[4.8rem] leading-[120%] text-[transparent] bg-thirdSectionHeader bg-clip-text">
        Dlaczego warto wykorzystać nasze rozszerzenie?
      </h2>
      <p className="text-[transparent] bg-thirdSectionHeader bg-clip-text text-[1.6rem] leading-[140%] tracking-[0.2px]">
        Utrzymuj projekt na bieżąco, aktualizując go w razie potrzeby i dbając o
        jego zgodność z nowymi wersjami formatów README oraz <br />
        ewentualne zmiany w środowisku programistycznym.
      </p>

      <div className="mt-[10rem] mb-[35rem]  grid grid-cols-2 justify-items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-[3rem] font-bold">Tworzenie README z FOSScode</h3>
          <span className="text-[8rem]">&#128525;</span>
          <div className="flex flex-col items-center gap-[3.5rem]">
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Zainstaluj rozszerzenie FOSScode do VS Code
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Użyj komendy
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Odpowiedz na pytania
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Pushnij zmiany i gotowe!
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-[3rem] font-bold">
            Tworzenie README bez FOSScode
          </h3>
          <span className="text-[8rem]">&#128545;</span>
          <div className="flex flex-col items-center gap-[3.5rem]">
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Zidentyfikuj, co chcesz umieścić w README
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Wybierz format dokumentacji
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Określ hierarchię i treść poszczególnej sekcji
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Rozpocznij pisanie README
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Dodawaj instrukcje instalacji
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Dodawaj przykłady użycia
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Sprawdź wszystkie błędy
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Sprawdź poprawność informacji
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Sprawdź poprawność informacji
            </span>
            <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold">
              Stwórz plik README.md w głównym katalogu repozytorium
            </span>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <GradientBall className="absolute -top-1/4 opacity-80" />
        <div className="flex justify-between items-center w-full p-[6rem] bg-background-navigation backdrop-blur-md">
          <div>
            <h3 className="text-[2.4rem] leading-[90%] font-bold mb-[2.4rem]">
              Powodzenia w pracy nad swoim projektem
            </h3>
            <p className="text-[2rem] leading-[110%] tracking-[0.2px]">
              Tworzenie narzędzi open-source to proces ciągły, który może <br />
              przynieść wiele korzyści dla społeczności programistycznej.
            </p>
          </div>
          <div>
            <button className="text-[2rem] font-bold bg-buttonSection px-[7.2rem] py-[1.3rem]">
              Rozpocznij z FOSScode
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
