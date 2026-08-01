"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Sidebar.module.css";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  {
    label: "Experience",
    href: "#experience",
    children: [
      { label: "Work", href: "#experience-work" },
      { label: "Organization", href: "#experience-org" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://www.github.com/Mamanskuy" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/almankamalmahdi" },
  { label: "Email", href: "mailto:almankm317@gmail.com" },
];

function getAllHrefs(items: NavItem[]): string[] {
  const result: string[] = [];
  for (const item of items) {
    result.push(item.href);
    if (item.children) {
      for (const child of item.children) {
        result.push(child.href);
      }
    }
  }
  return result;
}

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("#about");
  const isClickScrolling = useRef(false);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const checkIfAtBottom = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    return scrollTop + windowHeight >= docHeight - 50;
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setActiveSection(href);
    isClickScrolling.current = true;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const allHrefs = getAllHrefs(navItems);
    const sectionIds = allHrefs.map((h) => h.slice(1));
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }

        if (checkIfAtBottom()) {
          setActiveSection("#contact");
          return;
        }

        let closestId = "";
        let closestTop = Infinity;
        visibleSections.forEach((top, id) => {
          if (Math.abs(top) < Math.abs(closestTop)) {
            closestTop = top;
            closestId = id;
          }
        });

        if (closestId) {
          setActiveSection(`#${closestId}`);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (isClickScrolling.current) return;
      if (checkIfAtBottom()) {
        setActiveSection("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, [checkIfAtBottom]);

  const isParentActive = (item: NavItem) => {
    if (activeSection === item.href) return true;
    if (item.children) {
      return item.children.some((child) => activeSection === child.href);
    }
    return false;
  };

  return (
    <aside className={styles.sidebar}>
      {/* Brand */}
      <div className={styles.brand}>
        <span className={styles.brandName}>alman_</span>
        <span className={styles.brandTag}>portfolio</span>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <div key={item.href} className={styles.navGroup}>
            <a
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`${styles.navLink} ${isParentActive(item) ? styles.active : ""}`}
            >
              {item.label}
            </a>
            {item.children && (
              <div className={styles.navChildren}>
                {item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={() => handleNavClick(child.href)}
                    className={`${styles.navChildLink} ${activeSection === child.href ? styles.active : ""}`}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom section */}
      <div className={styles.bottom}>
        {/* Status */}
        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>Available for work</span>
        </div>

        {/* Meta */}
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Based</span>
            <span className={styles.metaValue}>Sragen, Indonesia</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Time</span>
            <span className={styles.metaValue}>UTC+7</span>
          </div>

          {/* Social links */}
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={styles.socialLink}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <span className={styles.copyright}>© 2026 alman_</span>
      </div>
    </aside>
  );
}
