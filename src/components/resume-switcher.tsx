import { ResumeType } from "../data";
import { useResume } from "../context/resume-context";

const OPTIONS: { type: ResumeType; label: string; }[] = [
  {
    type: "android",
    label: "Android",
  },
  {
    type: "general",
    label: "General",
  },
];

export const ResumeSwitcher = () => {
  const { type, setType } = useResume();

  return (
    <div className="mb-12 flex flex-wrap gap-2">
      {OPTIONS.map((option) => {
        const isActive = option.type === type;

        return (
          <button
            key={option.type}
            type="button"
            onClick={() => setType(option.type)}
            aria-pressed={isActive}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive
                ? "bg-[#191f28] text-white"
                : "bg-[#f2f4f6] text-[#8b95a1] hover:bg-[#e5e8eb]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
