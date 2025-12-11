import { useResumeData } from "../context/resume-context";
import { Section } from "./Section";
import { parseBold } from "../utils/parse-bold";

export const AboutMe = () => {
  const { about } = useResumeData();

  return (
    <Section title="About">
      <div className="flex flex-col gap-4">
        {about.map(({ title, descriptions }, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <div className="flex flex-col gap-2">
              {descriptions.map((description, descIndex) => (
                <p key={descIndex}>{parseBold(description)}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
