export const PROFILE = {
  name: "서비스를 끝까지 책임지는 안드로이드 개발자, 유진",
  links: [
    { label: "Email", value: "qldls0307@naver.com", href: "mailto:qldls0307@naver.com" },
    { label: "GitHub", value: "https://github.com/HI-JIN2" },
    { label: "Blog", value: "https://velog.io/@jini_1514" },
  ],
};

export const LAST_UPDATED_AT = "2025. 12. 09";

type AboutItem = {
  title: string;
  descriptions: string[];
};

export const ABOUT_ME: AboutItem[] = [
  {
    title: "서비스를 끝까지 책임지는 안드로이드 개발자",
    descriptions: [
      "학식 리뷰 앱 EAT-SSU를 2년 7개월간 운영하며 사용자 3,500명 규모 서비스의 품질을 책임졌습니다.",
      "사용자 CS · 피드백 반영, UI/UX 개선, XML→Compose 전환, 플레이스토어 정책 대응 등  ‘운영–개선–업데이트’ 전체 사이클을 반복하며 성능 및 안정성을 개선했습니다.",
      "그 결과, 전년 대비 WAU/MAU가 21.8% → 62.4%로 상승하여 주간 재방문율과 서비스 Stickiness를 크게 개선했습니다.",
    ],
  },
  {
    title: "기술로 실질적인 문제를 빠르게 해결하는 개발자입니다.",
    descriptions: [
      "해외 봉사활동 중 500권 도서를 전산화해야 하는 상황에서,  4시간 만에 안드로이드 기반 바코드 스캔 시스템을 개발하여 수작업 대비 6배 효율을 달성했습니다. ",
        ],
  },
  {
    title: "함께 성장하는 문화를 만들어온 개발자입니다.",
    descriptions: [
      "전공 프로젝트로 시작한 EAT-SSU 팀을 3명에서 15명 규모로 확장하는 과정에서, 지원자–팀 커피챗을 운영해 지원자와 팀의 니즈를 사전에 파악하는 절차를 만들었습니다.",
      "EAT-SSU 팀 내 세미나, KPT 회고, 안드로이드 팀 코드리뷰 및 컨벤션 등을 통해 팀 문화를 정착시켰습니다.",
      "구글 학생 개발자 커뮤니티에서 2년간 활동하며, CS 인터뷰 스터디·회고 모임·테크블로그 모임 등을 운영해 ‘스터디를 가장 많이 운영한 멤버’로 선정되었습니다."
    ],
  },
];

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

