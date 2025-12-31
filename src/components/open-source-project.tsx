import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { Link } from "./link";
import { LinkList } from "./link-list";
import { List } from "./List";
import { Section } from "./Section";
import { TwoColumnWrapper } from "./two-column-wrapper";

type Props = {
  title?: string;
  sectionTitle?: string;
};

export const OpenSourceProject = ({ title, sectionTitle }: Props = {}) => {
  const { openSourceProjects } = useResumeData();

  const projectsToRender = title
    ? openSourceProjects.filter((project) => project.title === title)
    : openSourceProjects;

  if (projectsToRender.length === 0) {
    return null;
  }

  return (
    <>
      {projectsToRender.map((project) => (
        <Section key={project.title} title={sectionTitle || project.title} mt={80}>
          <div className="flex flex-col gap-16">
            <TwoColumnWrapper
              left={
                <>
                  <h3 className="text-xl font-bold mb-2 text-[#191f28] whitespace-pre-line leading-tight">
                    {project.name}
                  </h3>
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
                      <List
                        items={feature.descriptions.map((description, index) => {
                          const link = feature.links && feature.links[index];
                          if (link) {
                            return (
                              <p key={index} className="text-[#4e5968]">
                                <Link href={link} target="_blank" rel="noopener noreferrer">
                                  {parseBold(description)}
                                </Link>
                              </p>
                            );
                          }
                          return <p key={index} className="text-[#4e5968]">{parseBold(description)}</p>;
                        })}
                      />
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        </Section>
      ))}
    </>
  );
};
