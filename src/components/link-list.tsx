import React from "react";
import { Link } from "./link";

type LinkItem = {
  title: string;
  url: string;
};

type Props = {
  links: LinkItem[];
};

export const LinkList = ({ links }: Props) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link target="_blank" href={link.url}>
            {link.title}
          </Link>
          {index < links.length - 1 && <span className="text-black/40">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