export const EXPERIENCE: WorkExperience[] = [
  {
    corp: "SK 엠앤서비스",
    about: ["Biz솔루션사업본부 Mobility사업 담당", "(TMAP AUTO 솔루션 개발)"],
    position: "Android Developer · Internship",
    from: "2025.07",
    to: "2025.09",
    features: [
      {
        title: "TMAP AUTO 디버깅용 Mock GPS 앱",
        from: "2025.07",
        to: "2025.09",
        description:
          "Mock GPS 데이터를 생성하는 안드로이드 앱을 개발해 차량 없이도 주행 로그를 재현하도록 지원",
        achievements: [
          "Mock GPS 앱으로 실제 차량 없이도 TMAP AUTO 디버깅 환경을 확보",
          "I/O 버퍼 확장과 배치 처리로 주행 로그 파싱 속도를 50.6% 개선",
          "Base64 인코딩 데이터 파싱 최적화로 기존 API 대비 처리 속도를 48% 향상",
        ],
        contributions: [
          "Mock GPS 데이터 생성 파이프라인 성능 측정 지표를 추가하고 병목 구간을 시각화",
          "정규식을 단순화하고 1,000줄 단위 배치 처리 로직을 적용해 로그 파서 효율을 높임",
          "Jetpack Compose UI와 Room 캐시를 결합해 다양한 주행 시나리오를 즉시 전환하도록 설계",
        ],
        spec: [
          "Kotlin",
          "Jetpack Compose",
          "Multi-Module Architecture",
          "Build Logic",
          "Room",
          "JUnit",
        ],
      },
    ],
  },
  {
    corp: "레이시오",
    about: ["GPS 기반 사이클링 컴퓨터 스타트업"],
    position: "Android Developer · ICT Internship",
    from: "2024.09",
    to: "2024.12",
    features: [
      {
        title: "전기자전거 신호 모킹 가상 자전거 앱",
        from: "2024.09",
        to: "2024.09",
        description:
          "BLE와 Compose UI로 전기자전거 주행 환경을 시뮬레이션하는 데모 앱 개발",
        achievements: [
          "해외 전시회에서 해당 데모로 전기자전거 속도계를 시연해 파트너사 계약 체결에 기여",
          "Foreground Service 기반 BLE 통신으로 백그라운드 상태에서도 안정적인 모킹 환경 제공",
        ],
        contributions: [
          "BLE Advertising을 활용해 실제 기기 없이도 주행 신호를 송수신하도록 구현",
          "LaunchedEffect(speed) 변화를 감지해 frameDuration을 재계산하며 자연스러운 속도 애니메이션 구성",
          "서비스와 Notification 조합으로 앱이 백그라운드에 있어도 BLE 연결을 유지",
        ],
        spec: ["Kotlin", "Jetpack Compose", "BLE", "Service", "Coroutine"],
      },
      {
        title: "trimm Cycling Center 앱 신기능 개발 및 유지보수",
        from: "2024.10",
        to: "2024.12",
        description:
          "중장년층 베타테스터 피드백을 반영해 운동 목표 설정 UX를 개선하고 기존 기능을 안정화",
        achievements: [
          "운동 목표 설정 기능 정식 출시로 사용자 맞춤 경험 강화",
          "Thread.join 기반 동기 로직을 Coroutine 비동기로 전환해 실행 속도를 250ms에서 0.5ms로 단축",
          "Deprecated 라이브러리 제거와 최신 버전 교체로 유지보수성 향상",
        ],
        contributions: [
          "Compose와 XML 혼합 구조를 분석해 공통 UI 모듈을 정의하고 재사용률을 높임",
          "중장년층 피드백을 토대로 타이포와 컬러 대비를 조정해 접근성을 확보",
          "BLE, Service, Coroutine 모듈의 책임을 분리해 장애 발생 시 영향을 최소화",
        ],
        spec: ["Kotlin", "XML", "Jetpack Compose", "Coroutine", "BLE"],
      },
    ],
  },
  {
    corp: "사각",
    about: ["마이데이터 기반 서비스 및 솔루션 스타트업"],
    position: "Backend Developer · Internship",
    from: "2023.06",
    to: "2023.08",
    features: [
      {
        title: "쇼핑몰 결제내역 파싱 API",
        from: "2023.06",
        to: "2023.08",
        description:
          "다양한 쇼핑몰 결제 내역을 통합 포맷으로 정규화하는 API를 TDD와 페어 프로그래밍으로 개발",
        achievements: [
          "쇼핑몰별 다른 HTML 구조를 단일 포맷으로 통합해 마이데이터 활용 속도를 높임",
          "테스트 코드 기반 릴리스로 배포 직후 버그 제로 상태를 유지",
        ],
        contributions: [
          "Selenium과 BeautifulSoup으로 로그인부터 상세 페이지까지 크롤링 파이프라인 구성",
          "Flask API와 비동기 워커를 분리해 파싱 작업을 안정적으로 처리",
          "도메인 규칙을 문서화하고 온보딩 가이드를 만들어 팀 확장 속도를 높임",
        ],
        spec: ["Python", "Selenium", "BeautifulSoup", "Flask"],
      },
    ],
  },
];

