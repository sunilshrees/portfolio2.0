"use client";

import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import FadeInSection from "./FadeInSection";

function IntroTypewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    const segments = [
      { value: "hi, ", speed: 80 },
      { value: " sunil here. ", speed: 80, pauseBefore: 400 },
    ];
    let cancelled = false;
    let built = "";

    const run = async () => {
      for (const segment of segments) {
        if (cancelled) return;
        if (segment.pauseBefore) {
          await new Promise((resolve) => setTimeout(resolve, segment.pauseBefore));
        }
        for (const char of segment.value) {
          if (cancelled) return;
          built += char;
          setText(built);
          await new Promise((resolve) => setTimeout(resolve, segment.speed));
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {text}
      <span aria-hidden="true">_</span>
    </>
  );
}

export default function Intro() {
  return (
    <div id="intro">
      <span className="intro-title">
        <span className="intro-name">
          <IntroTypewriter />
        </span>
      </span>
      <FadeInSection>
        <div className="fade">
          <h3>I create stuff sometimes.</h3>
          <p>
            I&apos;m a Computer Engineer currently residing in Kathmandu, Nepal.
            I have great interest in frontend development, and I love to code,
            design and think.
          </p>
        </div>
      </FadeInSection>
      <a href="mailto:sunilshrees371@gmail.com" className="intro-contact">
        <FiMail className="icon" />
        Say hi !
      </a>
    </div>
  );
}
