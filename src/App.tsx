import Profile from "./components/profile/Profile";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Certificate from "./components/certificate/Certificate";
import Skills from "./components/skills/Skills";
// ...

function App() {
  return (
    <main className="bg-white min-h-screen">
      <Profile />
      <Experience />
      <Education />
      <Certificate />
      <Skills />
    </main>
  );
}

export default App;