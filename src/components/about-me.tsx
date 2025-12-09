import { ABOUT_ME } from "../data";
import { parseBold } from "../utils/parse-bold";
import { Section } from "./Section";

export const AboutMe = () => {
  return (
    <Section title="About">
      <div className="flex flex-col gap-3">
        {ABOUT_ME.map((item, index) => (
          <p key={index}>{parseBold(item)}</p>
        ))}
      </div>
    </Section>
  );
};
