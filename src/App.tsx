import { AboutMe } from "./components/about-me";
import { LastUpdatedAt } from "./components/last-updated-at";
import { Layout } from "./components/Layout";
import { OpenSourceProject } from "./components/open-source-project";
import { PersonalProject } from "./components/personal-project";
import { Profile } from "./components/Profile";
import { WorkExperience } from "./components/work-experience";

function App() {
  return (
    <Layout>
      <Profile />
      <AboutMe />
      <WorkExperience />
      <PersonalProject />
      <OpenSourceProject />
      <LastUpdatedAt />
    </Layout>
  );
}

export default App;
