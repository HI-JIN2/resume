import { useResumeData } from "../context/resume-context";

export const LastUpdatedAt = () => {
  const { lastUpdatedAt } = useResumeData();

  return (
    <div className="italic text-sm text-center mt-[120px]">
      Last updated: {lastUpdatedAt}
    </div>
  );
};
