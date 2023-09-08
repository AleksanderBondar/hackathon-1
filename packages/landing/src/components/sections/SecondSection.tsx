import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, useState } from "react";

export const SecondSection: FC = () => {
  const [choosen, setChoosen] = useState(0);

  return (
    <section className="w-full  min-h-screen px-[2rem] sm:px-0 ">
      <div className="mb-[3rem]">
        <h2 className="bg-sectionHeader bg-clip-text text-[transparent] text-[2.4rem] sm:text-[4.8rem] font-bold leading-[120%] text-center">
          Dobre README jest niezwykle ważne i ma wiele korzyści.
        </h2>
        <p className="text-[#ffffff80] text-[1.6rem] font-semibold leading-[140%] tracking-[0.2px] text-center ">
          Oto cztery najważniejsze punkty, dlaczego warto tworzyć dobre README
          dla swojego repozytorium.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div
            className={cn(
              " p-[1.6rem] max-w-[47rem] cursor-pointer",
              choosen == 0 && "bg-tiles"
            )}
            onClick={() => setChoosen(0)}>
            <h3 className="text-[1.6rem] font-bold">
              Kieruje użytkowników i deweloperów
            </h3>
            <p className="text-[#ffffff80] text-[1.6rem]  leading-[140%] mt-[1.6rem]">
              README pełni rolę przewodnika po Twoim projekcie. Pomaga
              użytkownikom i deweloperom zrozumieć, co projekt robi, jak go
              skonfigurować, zainstalować i używać. Nowi użytkownicy docierają
              tam jako pierwsi, więc czytelne README zwiększy szanse na
              konwersję.
            </p>
          </div>
          <div
            className={cn(
              " p-[1.6rem] max-w-[47rem] cursor-pointer",
              choosen == 1 && "bg-tiles"
            )}
            onClick={() => setChoosen(1)}>
            <h3 className="text-[1.6rem] font-bold">Ułatwia współpracę</h3>
            <p className="text-[#ffffff80] text-[1.6rem]  leading-[140%] mt-[1.6rem]">
              README ułatwia innym programistom współpracę z Tobą nad projektem.
              Opisuje strukturę kodu, architekturę, zależności i procesy
              deweloperskie. Dzięki temu nowi współpracownicy mogą szybko
              zrozumieć projekt i zacząć pracować nad nim.
            </p>
          </div>
          <div
            className={cn(
              " p-[1.6rem] max-w-[47rem] cursor-pointer",
              choosen == 2 && "bg-tiles"
            )}
            onClick={() => setChoosen(2)}>
            <h3 className="text-[1.6rem] font-bold">
              Pomaga w rozwiązywaniu problemów
            </h3>
            <p className="text-[#ffffff80] text-[1.6rem]  leading-[140%] mt-[1.6rem]">
              README może zawierać informacje na temat znanych problemów, błędów
              i sposobów ich rozwiązywania. To pomaga użytkownikom i deweloperom
              unikać pułapek i oszczędza czas na rozwiązywaniu problemów, które
              już są znane.
            </p>
          </div>
          <div
            className={cn(
              " p-[1.6rem] max-w-[47rem] cursor-pointer",
              choosen == 3 && "bg-tiles"
            )}
            onClick={() => setChoosen(3)}>
            <h3 className="text-[1.6rem] font-bold">
              Pomaga w rozwiązywaniu problemów
            </h3>
            <p className="text-[#ffffff80] text-[1.6rem]  leading-[140%] mt-[1.6rem]">
              Dobrze napisane README może wpłynąć na postrzeganie projektu przez
              społeczność. Projekt z czytelną i kompletną dokumentacją jest
              bardziej wiarygodny i atrakcyjny dla innych programistów,
              potencjalnych użytkowników i ewentualnych współpracowników.
            </p>
          </div>
        </div>
        <div className="w-full h-full relative ">
          <Image alt="image" fill src={`/${choosen}.png`} />
        </div>
      </div>
    </section>
  );
};
