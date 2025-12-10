import React from "react";
import { List } from "./List";
import { Section } from "./Section";
import { SpecSheet } from "./spec-sheet";
import { TwoColumnWrapper } from "./two-column-wrapper";

import { EXPERIENCE } from "../data";
import { calculateDuration } from "../utils/calculate-duration";
import { Description } from "./Description";
import { parseBold } from "../utils/parse-bold";

const renderTaskItems = (tasks: string[]) => {
  return tasks.map((task, index) => (
    <React.Fragment key={index}>{parseBold(task)}</React.Fragment>
  ));
};

export const WorkExperience = () => {
  return (
    <Section title="Experience" mt={87}>
      <div className="flex flex-col gap-[62px]">
        {EXPERIENCE.map(
          ({ corp, from, to, features, position, about = [] }, index) => (
            <TwoColumnWrapper
              key={index}
              left={
                <>
                  <h3 className="relative text-[32px] font-normal mb-3 whitespace-pre-line leading-[110%] break-keep">
                    {corp}
                  </h3>

                  {about.length > 0 && (
                    <ul className="text-black/60 mb-3 break-keep">
                      {about.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mb-1">{position}</div>
                  <div>
                    {from} - {to || "현재"}
                  </div>
                </>
              }
              right={
                <>
                  {features.map((feature, featureIndex) => {
                    return (
                      <React.Fragment key={featureIndex}>
                        <div>
                          <h4 className="text-2xl font-normal mb-3">
                            {feature.title}
                          </h4>

                          <div className=" text-black/60 mb-6">
                            <p>
                              {feature.from} - {feature.to || "현재"} (
                              {calculateDuration(feature.from, feature.to)}
                              {"with" in feature &&
                                feature.with &&
                                ` · FE ${feature.with.fe}인, BE ${feature.with.be}인`}
                              )
                            </p>
                            <p>{feature.description}</p>
                          </div>

                          <Description title="환경">
                            <SpecSheet items={feature.spec} />
                          </Description>

                          <Description title="성과">
                            <List
                              items={renderTaskItems(feature.achievements)}
                            />
                          </Description>
                          <Description title="주요 기여">
                            <List
                              items={renderTaskItems(feature.contributions)}
                            />
                          </Description>
                        </div>
                        {featureIndex < features.length - 1 && (
                          <div className="w-full h-px border-b border-dashed border-black/80 my-8" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </>
              }
            />
          )
        )}
      </div>
    </Section>
  );
};
