import Link from "next/link";
import React, { FC } from "react";

export const Navigation: FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4">
      <Link href={"#"}>SECTION 1</Link>
      <Link href={"#"}>SECTION 2</Link>
      <Link href={"#"}>SECTION 3</Link>
      <Link href={"#"}>SECTION 4</Link>
    </nav>
  );
};
