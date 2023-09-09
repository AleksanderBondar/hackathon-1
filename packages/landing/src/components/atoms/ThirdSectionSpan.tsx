import React, { FC, PropsWithChildren } from "react";

export const ThirdSectionSpan: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="bg-thirdSectionTiles shadow-tiles p-[1.2rem] px-[3rem] text-[2rem] font-bold text-center">
      {children}
    </span>
  );
};
