import { OPEN_SOURCE_PROJECT } from "../data";
import { parseBold } from "../utils/parse-bold";
import { LinkList } from "./link-list";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

export const OpenSourceProject = () => {
  return (
    <Section title="Highlights" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {OPEN_SOURCE_PROJECT.map((project) => (
          <TwoColumnWrapper
            key={project.title}
            left={
              <>
                <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                  {project.title}
                </h3>
                <LinkList links={project.links || []} />
              </>
            }
            right={
              <>
                <h2 className="text-lg font-semibold mb-1">
                  {project.feature.title}
                </h2>
                <List
                  items={project.feature.descriptions.map(
                    (description, index) => (
                      <p key={index}>{parseBold(description)}</p>
                    )
                  )}
                />
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
};
