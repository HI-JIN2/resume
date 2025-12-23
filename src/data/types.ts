export type ProfileLink = {
  label: string;
  value: string;
  href?: string;
};

export type Profile = {
  name: string;
  links: ProfileLink[];
};

export type AboutItem = {
  title: string;
  descriptions: string[];
};

export type WorkExperience = {
  corp: string;
  about?: string[];
  position: string;
  from: string;
  to: string;
  features: WorkExperienceFeature[];
};

export type WorkExperienceFeature = {
  title: string;
  from: string;
  to: string;
  with?: {
    fe?: number;
    be?: number;
  };
  description?: string;
  achievements: string[];
  contributions: string[];
  spec: string[];
};

export type PersonalProjectFeature = {
  title: string;
  achievements: string[];
  contributions: string[];
};

export type PersonalProject = {
  title: string;
  from: string;
  to: string;
  links?: {
    title: string;
    url: string;
  }[];
  features: PersonalProjectFeature[];
};

export type Presentation = {
  title: string;
  event: string;
  from?: string;
  to?: string;
  descriptions: string[];
};

export type OpenSourceProject = {
  title: string;
  name: string;
  links?: {
    title: string;
    url: string;
  }[];
  features: {
    title: string;
    descriptions: string[];
  }[];
};

export type ResumeType = "android" | "general";

export type ResumeContent = {
  profile: Profile;
  about: AboutItem[];
  experience: WorkExperience[];
  personalProjects: PersonalProject[];
  presentations: Presentation[];
  openSourceProjects: OpenSourceProject[];
  lastUpdatedAt: string;
};

