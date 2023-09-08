import { Navigation } from "@/components/molecules/Navigation";
import React, { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full max-w-screen-2xl border-x-2 border-black flex flex-col items-center justify-center mx-auto">
      <Navigation />
      {children}
    </main>
  );
};
