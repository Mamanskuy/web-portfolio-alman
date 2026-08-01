"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Education.module.css";

interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string[];
}

const educationEntries: EducationEntry[] = [
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    school: "Diponegoro University",
    location: "Semarang, Indonesia",
    period: "2022 — 2026",
    details: [
      "GPA: 3.86 / 4.00",
      "Thesis: Comparative Analysis of Rule-Based Models and Generative AI (Gemini) for an IoT-Based Toddler Nutritional Status Monitoring System",
      "Relevant Coursework: Artificial Intelligence, Switching Routing and Wireless Networks, Object-Oriented Programming",
    ],
  },
  {
    degree: "Computer & Network Engineering",
    school: "SMKN 2 Sragen",
    location: "Sragen, Indonesia",
    period: "— 2022",
    details: [
      "Completed vocational education in Computer & Network Engineering",
    ],
  },
];

export default function Education() {
  const headerReveal = useScrollReveal();
  const listReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="education" className="section">
      <div
        ref={headerReveal.ref}
        className={`reveal ${headerReveal.isVisible ? "visible" : ""}`}
      >
        <span className="sectionLabel">Education</span>
      </div>

      <div
        ref={listReveal.ref}
        className={`${styles.list} reveal ${listReveal.isVisible ? "visible" : ""}`}
      >
        {educationEntries.map((entry) => (
          <div key={entry.school} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardInfo}>
                <h3 className={styles.degree}>{entry.degree}</h3>
                <span className={styles.school}>{entry.school}</span>
                <span className={styles.location}>{entry.location}</span>
              </div>
              <span className={styles.period}>{entry.period}</span>
            </div>
            <ul className={styles.details}>
              {entry.details.map((detail) => (
                <li key={detail} className={styles.detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
