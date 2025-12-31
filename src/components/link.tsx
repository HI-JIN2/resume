import React from "react";

export const Link = ({
  children,
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} className={`text-[#3182f6] hover:underline transition-colors ${className}`}>
    {children}
  </a>
);
