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
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-[#191f28] tracking-tight">
            {title}
          </h2>
        </header>
      )}
      <article>{children}</article>
    </section>
  );
};
