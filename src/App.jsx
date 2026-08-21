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

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="card-topline">
        <span className="project-index">{project.index}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="card-content">
        <h3>{project.label}</h3>
        <p className="project-slug">/{project.name}</p>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="card-actions">
        <a
          className="app-link"
          href={project.appUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>OPEN APP</span> <ArrowIcon />
        </a>
        <a
          className="repo-link"
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.label} GitHub 저장소 열기`}
        >
          GITHUB
        </a>
      </div>
    </article>
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
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="/" aria-label="KWANGYA PORTAL 홈으로 이동">
          <span className="brand-mark">T</span>
          <span>KWANGYA PORTAL</span>
          <span className="brand-divider">//</span>
          <span className="brand-muted">GATEWAY</span>
        </a>
        <div className="system-status" aria-label="시스템 상태 정상">
          <span className="status-dot" />
          <span>SYSTEM ONLINE</span>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> DIGITAL PROJECT ARCHIVE</p>
            <h1 id="hero-title">
              Enter the
              <span>next portal.</span>
            </h1>
            <p className="hero-description">
              KWANGYA PORTAL이 만든 작은 도구와 실험을 한 곳에 모았습니다.
              <br className="desktop-only" />
              필요한 프로젝트를 선택해 바로 접속해 보세요.
            </p>
          </div>
          <div className="hero-signal" aria-hidden="true">
            <div className="signal-ring ring-one" />
            <div className="signal-ring ring-two" />
            <div className="signal-core">T<span>03</span></div>
          </div>
        </section>

        <section className="project-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">ACCESS POINTS / 2026</p>
              <h2 id="projects-title">Projects</h2>
            </div>
            <span className="project-count">
              {String(visibleProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="project-toolbar">
            <div className="filter-group" role="group" aria-label="프로젝트 플랫폼 필터">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? "filter-button active" : "filter-button"}
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
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>NO SIGNAL</span>
              <p>검색 조건에 맞는 프로젝트가 없습니다.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 KWANGYA PORTAL</span>
        <span className="footer-line" />
        <span>MADE WITH CURIOSITY <span className="footer-heart">✦</span></span>
      </footer>
    </div>
  );
}
