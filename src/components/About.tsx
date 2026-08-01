"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./About.module.css";

const stats = [
  { value: "3.86", label: "GPA / 4.00" },
  { value: "8+", label: "Certifications" },
  { value: "100+", label: "Students Guided" },
  { value: "2+", label: "Years Experience" },
];

export default function About() {
  const heroReveal = useScrollReveal();
  const statsReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="section">
      <span className="sectionLabel">About</span>

      <div
        ref={heroReveal.ref}
        className={`${styles.hero} reveal ${heroReveal.isVisible ? "visible" : ""}`}
      >
        {/* Left: Bio content */}
        <div className={styles.content}>
          <h1 className={styles.name}>
            Alman Kamal Mahdi
          </h1>
          <p className={styles.role}>Computer Engineering Graduate</p>

          <div className={styles.bio}>
            <p className={styles.bioText}>
              I am a Computer Engineering graduate from Diponegoro University
              with a strong foundation in backend development, machine learning,
              and networking.
            </p>
            <p className={styles.bioText}>
              My thesis focused on the comparative analysis of rule-based models
              and Generative AI (Gemini) for an IoT-based toddler nutritional
              status monitoring system. I have hands-on experience as a Backend
              Developer Intern and as a Teaching Assistant guiding 100+ students
              in computer networking labs.
            </p>
            <p className={styles.bioText}>
              Passionate about building practical tech solutions and
              continuously learning. Currently available for new opportunities.
            </p>
          </div>

          <div className={styles.cta}>
            <a href="#contact" className={styles.ctaButton}>
              Contact
            </a>

          </div>
        </div>

        {/* Right: Photo */}
        <div className={styles.photoWrap}>
          <Image
            src="/photoprofile.png"
            alt="Alman Kamal Mahdi"
            width={400}
            height={480}
            className={styles.photo}
            priority
          />
          <span className={styles.photoCaption}>Sragen, 2026</span>
        </div>
      </div>

      <div
        ref={statsReveal.ref}
        className={`${styles.stats} reveal ${statsReveal.isVisible ? "visible" : ""}`}
      >
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
