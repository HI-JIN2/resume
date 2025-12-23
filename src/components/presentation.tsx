import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const Presentation = () => {
  const { presentations } = useResumeData();

  return (
    <Section title="Presentation" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {presentations.map((presentation) => {
          const timeline =
            presentation.from && presentation.to
              ? `${presentation.from} - ${presentation.to}`
              : presentation.from
              ? `${presentation.from} - 현재`
              : presentation.to ?? "";

          return (
            <TwoColumnWrapper
              key={presentation.title}
              left={
                <>
                  <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                    {presentation.title}
                  </h3>
                  <div className="text-base mb-1 whitespace-pre-line leading-[120%]">
                    {presentation.event}
                  </div>
                  {timeline && <div className="text-sm text-slate-600">{timeline}</div>}
                </>
              }
              right={
                <List
                  items={presentation.descriptions.map((description, index) => (
                    <p key={index}>{parseBold(description)}</p>
                  ))}
                />
              }
            />
          );
        })}
      </div>
    </Section>
  );
};


