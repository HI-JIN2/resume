import { useResume } from "../context/resume-context";

export const ResumeSwitcher = () => {
  const { type, setType } = useResume();
  const isAndroid = type === "android";

  const toggleType = () => {
    setType(isAndroid ? "general" : "android");
  };

  return (
    <div className="absolute top-16 right-6 z-50">
      <button
        type="button"
        onClick={toggleType}
        aria-label={`Switch to ${isAndroid ? "General" : "Android"} resume`}
        aria-pressed={isAndroid}
        className="
          relative inline-flex h-7 w-12 items-center
          rounded-full
          !bg-[#FF6B35]
          transition-colors duration-200
          outline-none
          focus:outline-none
          active:outline-none
          focus-visible:outline-none
        "
      >
        <span
          className={`
            inline-block h-5 w-5
            rounded-full
            !bg-white
            shadow-sm
            transition-transform duration-200
            ${isAndroid ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </button>
    </div>
  );
};
