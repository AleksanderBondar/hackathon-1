import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, useState } from "react";

export const SecondSection: FC = () => {
  const [choosen, setChoosen] = useState(0);

  return (
    <section className="min-h-screen lg:px-0 ">
      <div className="mb-[3rem]">
        <div>
          <h2 className="bg-textSection textGradient text-[2.4rem] sm:text-[4.8rem] font-bold leading-[120%] ">
            Dobre README jest niezwykle ważne i ma wiele korzyści.
          </h2>
          <p className="font-semibold tracking-[0.2px] mt-[1rem] ">
            Oto cztery najważniejsze punkty, dlaczego warto tworzyć dobre README
            dla swojego repozytorium.{" "}
          </p>
        </div>
        <div className="grid justify-items-center lg:justify-items-start lg:grid-cols-2 w-full mt-[3rem]">
          <div>
            <div
              className={cn(
                " p-[1.6rem] max-w-[47rem] cursor-pointer rounded-[0.8rem]",
                choosen == 0 && "bg-tilesSecondSection"
              )}
              onClick={() => setChoosen(0)}>
              <h3 className="text-[1.6rem] font-bold">
                Kieruje użytkowników i deweloperów
              </h3>
              <p className="mt-[1.6rem]">
                README pełni rolę przewodnika po Twoim projekcie. Pomaga
                użytkownikom i deweloperom zrozumieć, co projekt robi, jak go
                skonfigurować, zainstalować i używać. Nowi użytkownicy docierają
                tam jako pierwsi, więc czytelne README zwiększy szanse na
                konwersję.
              </p>
            </div>
            <div
              className={cn(
                " p-[1.6rem] max-w-[47rem] cursor-pointer  rounded-[0.8rem]",
                choosen == 1 && "bg-tilesSecondSection"
              )}
              onClick={() => setChoosen(1)}>
              <h3 className="text-[1.6rem] font-bold">Ułatwia współpracę</h3>
              <p className="mt-[1.6rem]">
                README ułatwia innym programistom współpracę z Tobą nad
                projektem. Opisuje strukturę kodu, architekturę, zależności i
                procesy deweloperskie. Dzięki temu nowi współpracownicy mogą
                szybko zrozumieć projekt i zacząć pracować nad nim.
              </p>
            </div>
            <div
              className={cn(
                " p-[1.6rem] max-w-[47rem] cursor-pointer  rounded-[0.8rem]",
                choosen == 2 && "bg-tilesSecondSection"
              )}
              onClick={() => setChoosen(2)}>
              <h3 className="text-[1.6rem] font-bold">
                Pomaga w rozwiązywaniu problemów
              </h3>
              <p className="mt-[1.6rem]">
                README może zawierać informacje na temat znanych problemów,
                błędów i sposobów ich rozwiązywania. To pomaga użytkownikom i
                deweloperom unikać pułapek i oszczędza czas na rozwiązywaniu
                problemów, które już są znane.
              </p>
            </div>
            <div
              className={cn(
                " p-[1.6rem] max-w-[47rem] cursor-pointer  rounded-[0.8rem]",
                choosen == 3 && "bg-tilesSecondSection"
              )}
              onClick={() => setChoosen(3)}>
              <h3 className="text-[1.6rem] font-bold">
                Pomaga w rozwiązywaniu problemów
              </h3>
              <p className="mt-[1.6rem]">
                Dobrze napisane README może wpłynąć na postrzeganie projektu
                przez społeczność. Projekt z czytelną i kompletną dokumentacją
                jest bardziej wiarygodny i atrakcyjny dla innych programistów,
                potencjalnych użytkowników i ewentualnych współpracowników.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:block  hidden relative">
            <Image
              alt="image"
              className="object-contain"
              fill
              src={`/${choosen}.png`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
