import { useEffect, useState } from "react";

type Section = {
  id: string;
  title: string;
};

const SECTIONS: Section[] = [
  { id: "about", title: "About" },
  { id: "work-experience", title: "Work Experience" },
  { id: "side-project", title: "Side Project" },
  { id: "award", title: "Award" },
  { id: "experience", title: "Experience" },
  { id: "presentation", title: "Presentation" },
  { id: "interview", title: "Interview" },
  { id: "education", title: "Education" },
  { id: "certificates", title: "Certificates" },
];

export const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -60% 0%",
        threshold: 0,
      }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      SECTIONS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-48">
      <nav className="sticky top-24">
        <ul className="space-y-2">
          {SECTIONS.map(({ id, title }) => (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`text-sm transition-colors text-left w-full ${
                  activeId === id
                    ? "text-[#191f28] font-semibold"
                    : "text-[#8b95a1] hover:text-[#4e5968]"
                }`}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

