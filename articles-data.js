// 전체 아티클 데이터 통합
const allArticlesData = [
    // AI 교육기술 (insights.html)
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '콘텐츠 자동 자막생성', description: '동영상, 유투브 자동 자막 추출, 편집, 다국어', badge: 'AI 교육기술', link: 'article-auto-subtitle-generation.html', thumbnail: 'assets/thumbnails/콘텐츠자막생성.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '실시간 강의 자막•자동 번역', description: '실시간 강의, 발표 자막 생성, 다국어 번역', badge: 'AI 교육기술', link: 'article-ai-realtime-translation.html', thumbnail: 'assets/thumbnails/실시간자동번역.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '과정 정보 자동 생성', description: '제목만 입력하면 AI가 과정 정보를 자동으로 완성합니다', badge: 'AI 교육기술', link: 'article-auto-course-info.html', thumbnail: 'assets/thumbnails/과정정보자동생성.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '시험문항 자동 생성', description: 'AI가 학습자료를 분석하여 시험 문제와 풀이를 자동으로 생성합니다', badge: 'AI 교육기술', link: 'article-auto-question-generation.html', thumbnail: 'assets/thumbnails/시험문제자동생성.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: 'AI 학습 챗봇', description: '학습자료를 분석하여 질의응답, 학습 요약 제공', badge: 'AI 교육기술', link: 'article-ai-learning-chatbot.html', thumbnail: 'assets/thumbnails/AI학습챗봇.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '전 기능 MCP 서버 지원', description: 'LMS 전체 기능 AI 제어', badge: 'AI 교육기술', link: 'article-mcp-server-support.html', thumbnail: 'assets/thumbnails/전기능MCP서버지원.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: 'AI 매뉴얼', description: 'RAG 기반 AI가 필요한 매뉴얼을 빠르게 검색하고 답변합니다', badge: 'AI 교육기술', link: 'article-ai-manual.html', thumbnail: 'assets/thumbnails/AI매뉴얼.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '다국어 Q&A', description: 'AI가 실시간으로 질의응답을 번역합니다', badge: 'AI 교육기술', link: 'article-ai-multilingual-qa.html', thumbnail: 'assets/thumbnails/다국어qna.png' },
    { page: 'insights.html', pageTitle: 'AI 교육기술', title: '다국어 학생상담', description: 'AI가 실시간으로 상담을 번역합니다', badge: 'AI 교육기술', link: 'article-ai-multilingual-counseling.html', thumbnail: 'assets/thumbnails/다국어학생상담.png' },

    // 사용자 중심 학습관리 (features.html)
    { page: 'features.html', pageTitle: '사용자 중심 학습관리', title: '편리한 수강신청', description: '과정 찾기부터 일정 관리까지, 학습자가 직접 탐색하고 선택하는 완결된 학습 흐름', badge: '교육', link: 'article-convenient-enrollment.html', thumbnail: 'assets/thumbnails/편리한수강신청.png' },
    { page: 'features.html', pageTitle: '사용자 중심 학습관리', title: '사용자 맞춤형 대시보드', description: '로그인 한 번으로 학습 이력, 일정, 강의실, 수료증까지 연결되는 개인화된 학습 공간', badge: '교육', link: 'article-dashboard.html', thumbnail: 'assets/thumbnails/사용자맞춤형대시보드.png' },
    { page: 'features.html', pageTitle: '사용자 중심 학습관리', title: '온·오프 통합 강의실', description: '온라인, 오프라인 강의 통합 관리', badge: '교육', link: 'article-integrated-classroom.html', thumbnail: 'assets/thumbnails/온오프통합강의실.png' },
    { page: 'features.html', pageTitle: '사용자 중심 학습관리', title: '학습 커뮤니티', description: '학습자간 소통, 지식 공유', badge: '교육', link: 'article-learning-community.html', thumbnail: 'assets/thumbnails/학습커뮤니티.png' },
    { page: 'features.html', pageTitle: '사용자 중심 학습관리', title: '학습 마일리지·쿠폰·이벤트', description: '학습 동기부여, 리워드 시스템', badge: '교육', link: 'article-learning-rewards.html', thumbnail: 'assets/thumbnails/학습마일리지:쿠폰:이벤트.png' },
    { page: 'features.html', pageTitle: '사용자 중심 학습관리', title: '마이크로러닝', description: '짧은 학습 단위, 모바일 최적화', badge: '교육', link: 'article-microlearning.html', thumbnail: 'assets/thumbnails/마이크로러닝.png' },

    // 디테일한 교육관리 (portfolio.html)
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '다양한 학습진도 설정', description: '순차·비순차 학습, 최소·인정 진도율', badge: '교육', link: 'article-diverse-learning-progress.html', thumbnail: 'assets/thumbnails/다양한학습진도설정.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '편리한 학습목차 관리', description: '다양한 유형, 차시별 설정', badge: '교육', link: 'article-curriculum-management.html', thumbnail: 'assets/thumbnails/편리한학습목차관리.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '강의실/스튜디오 관리 예약', description: '오프라인 시설, 장비 예약 및 관리', badge: '교육', link: 'article-classroom-reservation.html', thumbnail: 'assets/thumbnails/강의실:스튜디오관리예약.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '수료증 템플릿 관리', description: '수료증 템플릿 구성, 과정별 선택', badge: '교육', link: 'article-certificate-template.html', thumbnail: 'assets/thumbnails/수료증템플릿관리.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '수강 신청서 템플릿 관리', description: '과정 별 수강 신청서 설정, 자유로운 폼 구성', badge: '교육', link: 'article-enrollment-template.html', thumbnail: 'assets/thumbnails/수강신청서.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '학습 독려 자동 알림', description: '자동 발송, 발송 이력 관리', badge: '교육', link: 'article-learning-reminder.html', thumbnail: 'assets/thumbnails/학습독려자동알림.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '외부기관 교육 관리', description: '타 기관 교육이수 내역 관리', badge: '교육', link: 'article-external-organization.html', thumbnail: 'assets/thumbnails/외부기관교육관리.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '개인정보 관리', description: '개인정보 열람·수정·삭제', badge: '교육', link: 'article-personal-info-management.html', thumbnail: 'assets/thumbnails/개인정보관리.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '다양한 학습리소스 관리', description: 'MP4, PDF, SCORM 등 모든 유형의 콘텐츠 지원', badge: '교육', link: 'article-resource-management.html', thumbnail: 'assets/thumbnails/다양한학습리소스관리.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '미디어 스트리밍', description: 'HLS 기반 안정적인 동영상 스트리밍', badge: '교육', link: 'article-media-streaming.html', thumbnail: 'assets/thumbnails/미디어스트리밍.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '검증된 평가시스템', description: '다양한 문제 유형, 자동채점, 성적관리', badge: '교육', link: 'article-assessment-system.html', thumbnail: 'assets/thumbnails/검증된평가시스템.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '다양한 평가 기준', description: '진도율, 시험, 과제, 설문 등 복합 평가', badge: '교육', link: 'article-diverse-assessment.html', thumbnail: 'assets/thumbnails/다양한평가기준.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '편리한 설문관리', description: '설문 템플릿, 자동 집계', badge: '교육', link: 'article-survey-management.html', thumbnail: 'assets/thumbnails/편리한설문관리.png' },
    { page: 'portfolio.html', pageTitle: '디테일한 교육관리', title: '직관적인 과정 관리', description: '과정 생성부터 운영까지 원스톱', badge: '교육', link: 'article-course-management.html', thumbnail: 'assets/thumbnails/혁신적인과정관리.png' },

    // 가성비의 전문 솔루션 (tips.html)
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: '통합 검색엔진', description: '검색어 추천, 자연어 검색, 검색 통계', badge: '솔루션', link: 'article-integrated-search.html', thumbnail: 'assets/thumbnails/검색엔진.png' },
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: '문서 리포팅·보안', description: 'PDF 리포팅, 원본확인, 복사방지 코드', badge: '솔루션', link: 'article-document-reporting.html', thumbnail: 'assets/thumbnails/문서보안리포팅.png' },
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: '사이트 분석', description: '접속 통계, 로그 분석', badge: '솔루션', link: 'article-site-analytics.html', thumbnail: 'assets/thumbnails/사이트분석.png' },
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: 'QR 출결·출석부', description: 'QR 출석확인, 출석부 출력', badge: '솔루션', link: 'article-qr-attendance.html', thumbnail: 'assets/thumbnails/qr출석관리.png' },
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: 'CBT 부정행위 방지', description: '설치형 프로그램, 타 프로그램 실행 방지', badge: '솔루션', link: 'article-cbt-anti-cheating.html', thumbnail: 'assets/thumbnails/CBT부정행위.png' },
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: '대량접속 제어 관리', description: '자동 대기열 관리, 대기 시간 예측', badge: '솔루션', link: 'article-traffic-control.html', thumbnail: 'assets/thumbnails/대량접속제어.png' },

    // 뉴스룸 (newsroom.html)
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '2025 통합 개발 및 운영 기록', description: '2024~2025년', badge: '기록', link: 'article-2025-dev-record.html', thumbnail: 'assets/articles/연간보고서.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '신SW상품대상 멀티미디어&서비스SW 부문 수상', description: '2025년 6월', badge: '수상', link: 'article-sw-award.html', thumbnail: 'assets/articles/sw대상.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: 'GS인증 1등급 획득', description: '2025년 9월 12일', badge: '인증', link: 'article-gs-certification.html', thumbnail: 'assets/articles/gs인증.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '강의실 UI/UX 전면 개편', description: 'AI 학습보조, 다크테마, 보드형 구조로 재설계', badge: 'UI/UX', link: 'article-classroom-renewal.html', thumbnail: 'assets/articles/강의실UI_UX전면개편.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '데이터 및 검색엔진 전면 개편', description: '학습데이터 API 구축 및 OpenSearch 전환', badge: 'Data·Search', link: 'article-data-search-engine.html', thumbnail: 'assets/articles/검색엔진전면개편.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '보안 체계 강화', description: 'KISA 보안약점, 세션 안정화, OAuth 인증', badge: 'Security', link: 'article-security-enhancement.html', thumbnail: 'assets/articles/보안체계강화.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '사용자 중심 UI 개선', description: 'Footer 리뉴얼, 팝업 정렬, QR 공유 기능', badge: 'User Experience', link: 'article-ui-improvement.html', thumbnail: 'assets/articles/사용자중심UI개선.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '신규 기관 맞춤 기능 반영', description: '검색 강화, 수료증 출력, OTP 인증 추가', badge: 'Customization', link: 'article-custom-features.html', thumbnail: 'assets/articles/신규기관맞춤기능반영.png' },
    { page: 'tips.html', pageTitle: '가성비의 전문 솔루션', title: '통합 검색엔진', description: '검색어 추천, 자연어 검색, 검색 통계', badge: '솔루션', link: 'article-search-engine.html', thumbnail: 'assets/thumbnails/검색엔진.png' },
    { page: 'newsroom.html', pageTitle: '뉴스룸', title: '통합검색 및 홍보영상 기능 강화', description: '통합 검색 및 대시보드 기능 향상', badge: 'Integration', link: 'article-integrated-search.html', thumbnail: 'assets/articles/통합검색및홍보영상기능강화.png' },
    
    // 개발 업데이트 (dev-update.html)
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '강의실 UI/UX 전면 개편', description: 'AI 학습보조, 다크테마, 보드형 구조로 재설계', badge: 'UI/UX', link: 'article-classroom-renewal.html', thumbnail: 'assets/articles/강의실UI_UX전면개편.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '빠르고 똑똑한 검색엔진으로 전면 업그레이드', description: '학습데이터 API · OpenSearch 엔진 전환', badge: '데이터', link: 'article-data-search-engine.html', thumbnail: 'assets/articles/검색엔진전면개편.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '안전해진 LX2, 한층 강화된 보안 체계', description: 'KISA 보안약점 · 세션 무결성 · OAuth 인증', badge: '보안', link: 'article-security-enhancement.html', thumbnail: 'assets/articles/보안체계강화.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '사용자 중심으로 새로워진 LX2 UI', description: 'Footer 리뉴얼 · 팝업 최적화 · QR 공유', badge: 'UI/UX', link: 'article-ui-improvement.html', thumbnail: 'assets/articles/사용자중심UI개선.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '기관별 요구에 맞춘 기능 확장 업데이트', description: '검색 강화 · 수료증 출력 · OTP 인증', badge: '기능 확장', link: 'article-custom-features.html', thumbnail: 'assets/articles/신규기관맞춤기능반영.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '통합검색과 홍보영상, 이제 빠르고 직관적으로', description: '추천검색 · 영상 팝업 · GLightbox 연동', badge: 'UI/UX', link: 'article-integrated-search.html', thumbnail: 'assets/articles/통합검색및홍보영상기능강화.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: 'LX2Crypto 개발 현황 보고', description: 'SHA2·SHA3 · HMAC · CMAC 구현 완료', badge: '보안·검증', link: 'article-lx2crypto-status.html', thumbnail: 'assets/articles/LX2Crypto개발검증준비.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: 'Vimeo·YouTube 연동 API 개발', description: 'JSON 기반 자동화 · AccessToken 보안', badge: 'API 개발', link: 'article-content-api.html', thumbnail: 'assets/articles/콘텐츠등록수정API개발.png' },
    { page: 'dev-update.html', pageTitle: '개발 업데이트', title: '자체 암호모듈 검증 추진', description: 'LX2Crypto V1.0 개발 및 국가 검증 준비', badge: '보안', link: 'article-crypto-module.html', thumbnail: 'assets/articles/자체암호모듈검증추진.png' },
];
