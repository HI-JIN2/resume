# HI-JIN2

유진
Email. qldls0307@naver.com
Github. https://github.com/HI-JIN2
Blog. https://velog.io/@jini_1514
안드로이드 개발자
서비스를 끝까지 책임지는 개발자입니다.
학식 리뷰 앱 EAT-SSU를 2년 7개월간 운영하며 사용자 3,500명 규모 서비스의 품질을 책임졌습니다.
사용자 CS · 피드백 반영, UI/UX 개선, XML→Compose 전환, 플레이스토어 정책 대응 등 ‘운영–개선–업데이트’ 전체 사이클을 반복하며 성능 및 안정성을 개선했습니다.
그 결과, 전년 대비 WAU/MAU가 21.8% → 62.4%로 상승하여 주간 재방문율과 서비스 Stickiness를 크게 개선했습니다.

기술로 실질적인 문제를 빠르게 해결하는 개발자입니다.
해외 봉사활동 중 500권 도서를 전산화해야 하는 상황에서, 4시간 만에 안드로이드 기반 바코드 스캔 시스템을 개발하여 수작업 대비 6배 효율을 달성했습니다.
함께 성장하는 문화를 만들어온 개발자입니다.
전공 프로젝트로 시작한 EAT-SSU 팀을 3명에서 15명 규모로 확장하는 과정에서, 지원자–팀 커피챗을 운영해 지원자와 팀의 니즈를 사전에 파악하는 절차를 만들었습니다.
EAT-SSU 팀 내 세미나, KPT 회고, 안드로이드 팀 코드리뷰 및 컨벤션 등을 통해 팀 문화를 정착시켰습니다.
구글 학생 개발자 커뮤니티에서 2년간 활동하며, CS 인터뷰 스터디·회고 모임·테크블로그 모임 등을 운영해 ‘스터디를 가장 많이 운영한 멤버’로 선정되었습니다.
인턴십
SK 엠앤서비스 | 인턴십 ㆍ 안드로이드 개발
모빌리티 사업 담당 인턴 (TMAP AUTO 솔루션 개발)
2025.07 - 2025.09
TMAP AUTO 디버깅을 위한 Mock GPS 앱 개발
Mock GPS 생성 속도 개선
I/O 버퍼 크기 확장, 1000줄 단위 배치 처리, 정규식 단순화로 주행 로그 파싱 속도 50.6% 개선
Base64로 인코딩된 데이터를 파싱하여 기존 API 대비 48% 속도 계선

⚒️️ Kotlin · Jetpack Compose · Multi-Module Architecture · Build Logic · Room · JUnit
레이시오 | ICT 학점연계 인턴십 ㆍ 안드로이드 개발
GPS 기반 사이클링 컴퓨터(자전거 속도계)를 만드는 스타트업
2024.09 - 2024.12
전기자전거 신호 모킹 가상 자전거 애플리케이션 개발
BLE Advertising을 통해 기기 간 블루투스 연결 환경 모사
LaunchedEffect(speed) 변화 시 frameDuration을 재계산해 자연스러운 주행 애니메이션 구현
Foreground Service 적용으로 백그라운드 상태에서도 안정적인 BLE 통신 유지
해당 데모 앱을 활용해 해외 전시회에서 전기자전거 속도계를 시연 → 파트너사 계약 체결에 기여
trimm 사이클링 센터 앱 신기능 개발 및 유지보수 📎 PlayStore
‘운동 목표 설정’ 신기능 개발 → 중장년층 중심의 베타테스터 피드백 기반으로 UIUX 개선 → 정식 출시
병목이 발생하는 곳에서 Thread.join()를 Coroutine 비동기 처리로 변경해 실행 속도 250ms → 0.5ms 단축
Deprecated 라이브러리 제거 및 최신 버전 교체로 유지보수성 개선

⚒️️ Kotlin · XML · Jetpack Compose · BLE · Service · Coroutine

인턴십
사각 | 인턴 ㆍ 백엔드 개발
마이데이터 기반 서비스 및 솔루션 스타트업
2023.06 - 2023.08
쇼핑몰 결제내역 파싱 API 개발
다양한 쇼핑몰의 결제내역을 통합 포맷으로 정규화
TDD 방식으로 API 개발 및 페어 프로그래밍 경험

⚒️ Python · Selenium · BeautifulSoup · Flask
프로젝트
EAT-SSU: 숭실대 학식 리뷰 앱
📎 PlayStore 📎 Github
2022.11 - 진행 중
누적 가입자 3,500+명이 사용하는 학식 리뷰 서비스 개발 및 운영

