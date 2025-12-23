import type { ResumeContent } from "./types";

const LAST_UPDATED_AT = "2025. 12. 10";

export const GENERAL_RESUME: ResumeContent = {
  profile: {
    name: "문제를 구조적으로 해결하는 프로덕트 개발자, 유진",
    links: [
      {
        label: "Email",
        value: "qldls0307@naver.com",
        href: "mailto:qldls0307@naver.com",
      },
      { label: "GitHub", value: "https://github.com/HI-JIN2" },
      { label: "Blog", value: "https://velog.io/@jini_1514" },
    ],
  },
  about: [
    {
      title: "문제 정의부터 배포까지 책임지는 풀사이클 경험이 있습니다.",
      descriptions: [
        "학내 서비스 EAT-SSU를 0→1로 구축한 뒤 40회 이상 릴리스를 반복하며 KPI를 추적했습니다.",
        "사용자 행동 로그와 CS 데이터를 바탕으로 기능 가설을 세우고 디자인-개발-릴리스를 2주 단위로 운영했습니다.",
        "한 학기 동안 WAU/MAU가 21.8% → 62.4%로 상승했고, Stickiness 개선에 따른 광고 제휴 제안도 확보했습니다.",
      ],
    },
    {
      title: "도메인 제약에 맞는 설계를 고민합니다.",
      descriptions: [
        "BLE, 지도, WebSocket 등 상태에 민감한 기능을 구현할 때 Observable/Flow 기반으로 상태 전이를 명시했습니다.",
        "Mocking 도구부터 로깅 파이프라인까지 테스트 수단을 마련해 보수 비용을 낮췄습니다.",
      ],
    },
    {
      title: "협업 경험과 학습 공유 문화가 강점입니다.",
      descriptions: [
        "교내·외 커뮤니티에서 3년간 총 15개 이상의 스터디/세미나를 기획해 전파했습니다.",
        "온보딩 문서와 코드 컨벤션을 표준화해 3명 규모 팀을 15명으로 확장하는 과정에서 생산성을 유지했습니다.",
      ],
    },
  ],
  experience: [
    {
      corp: "SK 엠앤서비스",
      about: ["Biz솔루션사업본부 Mobility사업 담당", "(TMAP AUTO 솔루션 개발)"],
      position: "Software Engineer · Internship",
      from: "2025.07",
      to: "2025.09",
      features: [
        {
          title: "TMAP AUTO 디버깅용 Mock GPS 툴체인",
          from: "2025.07",
          to: "2025.09",
          description:
            "실차 없이도 주행 로그를 재현할 수 있도록 Mock GPS 생성 앱과 분석 파이프라인을 구축",
          achievements: [
            "로그 파싱 속도를 50.6% 단축해 하루 30건 이상 시나리오를 재생산할 수 있는 테스트 환경 확보",
            "Base64 파싱 최적화로 기존 API 대비 처리 속도를 48% 향상",
          ],
          contributions: [
            "로그 성능 지표를 추가하고 병목 지점을 시각화해 I/O 버퍼, 배치 처리 전략을 도입",
            "파서/시뮬레이터를 분리하고 모듈화해 QA가 원하는 경로를 UI에서 바로 생성하도록 지원",
            "Room 캐시와 Compose UI 조합으로 시나리오 전환 시 앱 재시작 없이 상태를 유지",
          ],
          spec: [
            "Kotlin",
            "Jetpack Compose",
            "Multi-Module Architecture",
            "Room",
            "JUnit",
          ],
        },
      ],
    },
    {
      corp: "레이시오",
      about: ["GPS 기반 사이클링 컴퓨터 스타트업"],
      position: "Product Engineer · ICT Internship",
      from: "2024.09",
      to: "2024.12",
      features: [
        {
          title: "전기자전거 데모/베타 프로그램 운영",
          from: "2024.09",
          to: "2024.12",
          description:
            "전시용 데모 앱과 베타 앱을 동시에 운영하며 고객사 요구사항을 실험하고 기능을 개선",
          achievements: [
            "해외 전시회 데모로 파트너사 계약 체결에 기여",
            "베타 테스터 피드백 반영 후 목표 설정 UX를 정식 버전으로 출시",
          ],
          contributions: [
            "BLE Advertising 시뮬레이터와 Foreground Service 조합으로 백그라운드 상태에서도 안정적인 모킹 환경 제공",
            "LaunchedEffect 기반 애니메이션 로직을 체계화해 속도계, 경사도 등 수치를 일관되게 표현",
            "Thread.join 기반 동기 코드를 Coroutine 비동기로 변환해 처리 속도를 250ms → 0.5ms로 개선",
          ],
          spec: ["Kotlin", "Jetpack Compose", "Coroutine", "BLE", "Service"],
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
          title: "쇼핑몰 결제 내역 정규화 API",
          from: "2023.06",
          to: "2023.08",
          description:
            "300개 이상 쇼핑몰 결제 페이지를 통합 포맷으로 변환하는 크롤링/정규화 파이프라인 개발",
          achievements: [
            "TDD 기반 배포로 신규 쇼핑몰 추가 시 회귀 이슈를 0건으로 유지",
            "온보딩 가이드와 도메인 규칙을 문서화해 신규 인턴 온보딩 시간을 3일→1일로 단축",
          ],
          contributions: [
            "Selenium + BeautifulSoup 조합으로 로그인부터 상세 페이지까지 자동화",
            "Flask API와 비동기 워커를 분리해 CPU 바운드 파싱 작업을 안정적으로 처리",
            "Watcher 스크립트와 Slack 알림을 연동해 장애 감지 시간을 단축",
          ],
          spec: ["Python", "Selenium", "BeautifulSoup", "Flask"],
        },
      ],
    },
  ],
  projects: [
    {
      title: "EAT-SSU",
      from: "2022.11",
      to: "",
      features: [
        {
          title: "학식 리뷰 · 식수 인사이트 서비스",
          achievements: [
            "학내 사용자 4,000+명을 확보하고 학식 운영 단위와 개선 논의를 진행",
            "Remote Config로 운영시간 변동을 실시간 반영해 운영팀 대응 시간을 1일 → 10분으로 단축",
          ],
          contributions: [
            "레거시 XML 앱을 MVVM + Clean Architecture로 재설계하며 Compose로 단계적 전환",
            "SharedFlow 기반 UiEvent와 suspend 이미지 업로드로 에러율을 낮추고 안정성을 확보",
            "Glance 위젯, WorkManager, DataStore를 결합해 커뮤니티가 자주 확인하는 정보를 위젯으로 제공",
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
          title: "북한이탈주민 정착 지원 어시스턴트",
          achievements: [
            "15회 숭실 캡스톤디자인 장려상 수상 및 교과목 A학점 달성",
            "대화형 튜터 기능으로 인터뷰 대기시간을 50% 단축",
          ],
          contributions: [
            "OpenAI Realtime WebSocket을 도입해 음성 보조 응답 지연을 11초 → 3초로 단축",
            "지도 기반 추천 시 0.1km 임계값과 줌 레벨 기반 요청 범위를 적용해 API 호출량을 78% 줄임",
          ],
        },
      ],
    },
    {
      title: "ISBN 도서 전산 자동화",
      from: "2024.07",
      to: "2024.07",
      features: [
        {
          title: "봉사 현장 도서 등록 자동화 시스템",
          achievements: [
            "4시간 만에 MVP를 완성해 수작업 대비 6배 이상 빠르게 도서를 등록",
          ],
          contributions: [
            "바코드 스캔 → Google Books API 조회 → Spreadsheet 저장 파이프라인으로 현장 업무를 자동화",
            "Google Apps Script를 활용해 비개발자도 데이터를 정제하고 검색하도록 UX를 구성",
          ],
        },
      ],
    },
  ],
  presentations: [
    {
      title: "해외봉사가서 개발하기",
      event: "GDSC Soongsil 슈몰세미나 발표",
      descriptions: [
        "제한된 환경에서 문제를 빠르게 해결한 안드로이드 개발 사례 공유",
      ],
    },
    {
      title: "학교에서 서비스 운영하기",
      event: "GDSC Soongsil 슈몰세미나 발표",
      descriptions: [
        "학내 서비스(EAT-SSU) 운영 경험과 데이터 기반 기능 개선 사례 공유",
      ],
    },
  ],
  openSourceProjects: [
    {
      title: "Awards",
      name: "Major Competitions",
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
            "해외 봉사 개발 경험, 교내 서비스 운영 경험을 공유하고 기술 세션을 진행",
            "CS 인터뷰/회고/테크 블로그 스터디 기획으로 ‘스터디를 가장 많이 운영한 멤버’ 선정",
          ],
        },
        {
          title: "YOURSSU Product Developer (2023.10 - 2024.12)",
          descriptions: [
            "숭실대 커뮤니티 '숨쉴때'와 디자인 시스템 'Handy' 개발, 프로토타이핑부터 QA까지 리드",
            "주 1회 기술 스터디로 최신 안드로이드/웹 아키텍처를 공유",
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
  ],
  lastUpdatedAt: LAST_UPDATED_AT,
};



