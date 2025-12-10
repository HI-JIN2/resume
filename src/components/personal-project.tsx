import { PERSONAL_PROJECT } from "../data";
import { parseBold } from "../utils/parse-bold";
import { LinkList } from "./link-list";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const PersonalProject = () => {
  return (
    <Section title="Personal Project" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {PERSONAL_PROJECT.map((project) => (
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
              <div className="flex flex-col gap-6">
                {project.features.map((feature, featureIndex) => (
                  <div key={`${project.title}-${featureIndex}`}>
                    <h2 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h2>
                    <List
                      items={feature.descriptions.map((description, index) => (
                        <p key={index}>{parseBold(description)}</p>
                      ))}
                    />
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
