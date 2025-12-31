import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { Link } from "./link";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const Presentation = () => {
  const { presentations } = useResumeData();

  return (
    <Section title="Presentation" mt={80} id="presentation">
      <div className="flex flex-col gap-16">
        <TwoColumnWrapper
          left={
            <>
              <h3 className="text-xl font-bold mb-2 text-[#191f28] whitespace-pre-line leading-tight">
                Presentation
              </h3>
            </>
          }
          right={
            <div className="flex flex-col gap-10">
              {presentations.map((presentation, index) => {
                const timeline =
                  presentation.from && presentation.to
                    ? `${presentation.from} - ${presentation.to}`
                    : presentation.from
                    ? `${presentation.from} - 현재`
                    : presentation.to ?? "";

                return (
                  <div key={index}>
                    {presentation.link ? (
                      <h2 className="text-lg font-bold mb-2 text-[#191f28]">
                        <Link href={presentation.link} target="_blank" rel="noopener noreferrer">
                          {presentation.title}
                        </Link>
                      </h2>
                    ) : (
                      <h2 className="text-lg font-bold mb-2 text-[#191f28]">
                        {presentation.title}
                      </h2>
                    )}
                    <div className="text-sm text-[#8b95a1] mb-4">
                      {presentation.event}
                      {timeline && ` · ${timeline}`}
                    </div>
                    <List
                      items={presentation.descriptions.map((description, descIndex) => (
                        <p key={descIndex} className="text-[#4e5968]">{parseBold(description)}</p>
                      ))}
                    />
                  </div>
                );
              })}
            </div>
          }
        />
      </div>
    </Section>
  );
};


