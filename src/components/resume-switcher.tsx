import { ResumeType } from "../data";
import { useResume } from "../context/resume-context";

const OPTIONS: { type: ResumeType; label: string; description: string }[] = [
  {
    type: "android",
    label: "Android",
    description: "모바일 · 임베디드 포지션",
  },
  {
    type: "general",
    label: "General",
    description: "제너럴리스트 · 백오피스 포지션",
  },
];

export const ResumeSwitcher = () => {
  const { type, setType } = useResume();

  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {OPTIONS.map((option) => {
        const isActive = option.type === type;

        return (
          <button
            key={option.type}
            type="button"
            onClick={() => setType(option.type)}
            aria-pressed={isActive}
            className={`flex flex-col rounded-2xl border px-4 py-3 text-left transition ${
              isActive
                ? "border-black bg-black text-white"
                : "border-black/30 bg-white text-black"
            }`}
          >
            <span className="text-sm font-semibold">{option.label}</span>
            <span className="text-xs opacity-80">{option.description}</span>
          </button>
        );
      })}
    </div>
  );
};
