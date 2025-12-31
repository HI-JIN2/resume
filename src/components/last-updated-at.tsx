import { useResumeData } from "../context/resume-context";

export const LastUpdatedAt = () => {
  const { lastUpdatedAt } = useResumeData();

  return (
    <div className="text-sm text-center mt-24 text-[#8b95a1]">
      Last updated: {lastUpdatedAt}
    </div>
  );
};
