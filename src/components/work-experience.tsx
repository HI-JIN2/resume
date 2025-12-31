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
    <Section title="Work Experience" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {experience.map(
          ({ corp, from, to, features, position, about = [] }, index) => (
            <TwoColumnWrapper
              key={index}
              left={
                <>
                  <h3 className="relative text-xl font-semibold mb-1 whitespace-pre-line leading-[110%]">
                    {corp}
                  </h3>

                  {about.length > 0 && (
                    <ul className="text-black/60 mb-1 break-keep">
                      {about.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mb-3">
                    {position}
                    <div className="text-sm text-slate-600">
                      {from} - {to || "현재"}
                    </div>
                  </div>
                </>
              }
              right={
                <div className="flex flex-col gap-8">
                  {features.map((feature, featureIndex) => {
                    return (
                      <div key={featureIndex}>
                        <h2 className="text-lg font-semibold mb-3">
                          {feature.title}
                        </h2>
                        <div className="text-sm text-slate-600 mb-4">
                          <p>
                            {feature.from} - {feature.to || "현재"} (
                            {calculateDuration(feature.from, feature.to)}
                            {"with" in feature &&
                              feature.with &&
                              ` · FE ${feature.with.fe}인, BE ${feature.with.be}인`}
                            )
                          </p>
                          {feature.description && <p>{feature.description}</p>}
                        </div>

                        {feature.spec.length > 0 && (
                          <div className="mb-4">
                            <h3 className="text-base font-semibold mb-2">환경</h3>
                            <SpecSheet items={feature.spec} />
                          </div>
                        )}

                        {feature.achievements.length > 0 && (
                          <div className="mb-4">
                            <h3 className="text-base font-semibold mb-2">성과</h3>
                            <List
                              items={renderTaskItems(feature.achievements)}
                            />
                          </div>
                        )}
                        {feature.contributions.length > 0 && (
                          <div>
                            <h3 className="text-base font-semibold mb-2">주요 기여</h3>
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
