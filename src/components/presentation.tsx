import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { Link } from "./link";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const Presentation = () => {
  const { presentations } = useResumeData();

  return (
    <Section title="Presentation" mt={87}>
      <div className="flex flex-col gap-[62px]">
        <TwoColumnWrapper
          left={
            <>
              <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                Presentation
              </h3>
            </>
          }
          right={
            <div className="flex flex-col gap-6">
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
                      <h2 className="text-lg font-semibold mb-1">
                        <Link href={presentation.link} target="_blank" rel="noopener noreferrer">
                          {presentation.title}
                        </Link>
                      </h2>
                    ) : (
                      <h2 className="text-lg font-semibold mb-1">
                        {presentation.title}
                      </h2>
                    )}
                    <div className="text-sm text-slate-600 mb-1">
                      {presentation.event}
                      {timeline && ` · ${timeline}`}
                    </div>
                    <List
                      items={presentation.descriptions.map((description, descIndex) => (
                        <p key={descIndex}>{parseBold(description)}</p>
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


