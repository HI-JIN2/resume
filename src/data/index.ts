type ProfileLink = {
  label: string;
  value: string;
  href?: string;
};

export type Profile = {
  name: string;
  links: ProfileLink[];
};

type AboutItem = {
  title: string;
  descriptions: string[];
};

type WorkExperience = {
  corp: string;
  about?: string[];
  position: string;
  from: string;
  to: string;
  features: WorkExperienceFeature[];
};
type WorkExperienceFeature = {
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

type PersonalProjectFeature = {
  title: string;
  achievements: string[];
  contributions: string[];
  spec?: string[];
};

type PersonalProject = {
  title: string;
  from: string;
  to: string;
  links?: {
    title: string;
    url: string;
  }[];
  features: PersonalProjectFeature[];
};

type Presentation = {
  title: string;
  event: string;
  from?: string;
  to?: string;
  descriptions: string[];
  link?: string;
};

type OpenSourceProject = {
  title: string;
  name: string;
  links?: {
    title: string;
    url: string;
  }[];
  features: {
    title: string;
    descriptions: string[];
    links?: string[];
  }[];
};

export type ResumeType = "android" | "general";

export type ResumeVariant = {
  profile: Profile;
  about: AboutItem[];
  experience: WorkExperience[];
  personalProjects: PersonalProject[];
};

export type ResumeContent = ResumeVariant & {
  presentations: Presentation[];
  openSourceProjects: OpenSourceProject[];
  simpleLists: SimpleListDataType[];
  lastUpdatedAt: string;
};

const LAST_UPDATED_AT = "2025. 12. 10";

// 공통 데이터
const COMMON_PRESENTATIONS: Presentation[] = [
  {
    title: "해외봉사가서 개발한 썰 푼다",
    event: "GDGoC SSUMALL SEMINAR",
    descriptions: ["제한된 환경에서 문제를 빠르게 해결한 안드로이드 개발 사례 공유"],
  },
  {
    title: "ICT 인턴십제도와 스타트업 인턴 후기",
    event: "GDGoC SSUMALL SEMINAR",
    descriptions: ["스타트업 인턴십 경험과 ICT 인턴십제도 소개"],
  },
  {
    title: "학교에서 서비스 운영하기",
    event: "GDSC SSUMALL SEMINAR",
    descriptions: [
      "교내 서비스(EAT-SSU) 운영 경험과 데이터 기반 기능 개선 사례 공유",
    ],
    link: "https://www.youtube.com/watch?v=Qx719VFI6No",
  },
  {
    title: "JWT로 알아보는 안드로이드-서버가 소통하는 법",
    event: "UMC 4th Conference",
    descriptions: ["JWT 기반 인증 시스템과 안드로이드-서버 통신 구조 설명"],
  },
];

// name이 있는 레이아웃 (Activities)
const COMMON_ACTIVITIES: OpenSourceProject[] = [
  {
    title: "Community",
    name: "",
    features: [
      {
        title: "Google Developer Student Clubs 3, 4기 (2023.10 - 2025.08)",
        descriptions: [
          "해외 봉사 개발 경험, 교내 서비스 운영 경험 공유 세션 진행",
          "CS 인터뷰/회고/테크 블로그 스터디 등을 기획, 운영해 '스터디를 가장 많이 운영한 멤버' 선정",
        ],
      },
      {
        title: "숭실대학교 창업지원단 Pre-startup, COGO (2024.08 - 2024.12)",
        descriptions: [
          "창업 아이디어 발굴 및 사업화 지원 프로그램 참여",
        ],
      },
      {
        title: "아산나눔재단, 2024 아산 두어스 대학생 창업 부트캠프 1기 (2024.01)",
        descriptions: [
          "대학생 창업 역량 강화를 위한 부트캠프 참여",
        ],
      },
      {
        title: "YOURSSU - Android Developer (2023.09 - 2024.12)",
        descriptions: [
          "숭실대 커뮤니티 '숨쉴때'와 디자인 시스템 'Handy' 개발",
          "주 1회 안드로이드 스터디 참여",
        ],
      },
      {
        title: "UMC 4th SSU Vice Lead & Spring Boot (2023.03 - 2023.08)",
        descriptions: [
          "UMC 숭실대 부리더 및 숭실대 제1회 DEVCON 주최 및 운영(참여자 400명 규모)",
          "Spring Boot 스터디 참여 및 프로젝트 진행",
        ],
      },
      {
        title: "UMC 3rd Android (2022.09 - 2023.02)",
        descriptions: [
          "안드로이드 개발 스터디 참여 및 프로젝트 진행",
        ],
      },
    ],
  },
];

// name이 없는 레이아웃 (SimpleList용)
type SimpleListDataType = {
  title: string;
  features: {
    title: string;
    descriptions: string[];
    links?: string[];
  }[];
};

const COMMON_SIMPLE_LISTS: SimpleListDataType[] = [
  {
    title: "Awards",
    features: [
      {
        title: "",
        descriptions: [
          "15회 숭실 캡스톤디자인 경진대회 장려상 | 숭실대 공학교육혁신센터 (2025.10)",
          "소프트웨어 공모전 은상 | 숭실대 IT대학 (2025.07)",
          "GDSC 2024 대학 연합 해커톤 최우수상(2위) | GDSC 대학 연합 (2024.01)",
          "K-PaaS 활용 디지털 사회혁신 서비스 개발 공모전 금상(2위) | 한국지능정보사회진흥원 (2023.12)",
          "AI활용 온라인 개발대회 싱커톤 시즌3 최우수상(2위) | 주식회사 엔터플 (2023.11)",
          "소프트웨어 공모전 금상 | 숭실대 IT대학 (2023.08)",
          "UMC 3기 대학 연합 데모데이 대상(1위) | UMC 대학 연합 (2023.01)",
          "UMC 3기 대학 연합 해커톤 2위 | UMC 대학 연합 (2022.11)",
        ],
      },
    ],
  },
  {
    title: "Interview",
    features: [
      {
        title: "",
        descriptions: [
          "숭실대학교 공식 유튜브, 팀플로 잇슈를 만든 거라고? | 숭실대학교 잇슈 팀 인터뷰",
          "숭실대학교 영자신문편집국, Meet the EAT-SSU Team : Creating a Cafeteria Review App for SSU Student",
          "싱크트리 공식 블로그, [싱커톤 시즌3 수상작] 최우수상🥈 - ChatGPT와 함께하는 슬기로운 금융 목표 관리 서비스 <머니메이트>",
        ],
        links: [
          "https://www.youtube.com/watch?v=mCcEYAgV6uo&t=1s",
          "http://www.sstimes.net/news/articleView.html?idxno=4052",
          "https://blog.naver.com/synctree/223267230931",
        ],
      },
    ],
  },
  {
    title: "Education",
    features: [
      {
        title: "",
        descriptions: [
          "숭실대학교 컴퓨터학부 학사 / ICT 유통물류 융합전공 (2021.03 - 2025.08)",
          "대천여자고등학교 (2018.03 - 2021.01)",
        ],
      },
    ],
  },
  {
    title: "Certificates",
    features: [
      {
        title: "",
        descriptions: [
          "SQLD (2025.12)",
          "정보처리기사 (2024.12)",
        ],
      },
    ],
  },
];

import { ANDROID_RESUME } from "./android";
import { GENERAL_RESUME } from "./general";

export const RESUME_VARIANTS: Record<ResumeType, ResumeVariant> = {
  android: ANDROID_RESUME,
  general: GENERAL_RESUME,
};

export const DEFAULT_RESUME_TYPE: ResumeType = "android";

export const getResumeContent = (resumeType: ResumeType): ResumeContent => {
  const variant = RESUME_VARIANTS[resumeType] ?? RESUME_VARIANTS[DEFAULT_RESUME_TYPE];

  return {
    ...variant,
    presentations: COMMON_PRESENTATIONS,
    openSourceProjects: COMMON_ACTIVITIES,
    simpleLists: COMMON_SIMPLE_LISTS,
    lastUpdatedAt: LAST_UPDATED_AT,
  };
};
