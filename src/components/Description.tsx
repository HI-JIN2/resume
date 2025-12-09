import React from "react";

type Props = {
  title: string;
  link?: string;
  children: React.ReactNode;
};
export const Description = ({ title, link, children }: Props) => {
  return (
    <div className="mb-[18px] last:mb-0">
      {link ? (
        <a
          target="_blank"
          href={link}
          className="block font-normal text-xl mb-2.5 text-[var(--color-link)]"
        >
          {title}
        </a>
      ) : (
        <h4 className="font-normal text-xl mb-2.5">{title}</h4>
      )}

      <div className="leading-[1.4]">{children}</div>
    </div>
  );
};
