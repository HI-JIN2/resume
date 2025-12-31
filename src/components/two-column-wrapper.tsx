import React from "react";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const TwoColumnWrapper = ({ left, right }: Props) => {
  return (
    <div className="flex max-sm:flex-col gap-8">
      <div className="flex-shrink-0 max-sm:w-full" style={{ minWidth: "240px", width: "240px" }}>
        {left}
      </div>
      <div className="flex-1 min-w-0">{right}</div>
    </div>
  );
};
