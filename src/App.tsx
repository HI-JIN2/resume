import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AboutMe } from "./components/about-me";
import { LastUpdatedAt } from "./components/last-updated-at";
import { Layout } from "./components/Layout";
import { OpenSourceProject } from "./components/open-source-project";
import { SimpleList } from "./components/simple-list";
import { Presentation } from "./components/presentation";
import { PersonalProject } from "./components/personal-project";
import { Profile } from "./components/Profile";
import { ResumeSwitcher } from "./components/resume-switcher";
import { WorkExperience } from "./components/work-experience";
import { ResumeProvider } from "./context/resume-context";

function ResumeContent() {
  return (
    <Layout>
      <ResumeSwitcher />
      <Profile />
      <AboutMe />
      <WorkExperience />
      <PersonalProject />
      <SimpleList title="Awards" sectionTitle="Award" sectionId="award" />
      <OpenSourceProject title="Activities" sectionTitle="Experience" />
      <Presentation />
      <SimpleList title="Interview" sectionId="interview" />
      <SimpleList title="Education" sectionId="education" />
      <SimpleList title="Certificates" sectionId="certificates" />
      <LastUpdatedAt />
    </Layout>
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
