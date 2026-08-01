"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Skills.module.css";

interface SkillGroup {
  name: string;
  items: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

const skillGroups: SkillGroup[] = [
  {
    name: "Programming",
    items: ["Python", "PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Frameworks & DB",
    items: ["Laravel", "MySQL", "Machine Learning"],
  },
  {
    name: "Tools & Productivity",
    items: ["Microsoft Word", "Excel", "PowerPoint", "Canva"],
  },
  {
    name: "Language",
    items: ["English (fluent reading; basic conversational)"],
  },
];

const certifications: Certification[] = [
  {
    name: "Network Security",
    issuer: "Cisco Networking Academy",
    year: "2026",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    name: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
  {
    name: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
  {
    name: "Database Design",
    issuer: "Oracle Academy",
    year: "2024",
  },
  {
    name: "Database Foundations",
    issuer: "Oracle Academy",
    year: "2024",
  },
  {
    name: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco Networking Academy",
    year: "2023",
  },
  {
    name: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    year: "2023",
  },
];

export default function Skills() {
  const headerReveal = useScrollReveal();
  const skillsReveal = useScrollReveal({ threshold: 0.1 });
  const certReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="section">
      <div
        ref={headerReveal.ref}
        className={`reveal ${headerReveal.isVisible ? "visible" : ""}`}
      >
        <span className="sectionLabel">Skills</span>
      </div>

      <div
        ref={skillsReveal.ref}
        className={`${styles.skillGroups} revealStagger ${skillsReveal.isVisible ? "visible" : ""}`}
      >
        {skillGroups.map((group) => (
          <div key={group.name} className={styles.group}>
            <span className={styles.groupName}>{group.name}</span>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        ref={certReveal.ref}
        className={`reveal ${certReveal.isVisible ? "visible" : ""}`}
      >
        <span className={styles.certLabel}>Certifications</span>
        <div className={styles.certTable}>
          {certifications.map((cert) => (
            <div key={cert.name} className={styles.certRow}>
              <span className={styles.certName}>{cert.name}</span>
              <span className={styles.certIssuer}>{cert.issuer}</span>
              <span className={styles.certYear}>{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
