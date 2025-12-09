import React from "react";

export const Link = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} className="text-link underline">
    {children}
  </a>
);
