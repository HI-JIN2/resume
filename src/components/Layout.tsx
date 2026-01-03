import React from "react";
import { TableOfContents } from "./table-of-contents";
import { ResumeSwitcher } from "./resume-switcher";

type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <div className="relative">
      <main className="max-w-[900px] w-full mx-auto pt-16 px-6 pb-16 relative">
        <ResumeSwitcher />
        {children}
      </main>
      <TableOfContents />
    </div>
  );
};
