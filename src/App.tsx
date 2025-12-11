import { AboutMe } from "./components/about-me";
import { LastUpdatedAt } from "./components/last-updated-at";
import { Layout } from "./components/Layout";
import { OpenSourceProject } from "./components/open-source-project";
import { PersonalProject } from "./components/personal-project";
import { Profile } from "./components/Profile";
import { ResumeSwitcher } from "./components/resume-switcher";
import { WorkExperience } from "./components/work-experience";
import { ResumeProvider } from "./context/resume-context";

function App() {
  return (
    <ResumeProvider>
      <Layout>
        <ResumeSwitcher />
        <Profile />
        <AboutMe />
        <WorkExperience />
        <PersonalProject />
        <OpenSourceProject />
        <LastUpdatedAt />
      </Layout>
    </ResumeProvider>
  );
}

export default App;
