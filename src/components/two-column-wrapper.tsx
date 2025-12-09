import React from "react";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const TwoColumnWrapper = ({ left, right }: Props) => {
  return (
    <div className="flex max-sm:flex-col">
      <div className="mr-4 max-sm:mr-0 max-sm:mb-8 min-w-[270px]">{left}</div>
      <div className="w-full">{right}</div>
    </div>
  );
};
