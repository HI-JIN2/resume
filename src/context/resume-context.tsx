import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const resolveInitialType = (pathname: string): ResumeType => {
  // basename이 /resume이므로 실제 pathname은 /, /android, /general
  if (pathname === "/general" || pathname === "/resume/general") {
    return "general";
  }
  // /, /android, /resume, /resume/android는 모두 android로 처리
  return DEFAULT_RESUME_TYPE;
};

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [type, setType] = useState<ResumeType>(() =>
    resolveInitialType(location.pathname)
  );
  const data = useMemo(() => getResumeContent(type), [type]);

  // 경로 변경 시 타입 업데이트
  useEffect(() => {
    const newType = resolveInitialType(location.pathname);
    if (newType !== type) {
      setType(newType);
    }
  }, [location.pathname, type]);

  // 타입 변경 시 경로 업데이트
  const handleSetType = (newType: ResumeType) => {
    setType(newType);
    if (newType === "general") {
      navigate("/general", { replace: true });
    } else {
      // android는 /로 이동 (기본값, basename이 /resume이므로 실제로는 /resume)
      navigate("/", { replace: true });
    }
  };

  return (
    <ResumeContext.Provider value={{ type, data, setType: handleSetType }}>
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
