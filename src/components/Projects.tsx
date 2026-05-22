import FadeInSection from "./FadeInSection";
import { BsFillFolderFill } from "react-icons/bs";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "ArcAgileMgmt (Healthcare E-Commerce)",
    desc: "Healthcare e-commerce for medicine sales, inventory, and customer records.",
    techStack: "Next.js",
    link: "#",
  },
  {
    title: "AMS (Ed-Tech Platform)",
    desc: "Ed-Tech platform for teachers, students, and orgs with content and assignments.",
    techStack: "Next.js",
    link: "#",
  },
  {
    title: "Smartnagar",
    desc: "Municipal survey platform with charts, news, complaints, and e-resources.",
    techStack: "Next.js",
    link: "#",
  },
  {
    title: "Social Media Application",
    desc: "Crowdfunding social app with engaging UX and Stripe payment integration.",
    techStack: "Next.js",
    link: "#",
  },
  {
    title: "HMIS",
    desc: "Health data system with survey forms, charts, and reporting tables.",
    techStack: "Next.js",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
      </FadeInSection>

      <div className="project-container">
        <ul className="projects-grid">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <BsFillFolderFill
                      style={{
                        fontSize: 35,
                      }}
                    />
                  </div>
                  <span className="external-links" />
                </div>

                <div className="card-title">{project.title}</div>
                <div className="card-desc">{project.desc}</div>
                <div className="card-tech">{project.techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
}
