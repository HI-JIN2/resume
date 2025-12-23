import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { LinkList } from "./link-list";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const Project = () => {
  const { projects } = useResumeData();

  return (
    <Section title="Project" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {projects.map((project) => (
          <TwoColumnWrapper
            key={project.title}
            left={
              <>
                <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                  {project.title}
                </h3>

                <div className="mb-3">
                  {project.from} - {project.to || "현재"}
                </div>
                <LinkList links={project.links || []} />
              </>
            }
            right={
              <div className="flex flex-col gap-8">
                {project.features.map((feature, featureIndex) => (
                  <div key={`${project.title}-${featureIndex}`}>
                    <h2 className="text-lg font-semibold mb-3">
                      {feature.title}
                    </h2>
                    {feature.achievements.length > 0 && (
                      <div className="mb-4">
                        <h3 className="text-base font-semibold mb-2">성과</h3>
                        <List
                          items={feature.achievements.map(
                            (description, index) => (
                              <p key={index}>{parseBold(description)}</p>
                            )
                          )}
                        />
                      </div>
                    )}
                    {feature.contributions.length > 0 && (
                      <div>
                        <h3 className="text-base font-semibold mb-2">
                          주요 기여
                        </h3>
                        <List
                          items={feature.contributions.map(
                            (description, index) => (
                              <p key={index}>{parseBold(description)}</p>
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
