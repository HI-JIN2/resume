import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <main className="max-w-[900px] w-full mx-auto pt-16 px-6 pb-16">
      {children}
    </main>
  );
};
