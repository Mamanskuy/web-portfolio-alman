"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Experience.module.css";

interface ExperienceEntry {
  title: string;
  org: string;
  period: string;
  description: string;
}

const workEntries: ExperienceEntry[] = [
  {
    title: "Backend Developer Intern",
    org: "Dinas Arsip dan Perpustakaan Kota Semarang",
    period: "Jul 2024 — Aug 2024",
    description:
      "Developed backend components of an internal web application for digitizing, documenting, and managing city archive data using PHP, Laravel, MySQL, HTML, CSS, and JavaScript. Built a CRUD system with an Excel export feature. Collaborated within a team as the second backend developer.",
  },
  {
    title: "Teaching Assistant — Intro to Computer Networks",
    org: "Diponegoro University",
    period: "2024 — 2025",
    description:
      "Guided lab sessions, administered quizzes and assignments, and led post-lab review sessions for more than 100 students across two semesters. Designed and prepared final lab project assignments.",
  },
  {
    title: "Teaching Assistant — Switching, Routing & Wireless",
    org: "Diponegoro University",
    period: "2024 — 2025",
    description:
      "Guided lab sessions, administered quizzes and assignments, and led post-lab review sessions for more than 100 students across two semesters.",
  },
  {
    title: "Program Coordinator — Community Service (KKN)",
    org: "Sambirejo, Sragen",
    period: "Jun 2025 — Jul 2025",
    description:
      "Coordinated a computer literacy training program as one of the program's main initiatives, training approximately 8 village officials and more than 20 farmer groups.",
  },
];

const orgEntries: ExperienceEntry[] = [
  {
    title: "Vice Chairperson",
    org: "Computer Engineering Research Club (CERC), Undip",
    period: "2024",
    description:
      "Assisted the chairperson in executing organizational work programs. Delivered orientation talks introducing the organization to incoming students. Led technical teaching sessions during organization gatherings.",
  },
  {
    title: "Vice Chairperson, HR Division",
    org: "Keluarga Mahasiswa Sragen (KMS), Undip",
    period: "2024",
    description:
      "Assisted the chairperson in executing organizational work programs.",
  },
  {
    title: "Expert Staff, Media Division",
    org: "Al-Muharik, Computer Engineering Student Association, Undip",
    period: "2024",
    description:
      "Produced media materials, including designs and social media content.",
  },
  {
    title: "Media Division",
    org: "The Ace (Computer Engineering Dept. Anniversary Event)",
    period: "2024",
    description:
      "Produced social media content for the event.",
  },
];

function ExperienceBlock({
  id,
  label,
  entries,
}: {
  id: string;
  label: string;
  entries: ExperienceEntry[];
}) {
  const reveal = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      id={id}
      ref={reveal.ref}
      className={`${styles.expBlock} reveal ${reveal.isVisible ? "visible" : ""}`}
    >
      <span className={styles.blockLabel}>{label}</span>
      <div className={styles.table}>
        {entries.map((entry) => (
          <div key={`${entry.title}-${entry.org}`} className={styles.row}>
            <div className={styles.info}>
              <span className={styles.title}>{entry.title}</span>
              <span className={styles.org}>{entry.org}</span>
              <p className={styles.description}>{entry.description}</p>
            </div>
            <span className={styles.period}>{entry.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const headerReveal = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div
        ref={headerReveal.ref}
        className={`reveal ${headerReveal.isVisible ? "visible" : ""}`}
      >
        <span className="sectionLabel">Experience</span>
      </div>

      <ExperienceBlock id="experience-work" label="Work" entries={workEntries} />
      <ExperienceBlock id="experience-org" label="Leadership & Activities" entries={orgEntries} />
    </section>
  );
}
