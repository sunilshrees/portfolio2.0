import { FiInbox, FiGithub, FiLinkedin } from "react-icons/fi";
import FadeInRightSection from "./FadeInRightSection";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul>
          <FadeInRightSection delay="100ms">
            <li>
              <a href="#">/home</a>
            </li>
          </FadeInRightSection>

          <FadeInRightSection delay="200ms">
            <li>
              <a href="#about">/about</a>
            </li>
          </FadeInRightSection>

          <FadeInRightSection delay="300ms">
            <li>
              <a href="#projects">/projects</a>
            </li>
          </FadeInRightSection>
        </ul>

        <div className="sidebar-logos">
          <a
            href="mailto:sunilshrees371@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiInbox style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://github.com/sunilshrees"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub style={{ fontSize: 19 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/sunilshrees/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin style={{ fontSize: 21 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
