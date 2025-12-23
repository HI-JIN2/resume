import { AboutMe } from "./components/about-me";
import { LastUpdatedAt } from "./components/last-updated-at";
import { Layout } from "./components/Layout";
import { OpenSourceProject } from "./components/open-source-project";
import { Presentation } from "./components/presentation";
import { Project } from "./components/project";
import { Profile } from "./components/Profile";
import { WorkExperience } from "./components/work-experience";
import { ResumeProvider } from "./context/resume-context";

function App() {
  return (
    <ResumeProvider>
      <Layout>
        <Profile />
        <AboutMe />
        <WorkExperience />
        <Project />
        <Presentation />
        <OpenSourceProject />
        <LastUpdatedAt />
      </Layout>
    </ResumeProvider>
  );
}

export default App;