운영 성과
Crashlytics 로그 분석으로 15건 이상의 주요 크래시 해결, 비정상 종료율 0% 유지
40회 이상 업데이트, 플레이스토어·에브리타임·인스타그램을 통해 사용자 피드백 수집 및 반영
Remote Config 도입 → 학기별 식당 운영 시간 변경을 코드 수정 없이 즉시 반영할 수 있는 구조 설계

개선 사항
레거시 안드로이드 패턴 → MVVM + 클린 아키텍쳐 설계 및 전환
UiState 모델링 (Init/Loading/Success/Error)
LiveData 개별 전달로 상태 불일치 발생 + 서버 지연 시 로딩 UI의 부재로 앱이 멈춘 것으로 오해하는 문제
sealed class UiState로 단일 상태 통합, 일관된 로딩 화면 구현
초기 진입 경험 개선으로 사용자 유지율(WAU/MAU) 전년 대비 21.8% → 62.4% 증가
Toast 중첩 호출 문제 해결
UiEvent를 SharedFlow로 관리하여 한 번만 emit 되도록 수정
이미지 업로드 로직 개선
Compressor 기반 이미지 압축으로 용량 84~93% 절감, S3 스토리지 사용량 최적화
“리뷰 작성 완료” 클릭 이후 S3 업로드가 수행되도록 suspend 기반 비동기 처리
사용자 피드백 반영으로 위젯 개발
Glance 기반으로 Compose UI Widget 개발
WorkManager로 1일 1회 자동 데이터 갱신 후 DataStore 저장
위젯 설정 화면에서 식당 선택 및 사용자 커스터마이징 지원

⚒️ Kotlin · XML · Jetpack Compose · Clean Architecture · MVVM
Hilt · Retrofit · Coroutine · Flow · WorkManager · Notification · Glance · Firebase · Gson
새길: 북한이탈주민을 위한 정착 지원 서비스
📎 PlayStore 📎 Github
2025.03 - 2025.07
OPEN AI Realtime API WebSocket 통신으로 기존 REST + TTS 대비 응답 지연 시간을 11초 → 3초로 단축
지도 화면의 중심이 바뀔때마다 API를 재호출해 서버 과부하가 발생하던 문제 해결
좌표 이동이 0.1km 이상일 때만 호출되도록 임계값을 설정해 API 호출량 78% 감소
줌 레벨을 활용해 필요한 범위만 요청해 전달받는 데이터 수를 최적화

⚒️ Kotlin · Jetpack Compose · Navigation · Clean Architecture · MVVM · Multi-Module Architecture ·  Hilt · Ktor · Coroutine · Flow · Naver Maps · Coil · OPEN AI Realtime API · WebSocket

프로젝트
ISBN 기반 도서 전산 자동화 시스템 (개인 프로젝트)
📎 Github
2024.07
인도네시아 해외봉사 중, 500권 이상의 도서를 빠르게 등록하기 위한 안드로이드 기반 시스템

ISBN 바코드 스캔 → Google Books API 조회 → Google SpreadSheets 저장 자동화
비개발자 봉사단원을 고려하여 Google SpreadSheet를 DB로 사용 (JavaScript 기반 Apps Script 활용)
1권당 1분 이상 소요되던 수기 도서 입력 작업을 스캔 10초 이내로 단축 → 업무 효율 6배 개선

⚒️ Kotlin · ZXing(Scanner) · Google Books API · Google Spreadsheet API
수상
K-PaaS 활용 디지털 사회혁신 서비스 개발 공모전 금상(2위)
2023.12
한국지능정보사회진흥원
AI활용 온라인 개발대회 싱커톤 시즌3 최우수상(2위)
2023.11
주식회사 엔터플


활동
Google Developer Student Clubs (GDSC Soongsil)
2023.10 - 2025.08
슈몰세미나 발표: 「해외봉사가서 개발하기」, 「📎학교에서 서비스 운영하기」 등
스터디 문화에 기여: CS 인터뷰 스터디, 회고 모임 운영
솔루션 챌린지: 📎히키코모리를 위한 챌린지 앱 기획/개발
YOURSSU Android Developer (숭실대학교 IT 동아리)
2023.10 - 2024.12
숭실대 커뮤니티 📎숨쉴때와 디자인 시스템 📎 Handy 개발
학력
숭실대학교 컴퓨터학부 학사
2021.03 - 2025.08
ICT유통물류 융합전공
교내 수상
15회 숭실 캡스톤디자인 경진대회 장려상(2025.10)
소프트웨어공모전 은상 (2025.07)
소프트웨어공모전 금상 (2023.08)
자격
정보처리기사
2024.12
SQLD
2025.12