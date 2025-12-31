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
        <Section key={project.title} title={sectionTitle || project.title} mt={87}>
          <div className="flex flex-col gap-[62px]">
            <TwoColumnWrapper
              left={
                <>
                  <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                    {project.name}
                  </h3>
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
                        items={feature.descriptions.map((description, index) => {
                          const link = feature.links && feature.links[index];
                          if (link) {
                            return (
                              <p key={index}>
                                <Link href={link} target="_blank" rel="noopener noreferrer">
                                  {parseBold(description)}
                                </Link>
                              </p>
                            );
                          }
                          return <p key={index}>{parseBold(description)}</p>;
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
