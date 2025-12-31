import type { ResumeVariant } from "./index";

export const GENERAL_RESUME: ResumeVariant = {
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
      position: "Software Engineer Intern",
      from: "2025.07",
      to: "2025.09",
      features: [
        {
          title: "TMAP AUTO 디버깅을 위한 Mock GPS 인터널 앱 개발",
          from: "2025.07",
          to: "2025.09",
          description:
            "차량 없이도 주행 로그를 재현해야 하는 상황에서, 주행 로그 파싱 시 병목과 ==OOM==이 발생하고 경로 탐색 API 속도가 느린 문제를 해결해야 했습니다.",
          achievements: [
            "주행 로그 파싱 속도 ==50.6%== 개선",
            "==OOM== 문제 완전 해결",
            "경로 탐색 시 ==GPS== 생성 속도 기존 API 대비 ==48%== 개선",
            "==WebView== 표시 문제 해결",
          ],
          contributions: [
            "==I/O 버퍼== 크기 확장 및 ==1000줄== 단위 배치 처리 적용",
            "정규식 단순화로 파싱 로직 최적화",
            "파싱 성능 측정 지표 추가 및 병목 구간 시각화",
            "==Base64== 자사규격 데이터 디코딩 로직 구현",
            "==Jetpack Compose== UI와 ==Room== 캐시 결합 설계",
            "==View layoutParams== 지정으로 ==WebView== 렌더링 처리",
          ],
          spec: [
            "Kotlin",
            "Compose",
            "Multi-Module",
            "Build Logic",
            "Room",
            "JUnit",
          ],
        },
        {
          title: "TMAP EDC SDK를 활용한 HUD Device 연동 프로젝트",
          from: "2025.07",
          to: "2025.09",
          description:
            "주행 정보를 ==HUD== 디바이스로 실시간 전송해야 하는 상황에서, ==BLE write==의 비동기 특성으로 인한 통신 순서 불일치 문제가 발생했습니다.",
          achievements: [
            "==1초==마다 주행 정보를 실시간으로 수신하여 UI 표출 및 ==HUD== 디바이스로 전송",
            "==BLE== 통신 순서 불일치 문제 완전 해결",
            "==HUD== 디바이스와 정상적인 ==BLE== 통신 연결 및 데이터 전송 성공",
          ],
          contributions: [
            "==EDC SDK== 리스너 콜백 구현 및 ==Bundle==에서 주행 정보 파싱 로직 개발",
            "==Command Queue==와 ==Flag== 패턴으로 ==BLE write== 비동기 통신 순서 보장",
            "==HUD==의 ==BLE== 프로토콜에 맞춰 ==3Byte== 데이터를 ==Big Endian== 방식으로 분할 전송 로직 구현",
          ],
          spec: [
            "Kotlin",
            "Compose",
            "Multi-Module",
            "Build Logic",
            "BLE",
            "Hilt",
            "Tmap EDC SDK",
            "JUnit",
          ],
        },
      ],
    },
    {
      corp: "레이시오",
      about: ["GPS 기반 사이클링 컴퓨터 스타트업"],
      position: "Product Engineer · ICT Intern",
      from: "2024.09",
      to: "2024.12",
      features: [
        {
          title: "전기자전거 데모/베타 프로그램 운영",
          from: "2024.09",
          to: "2024.12",
          description:
            "해외 전시회에서 전기자전거 속도계를 시연해야 하는 상황과, 중장년층 사용자들이 운동 목표 설정 기능에 접근하기 어려워하고 기존 동기 로직으로 인해 처리 속도가 ==250ms==로 느린 문제가 있었습니다.",
          achievements: [
            "해외 전시회 데모로 파트너사 계약 체결에 기여",
            "베타 테스터 피드백 반영 후 목표 설정 ==UX==를 정식 버전으로 출시",
            "처리 속도 ==250ms==에서 ==0.5ms==로 개선",
          ],
          contributions: [
            "==BLE Advertising== 시뮬레이터와 ==Foreground Service== 조합으로 백그라운드 상태에서도 안정적인 모킹 환경 제공",
            "==LaunchedEffect== 기반 애니메이션 로직을 체계화해 속도계, 경사도 등 수치를 일관되게 표현",
            "==Thread.join== 기반 동기 코드를 ==Coroutine== 비동기로 변환",
          ],
          spec: ["Kotlin", "Jetpack Compose", "Coroutine", "BLE", "Service"],
        },
      ],
    },
    {
      corp: "사각",
      about: ["마이데이터 기반 서비스 및 솔루션 스타트업"],
      position: "Backend Developer Intern",
      from: "2023.06",
      to: "2023.08",
      features: [
        {
          title: "쇼핑몰 결제 내역 정규화 API",
          from: "2023.06",
          to: "2023.08",
          description:
            "==300개== 이상의 쇼핑몰별로 다른 ==HTML== 구조의 결제 내역을 마이데이터 서비스에 활용하기 위해 단일 포맷으로 통합해야 했고, 신규 쇼핑몰 추가 시 회귀 이슈가 발생하는 문제가 있었습니다.",
          achievements: [
            "==300개== 이상 쇼핑몰 결제 페이지를 통합 포맷으로 변환",
            "==TDD== 기반 배포로 신규 쇼핑몰 추가 시 회귀 이슈 ==0건== 유지",
            "온보딩 가이드와 도메인 규칙 문서화로 신규 인턴 온보딩 시간 ==3일→1일==로 단축",
          ],
          contributions: [
            "==Selenium== + ==BeautifulSoup== 조합으로 로그인부터 상세 페이지까지 자동화",
            "==Flask API==와 비동기 워커를 분리해 ==CPU== 바운드 파싱 작업을 안정적으로 처리",
            "==TDD==와 페어 프로그래밍으로 개발하며 ==Watcher== 스크립트와 ==Slack== 알림을 연동해 장애 감지 시간 단축",
          ],
          spec: ["Python", "Selenium", "BeautifulSoup", "Flask"],
        },
      ],
    },
  ],
  personalProjects: [
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
    {
      title: "마니또 파티",
      from: "2025.12",
      to: "",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/HI-JIN2/manitto-backend",
        },
      ],
      features: [
        {
          title: "마니또 배정 이메일 전송 서비스",
          achievements: [
            "웹 풀스택 1인 개발 및 운영",
          ],
          contributions: [
            "마니또 배정 알고리즘 구현 및 이메일 자동 전송 시스템 구축",
          ],
        },
      ],
    },
    {
      title: "COOING",
      from: "2023.10",
      to: "2023.12",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/COOING-team/COOING-Server",
        },
      ],
      features: [
        {
          title: "쿠잉, 아이의 음성으로 쓰는 성장일기",
          achievements: [
            "백엔드 개발 및 인프라 구축",
          ],
          contributions: [
            "음성 데이터 처리 및 저장 시스템 개발",
            "서버 인프라 설계 및 운영",
          ],
        },
      ],
    },
    {
      title: "머니메이트",
      from: "2023.10",
      to: "2023.11",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/MoneyMate-project/MoneyMate",
        },
      ],
      features: [
        {
          title: "금융 API와 AI를 활용한 금융조언 앱",
          achievements: [
            "AI활용 온라인 개발대회 싱커톤 시즌3 최우수상(2위) 수상",
          ],
          contributions: [
            "안드로이드 개발, 백엔드, 프롬프팅 담당",
            "팀장으로 프로젝트 리드",
            "금융 API 연동 및 AI 기반 금융 조언 기능 구현",
          ],
        },
      ],
    },
  ],
};

