import Image from "next/image";
import FadeInSection from "./FadeInSection";
import profileImage from "@/assets/profile.jpg";

const tech_stack = [
  "React",
  "Next.js",
  "Cypress",
  "SEO",
  "Node.js",
  "NestJS",
  "SQL",
  "MongoDB",
  "Redis",
  "BullMQ",
] as const;

export default function About() {
  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>
              I am recently graduated with a Bachelor degree in
              <b> Computer Engineering</b>. After graduation, I&apos;m fully
              focused in Frontend Web Development and in upcoming days I&apos;m
              planning to go for FullStack Development.
            </p>
            Here are some technologies I have been working with:
            <ul className="tech-stack">
              {tech_stack.map((tech_item, i) => (
                <FadeInSection key={tech_item} delay={`${i + 1}00ms`}>
                  <li>{tech_item}</li>
                </FadeInSection>
              ))}
            </ul>
            <p>
              Also, I&apos;m interested in following the developments of
              science. I also play a lot of video games.
            </p>
          </div>
          <div className="about-image">
            <Image
              src={profileImage}
              alt="Sunil Shrees"
              width={300}
              height={300}
              sizes="(max-width: 768px) 280px, 300px"
              loading="lazy"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
