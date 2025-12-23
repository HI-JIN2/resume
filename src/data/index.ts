import { ANDROID_RESUME } from "./android";
import { GENERAL_RESUME } from "./general";
import type { ResumeContent, ResumeType } from "./types";

export * from "./types";

export const RESUME_VARIANTS: Record<ResumeType, ResumeContent> = {
  android: ANDROID_RESUME,
  general: GENERAL_RESUME,
};

export const DEFAULT_RESUME_TYPE: ResumeType = "android";

export const getResumeContent = (resumeType: ResumeType): ResumeContent => {
  return RESUME_VARIANTS[resumeType] ?? RESUME_VARIANTS[DEFAULT_RESUME_TYPE];
};
