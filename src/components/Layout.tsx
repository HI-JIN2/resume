import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <main className="max-w-[1024px] w-full mx-auto pt-[62px] px-5 pb-8">
      {children}
    </main>
  );
};
