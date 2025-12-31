import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { LinkList } from "./link-list";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const PersonalProject = () => {
  const { personalProjects } = useResumeData();

  return (
    <Section title="Side Project" mt={80}>
      <div className="flex flex-col gap-16">
        {personalProjects.map((project) => (
          <TwoColumnWrapper
            key={project.title}
            left={
              <>
                <h3 className="text-xl font-bold mb-2 text-[#191f28] whitespace-pre-line leading-tight">
                  {project.title}
                </h3>

                <div className="text-sm text-[#8b95a1] mb-4">
                  {project.from === project.to
                    ? project.from
                    : `${project.from} - ${project.to || "현재"}`}
                </div>
                <LinkList links={project.links || []} />
              </>
            }
            right={
              <div className="flex flex-col gap-10">
                {project.features.map((feature, featureIndex) => (
                  <div key={`${project.title}-${featureIndex}`}>
                    <h2 className="text-lg font-bold mb-3 text-[#191f28]">
                      {feature.title}
                    </h2>
                    {feature.achievements.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-[#191f28]">성과</h3>
                        <List
                          items={feature.achievements.map(
                            (description: string, index: number) => (
                              <p key={index} className="text-[#4e5968]">{parseBold(description)}</p>
                            )
                          )}
                        />
                      </div>
                    )}
                    {feature.contributions.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold mb-3 text-[#191f28]">
                          주요 기여
                        </h3>
                        <List
                          items={feature.contributions.map(
                            (description: string, index: number) => (
                              <p key={index} className="text-[#4e5968]">{parseBold(description)}</p>
                            )
                          )}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            }
          />
        ))}
      </div>
    </Section>
  );
};

