import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_RESUME_TYPE,
  ResumeContent,
  ResumeType,
  getResumeContent,
} from "../data";

type ResumeContextValue = {
  type: ResumeType;
  data: ResumeContent;
  setType: (type: ResumeType) => void;
};

const ResumeContext = createContext<ResumeContextValue | null>(null);

const resolveInitialType = (): ResumeType => {
  if (typeof window === "undefined") {
    return DEFAULT_RESUME_TYPE;
  }

  const [, firstSegment] = window.location.pathname.split("/");
  if (firstSegment === "general") {
    return "general";
  }
  return "android";
};

const syncPath = (type: ResumeType) => {
  if (typeof window === "undefined") {
    return;
  }

  const targetPath = type === "general" ? "/general" : "/android";
  if (window.location.pathname !== targetPath) {
    window.history.replaceState({}, "", targetPath);
  }
};

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<ResumeType>(() => resolveInitialType());
  const data = useMemo(() => getResumeContent(type), [type]);

  useEffect(() => {
    syncPath(type);
  }, [type]);

  return (
    <ResumeContext.Provider value={{ type, data, setType }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const ctx = useContext(ResumeContext);

  if (!ctx) {
    throw new Error("useResume는 ResumeProvider 내에서 사용되어야 합니다.");
  }

  return ctx;
};

export const useResumeData = () => {
  const { data } = useResume();
  return data;
};
