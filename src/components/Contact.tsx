"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Contact.module.css";

const links = [
  { label: "GitHub", href: "https://www.github.com/Mamanskuy", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/almankamalmahdi", external: true },
  { label: "Send Email", href: "mailto:almankm317@gmail.com", external: false },
];

export default function Contact() {
  const reveal = useScrollReveal();

  return (
    <section id="contact" className="section">
      <div
        ref={reveal.ref}
        className={`${styles.block} reveal ${reveal.isVisible ? "visible" : ""}`}
      >
        <span className="sectionLabel">Contact</span>

        <h2 className={styles.headline}>
          Let&apos;s work
          <br />
          <span className={styles.headlineAccent}>together.</span>
        </h2>

        <p className={styles.description}>
          I&apos;m currently available for new opportunities. Whether you have a
          project in mind, need a backend developer, or just want to connect —
          feel free to reach out. Based in Sragen, Indonesia (UTC+7).
        </p>

        <p className={styles.description}>
          📞 +62 822-4165-1339 &nbsp;|&nbsp; 📧 almankm317@gmail.com
        </p>

        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
              <span className={styles.linkArrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
