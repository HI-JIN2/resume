import { useResumeData } from "../context/resume-context";
import { parseBold } from "../utils/parse-bold";
import { Link } from "./link";
import { List } from "./List";
import { Section } from "./Section";

type SimpleListItem = {
  title: string;
  descriptions: string[];
  links?: string[];
};

type Props = {
  title: string;
  sectionTitle?: string;
  sectionId?: string;
};

export const SimpleList = ({ title, sectionTitle, sectionId }: Props) => {
  const { simpleLists } = useResumeData();

  // SimpleList 데이터에서 찾기
  const listData = simpleLists.find((list) => list.title === title);
  
  if (!listData) {
    return null;
  }

  // features를 items로 변환
  const items: SimpleListItem[] = listData.features.map((feature) => ({
    title: feature.title,
    descriptions: feature.descriptions,
    links: feature.links,
  }));

  // sectionId가 없으면 title 기반으로 생성
  const finalSectionId = sectionId || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Section title={sectionTitle || listData.title} mt={80} id={finalSectionId}>
      <div className="flex flex-col gap-10">
        {items.map((item, itemIndex) => {
          const hasTitle = item.title && item.title !== listData.title && item.title.trim() !== "";
          return (
            <div key={`${listData.title}-${itemIndex}`}>
              {/* features[].title이 있으면 표시 */}
              {hasTitle && (
                <h2 className="text-lg font-bold mb-3 text-[#191f28]">
                  {item.title}
                </h2>
              )}
              <List
                items={item.descriptions.map((description, index) => {
                  const link = item.links && item.links[index];
                  if (link) {
                    // 콤마 기준으로 분리: 콤마 앞은 일반 텍스트, 콤마 뒤는 링크
                    const commaIndex = description.indexOf(",");
                    if (commaIndex !== -1) {
                      const beforeComma = description.substring(0, commaIndex + 1);
                      const afterComma = description.substring(commaIndex + 1).trim();
                      return (
                        <p key={index} className="text-[#4e5968]">
                          {parseBold(beforeComma)}{" "}
                          <Link href={link} target="_blank" rel="noopener noreferrer">
                            {parseBold(afterComma)}
                          </Link>
                        </p>
                      );
                    }
                    // 콤마가 없으면 전체를 링크로
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
          );
        })}
      </div>
    </Section>
  );
};

