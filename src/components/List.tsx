import React from "react";

type Props = {
  items: string[] | React.ReactNode[];
  type?: "disc" | "decimal";
};
export const List = ({ items, type = "disc" }: Props) => {
  return (
    <ul className="ml-8">
      {items.map((item, index) => (
        <li
          key={index}
          style={{ listStyleType: type }}
          className={`relative leading-[1.4] break-keep ${
            index < items.length - 1 ? "mb-[7px]" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
