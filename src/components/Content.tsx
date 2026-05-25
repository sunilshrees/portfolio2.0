import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Credits from "./Credits";

export default function Content() {
  return (
    <div className="content">
      <Intro />
      <About />
      <Projects />
      <Credits />
    </div>
  );
}
