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
const QUERY_KEY = "resume";

const resolveInitialType = (): ResumeType => {
  if (typeof window === "undefined") {
    return DEFAULT_RESUME_TYPE;
  }

  const params = new URLSearchParams(window.location.search);
  const value = params.get(QUERY_KEY);

  if (value === "android" || value === "general") {
    return value;
  }

  return DEFAULT_RESUME_TYPE;
};

const syncQueryParam = (type: ResumeType) => {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  params.set(QUERY_KEY, type);
  const query = params.toString();
  const suffix = query.length ? `?${query}` : "";

  window.history.replaceState({}, "", `${window.location.pathname}${suffix}`);
};

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<ResumeType>(() => resolveInitialType());
  const data = useMemo(() => getResumeContent(type), [type]);

  useEffect(() => {
    syncQueryParam(type);
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
