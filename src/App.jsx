import { useMemo, useState } from "react";

const projects = [
  {
    name: "morning-brief",
    label: "Morning Brief",
    category: "VERCEL",
    index: "01",
    description: "하루를 시작하는 뉴스와 인사이트 브리핑",
    appUrl: "https://morning-brief-aespa.vercel.app",
    repoUrl: "https://github.com/typ0307/morning-brief",
    accent: "cyan",
  },
  {
    name: "sns-downloader",
    label: "SNS Downloader",
    category: "STREAMLIT",
    index: "02",
    description: "소셜 콘텐츠를 간편하게 저장하는 도구",
    appUrl: "https://sns-downloader.streamlit.app",
    repoUrl: "https://github.com/typ0307/sns-downloader",
    accent: "violet",
  },
  {
    name: "weverse-viewer",
    label: "Weverse Viewer",
    category: "STREAMLIT",
    index: "03",
    description: "Weverse 콘텐츠를 한눈에 확인하는 뷰어",
    appUrl: "https://weverse-viewer.streamlit.app/",
    repoUrl: "https://github.com/typ0307/weverse-viewer",
    accent: "pink",
  },
  {
    name: "poca-master",
    label: "Poca Master",
    category: "VERCEL",
    index: "04",
    description: "포토카드 컬렉션을 정리하고 관리하는 공간",
    appUrl: "https://poca-master.vercel.app",
    repoUrl: "https://github.com/typ0307/poca-master",
    accent: "lime",
  },
  {
    name: "poca-viewer",
    label: "Poca Viewer",
    category: "STREAMLIT",
    index: "05",
    description: "포토카드 이미지를 빠르게 탐색하는 뷰어",
    appUrl: "https://poca-viewer.streamlit.app/",
    repoUrl: "https://github.com/typ0307/poca-viewer",
    accent: "cyan",
  },
  {
    name: "babplus-viewer",
    label: "Babplus Viewer",
    category: "STREAMLIT",
    index: "06",
    description: "Babplus 콘텐츠를 모아 보는 프로젝트 뷰어",
    appUrl: "https://babplus-viewer.streamlit.app/",
    repoUrl: "https://github.com/typ0307/babplus-viewer",
    accent: "violet",
  },
];

const filters = ["ALL", "STREAMLIT", "VERCEL"];

// 하단 LINKS 배너 — 새 링크는 여기에 객체만 추가하면 됩니다.
const bannerLinks = [
  {
    label: "VERCEL",
    sub: "DEPLOY · vercel.com",
    href: "https://vercel.com",
  },
  {
    label: "STREAMLIT",
    sub: "DATA APPS · streamlit.io",
    href: "https://share.streamlit.io",
  },
  {
    label: "SUPABASE",
    sub: "DATABASE · supabase.com",
    href: "https://supabase.com/",
  },
  {
    label: "NHOST",
    sub: "BACKEND · nhost.io",
    href: "https://nhost.io/",
  },
];

function Sparkles({ count = 5, className = "kv-sparkles" }) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function Starfield() {
  // 로드할 때마다 별의 위치·크기·밝기·반짝임 주기를 무작위로 생성
  const stars = useMemo(
    () =>
      Array.from({ length: 55 }, (_, index) => ({
        id: index,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 8 + Math.random() * 22,
        delay: Math.random() * 3,
        duration: 1.4 + Math.random() * 2.2,
        opacity: 0.2 + Math.random() * 0.7,
      })),
    []
  );

  return (
    <div className="starbg" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

function ProjectRow({ project }) {
  return (
    <li className={`news-item accent-${project.accent}`}>
      <div className="news-inner">
        <div className="news-meta">
          <span className="news-label">{project.category}</span>
          <span className="news-date">
            {project.index} <span>/ 2026</span>
          </span>
        </div>
        <div className="news-title-row">
          <a
            className="news-title"
            href={project.appUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.label}
          </a>
          <a
            className="news-slug"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.label} GitHub 저장소 열기`}
          >
            /{project.name}
          </a>
        </div>
        <p className="news-desc">{project.description}</p>
      </div>
    </li>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "ALL" || project.category === activeFilter;
      const matchesQuery =
        !normalizedQuery ||
        `${project.name} ${project.label} ${project.description}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="site-shell">
      <Starfield />

      <div className="wrapper">
        <main>
          {/* 메인 비주얼 */}
          <section className="main-kv" aria-labelledby="kv-title">
            <Sparkles count={5} />
            <p className="kv-eyebrow">DIGITAL PROJECT ARCHIVE / 2026</p>
            <h2 className="kv-title" id="kv-title">
              KWANGYA <span>PORTAL</span>
            </h2>
            <p className="kv-description">
              에스파 세계관에서 영감을 받은 작은 도구 여섯 개를 한 곳에
              모았습니다.
              <br />
              원하는 프로젝트를 골라 바로 이동해 보세요.
            </p>
          </section>

          {/* 바로가기 버튼 영역 */}
          <section className="top-login-area" aria-label="주요 바로가기">
            <div className="login-form">
              <a className="big-btn big-btn-primary" href="#projects">
                OPEN PROJECTS ▷
              </a>
              <span className="big-btn-note">
                {projects.length}개의 프로젝트 둘러보기
              </span>
            </div>
            <div className="login-form">
              <a
                className="big-btn big-btn-secondary"
                href="https://github.com/typ0307"
                target="_blank"
                rel="noreferrer"
              >
                VISIT GITHUB ▷
              </a>
              <span className="big-btn-note">코드 저장소 구경하기</span>
            </div>
          </section>

          {/* INFORMATION */}
          <section
            className="main-info"
            id="projects"
            aria-labelledby="info-title"
          >
            <div className="main-info-frame">
              <div className="info-head">
                <h3 id="info-title">
                  <span>INFORMATION</span>
                </h3>
                <p className="info-count">
                  ACCESS POINTS /{" "}
                  {String(visibleProjects.length).padStart(2, "0")} OF{" "}
                  {String(projects.length).padStart(2, "0")}
                </p>
              </div>

              <div className="info-toolbar">
                <div
                  className="filter-group"
                  role="group"
                  aria-label="프로젝트 플랫폼 필터"
                >
                  {filters.map((filter) => (
                    <button
                      className={
                        activeFilter === filter
                          ? "filter-button active"
                          : "filter-button"
                      }
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <label className="search-box">
                  <span aria-hidden="true">⌕</span>
                  <span className="sr-only">프로젝트 검색</span>
                  <input
                    type="search"
                    placeholder="SEARCH PROJECT"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </label>
              </div>

              {visibleProjects.length > 0 ? (
                <ul className="news-list">
                  {visibleProjects.map((project) => (
                    <ProjectRow key={project.name} project={project} />
                  ))}
                </ul>
              ) : (
                <div className="empty-state">
                  <span>NO MATCH</span>
                  <p>
                    일치하는 프로젝트가 없습니다. 필터나 검색어를 바꿔 보세요.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* 링크 배너 */}
          <section className="banner-section" id="links" aria-label="관련 링크">
            <div className="banner-grid">
              {bannerLinks.map((banner) => (
                <a
                  className="banner-card"
                  key={banner.href + banner.label}
                  href={banner.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="banner-label">{banner.label}</span>
                  <span className="banner-sub">{banner.sub}</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* 푸터 */}
        <footer className="site-footer" id="footer">
          <p className="footer-about">
            에스파 세계관에서 영감을 받은 개인 프로젝트 모음 — KWANGYA PORTAL
          </p>
          <p className="footer-copy">© 2026 KWANGYA PORTAL</p>
        </footer>
      </div>
    </div>
  );
}
