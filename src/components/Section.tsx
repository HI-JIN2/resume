import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  mb?: number;
  mt?: number;
};
export const Section = ({ title, children, mt, mb, style }: Props) => {
  return (
    <section style={{ marginTop: mt, marginBottom: mb, ...style }}>
      {title && (
        <header className="flex items-end mb-6">
          <h3 className="inline-block text-4xl font-semibold">{title}</h3>
          <div className="w-2 h-2 rounded-full bg-primary mb-1 ml-1.5" />
        </header>
      )}
      <article>{children}</article>
    </section>
  );
};
