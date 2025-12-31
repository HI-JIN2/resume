import React from "react";
import { List } from "./List";
import { Section } from "./Section";
import { SpecSheet } from "./spec-sheet";
import { TwoColumnWrapper } from "./two-column-wrapper";

import { useResumeData } from "../context/resume-context";
import { calculateDuration } from "../utils/calculate-duration";
import { parseBold } from "../utils/parse-bold";

const renderTaskItems = (tasks: string[]) => {
  return tasks.map((task, index) => (
    <React.Fragment key={index}>{parseBold(task)}</React.Fragment>
  ));
};

export const WorkExperience = () => {
  const { experience } = useResumeData();

  return (
    <Section title="Work Experience" mt={80}>
      <div className="flex flex-col gap-16">
        {experience.map(
          ({ corp, from, to, features, position, about = [] }, index) => (
            <TwoColumnWrapper
              key={index}
              left={
                <>
                  <h3 className="text-xl font-bold mb-2 text-[#191f28] whitespace-pre-line leading-tight">
                    {corp}
                  </h3>

                  {about.length > 0 && (
                    <ul className="text-[#8b95a1] text-sm mb-3 space-y-1">
                      {about.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="space-y-1">
                    <div className="text-[#191f28] font-medium">{position}</div>
                    <div className="text-sm text-[#8b95a1]">
                      {from} - {to || "현재"}
                    </div>
                  </div>
                </>
              }
              right={
                <div className="flex flex-col gap-10">
                  {features.map((feature, featureIndex) => {
                    return (
                      <div key={featureIndex} className={featureIndex > 0 ? "pt-10 border-t border-[#e5e8eb]" : ""}>
                        <h2 className="text-lg font-bold mb-3 text-[#191f28]">
                          {feature.title}
                        </h2>
                        <div className="text-sm text-[#8b95a1] mb-6 space-y-1">
                          <p>
                            {feature.from} - {feature.to || "현재"} (
                            {calculateDuration(feature.from, feature.to)}
                            {"with" in feature &&
                              feature.with &&
                              ` · FE ${feature.with.fe}인, BE ${feature.with.be}인`}
                            )
                          </p>
                          {feature.description && <p className="text-[#4e5968]">{feature.description}</p>}
                        </div>

                        {feature.spec.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-3 text-[#191f28]">환경</h3>
                            <SpecSheet items={feature.spec} />
                          </div>
                        )}

                        {feature.achievements.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-3 text-[#191f28]">성과</h3>
                            <List
                              items={renderTaskItems(feature.achievements)}
                            />
                          </div>
                        )}
                        {feature.contributions.length > 0 && (
                          <div>
                            <h3 className="text-sm font-semibold mb-3 text-[#191f28]">주요 기여</h3>
                            <List
                              items={renderTaskItems(feature.contributions)}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              }
            />
          )
        )}
      </div>
    </Section>
  );
};
