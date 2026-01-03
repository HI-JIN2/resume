import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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

const resolveInitialType = (searchParams: URLSearchParams): ResumeType => {
  // 쿼리 파라미터에서 General=true 확인
  if (searchParams.get("General") === "true") {
    return "general";
  }
  // 기본값은 android
  return DEFAULT_RESUME_TYPE;
};

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [type, setType] = useState<ResumeType>(() =>
    resolveInitialType(searchParams)
  );
  const data = useMemo(() => getResumeContent(type), [type]);

  // 쿼리 파라미터 변경 시 타입 업데이트
  useEffect(() => {
    const newType = resolveInitialType(searchParams);
    if (newType !== type) {
      setType(newType);
    }
  }, [searchParams, type]);

  // 타입 변경 시 쿼리 파라미터 업데이트
  const handleSetType = (newType: ResumeType) => {
    setType(newType);
    const newSearchParams = new URLSearchParams(searchParams);
    if (newType === "general") {
      newSearchParams.set("General", "true");
    } else {
      newSearchParams.delete("General");
    }
    navigate({ pathname: "/", search: newSearchParams.toString() }, { replace: true });
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
