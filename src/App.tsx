import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AboutMe } from "./components/about-me";
import { LastUpdatedAt } from "./components/last-updated-at";
import { Layout } from "./components/Layout";
import { OpenSourceProject } from "./components/open-source-project";
import { SimpleList } from "./components/simple-list";
import { Presentation } from "./components/presentation";
import { PersonalProject } from "./components/personal-project";
import { Profile } from "./components/Profile";
import { WorkExperience } from "./components/work-experience";
import { ResumeProvider } from "./context/resume-context";

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // trailing slash 제거
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      const pathWithoutSlash = location.pathname.slice(0, -1);
      navigate(pathWithoutSlash + location.search + location.hash, { replace: true });
      return;
    }
    
    // 404.html에서 sessionStorage에 저장한 경로 복원
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      // trailing slash 제거
      const normalizedPath = redirectPath.endsWith('/') && redirectPath !== '/' 
        ? redirectPath.slice(0, -1) 
        : redirectPath;
      // 경로가 현재 경로와 다를 때만 리다이렉트
      if (location.pathname + location.search + location.hash !== normalizedPath) {
        navigate(normalizedPath, { replace: true });
      }
    }
  }, [navigate, location]);
  
  return null;
}

function ResumeContent() {
  return (
    <>
      <RedirectHandler />
      <Layout>
        <Profile />
        <AboutMe />
        <WorkExperience />
        <PersonalProject />
        <SimpleList title="Awards" sectionTitle="Award" sectionId="award" />
        <OpenSourceProject title="Community" sectionTitle="Community" />
        <Presentation />
        <SimpleList title="Interview" sectionId="interview" />
        <SimpleList title="Education" sectionId="education" />
        <SimpleList title="Certificates" sectionId="certificates" />
        <LastUpdatedAt />
      </Layout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/resume">
      <Routes>
        <Route
          path="/"
          element={
            <ResumeProvider>
              <ResumeContent />
            </ResumeProvider>
          }
        />
        <Route
          path="/android"
          element={
            <ResumeProvider>
              <ResumeContent />
            </ResumeProvider>
          }
        />
        <Route
          path="/general"
          element={
            <ResumeProvider>
              <ResumeContent />
            </ResumeProvider>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