type PersonalProjectFeature = {
  title: string;
  achievements: string[];
  contributions: string[];
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

export const PERSONAL_PROJECT: PersonalProject[] = [
  {
    title: "EAT-SSU",
    from: "2022.11",
    to: "",
    features: [
      {
        title: "누적 가입자 4,000+명이 사용하는 학식 리뷰 서비스 기획 · 개발 · 운영",
        achievements: [
          "Crashlytics 로그 분석으로 15건 이상의 주요 크래시를 해결해 비정상 종료율 0% 유지",
          "40회 이상 업데이트와 플레이스토어·에브리타임·인스타그램 피드백 채널로 사용자 요구를 빠르게 반영",
          "Remote Config를 도입해 학기별 식당 운영 시간 변경을 코드 수정 없이 즉시 반영",
          "교내 2023 소프트웨어 공모전 금상 수상"
        ],
        contributions: [
          "레거시 XML 구조를 MVVM + Clean Architecture로 재설계하고 sealed UiState로 일관된 로딩 경험 제공",
          "SharedFlow 기반 UiEvent 관리로 Toast 중첩 문제를 제거하고 suspend 기반 이미지 업로드로 처리 안정성 확보",
          "Compressor 기반 이미지 압축으로 용량을 84~93% 절감해 S3 비용을 최적화",
          "Glance 위젯 + WorkManager + DataStore를 결합해 위젯 자동 업데이트와 사용자 커스터마이징 기능 구현",
        ],
      },
    ],
  },
  {
    title: "새길",
    from: "2025.03",
    to: "2025.07",
    features: [
      {
        title: "북한이탈주민 정착 지원 서비스 안드로이드 앱",
        achievements: [
          "15회 숭실 캡스톤디자인 경진대회 장려상 수상",
          "전공종합설계 교과목 A학점 달성"
        ],
        contributions: [
          "OpenAI Realtime API WebSocket을 도입해 기존 REST + TTS 대비 응답 지연을 11초에서 3초로 단축",
          "지도 중심 좌표 이동에 0.1km 임계값을 적용해 API 호출량을 78% 감소",
          "줌 레벨로 요청 범위를 조정해 전달받는 데이터를 최적화하고 서버 부하를 완화",
        ],
      },
    ],
  },
  {
    title: "ISBN 도서 전산 자동화 시스템",
    from: "2024.07",
    to: "2024.07",
    features: [
      {
        title: "해외 봉사 현장에서 500권 이상의 도서를 빠르게 등록하기 위한 안드로이드 기반 시스템",
        achievements: [
          "4시간 만에 MVP를 완성해 수작업 대비 6배 이상의 등록 효율을 달성",
        ],
        contributions: [
          "ISBN 바코드 스캔 → Google Books API 조회 → Google Spreadsheet 저장을 자동화해 1권당 1분 걸리던 작업을 10초로 단축",
          "비개발자 봉사단원을 위해 Google Apps Script로 Spreadsheet를 데이터베이스처럼 활용하도록 설계",
        ],
      },
    ],
  },
];

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
  }[];
};

export const OPEN_SOURCE_PROJECT: OpenSourceProject[] = [
  {
    title: "Awards",
    name: "Major competitions",
    features: [
      {
        title: "주요 대회 수상",
        descriptions: [
          "K-PaaS 활용 디지털 사회혁신 서비스 개발 공모전 금상 (2위) | 한국지능정보사회진흥원 (2023.12)",
          "AI활용 온라인 개발대회 싱커톤 시즌3 최우수상 (2위) | 주식회사 엔터플 (2023.11)",
        ],
      },
    ],
  },
  {
    title: "Activities",
    name: "Community",
    features: [
      {
        title: "Google Developer Student Clubs (2023.10 - 2025.08)",
        descriptions: [
          "해외 봉사 개발 경험, 교내 서비스 운영 경험 공유 세션 진행,",
          "CS 인터뷰/회고/테크 블로그 스터디 등을 기획/ 운영해 '스터디를 가장 많이 운영한 멤버' 선정",
        ],
      },
      {
        title: "YOURSSU Android Developer (2023.10 - 2024.12)",
        descriptions: [
          "숭실대 커뮤니티 '숨쉴때'와 디자인 시스템 'Handy' 개발",
          "주 1회 안드로이드 스터디 동아리 참여",
        ],
      },
    ],
  },
  {
    title: "Education",
    name: "Soongsil University",
    features: [
      {
        title: "학력",
        descriptions: [
          "숭실대학교 컴퓨터학부 학사 (2021.03 - 2025.08)",
          "ICT 유통물류 융합전공 이수",
        ],
      },
      {
        title: "교내 수상",
        descriptions: [
          "15회 숭실 캡스톤디자인 경진대회 장려상 (2025.10)",
          "소프트웨어공모전 은상 (2025.07)",
          "소프트웨어공모전 금상 (2023.08)",
        ],
      },
    ],
  },
  {
    title: "Certificates",
    name: "Professional",
    features: [
      {
        title: "자격",
        descriptions: [
          "정보처리기사 (2024.12)",
          "SQLD (2025.12)",
        ],
      },
    ],
  },
];
