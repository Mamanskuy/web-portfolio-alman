"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  year: string;
  summary: string;
  fullDescription: string;
  stack: string[];
  repo?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "StreamForge",
    year: "2024",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed tempor.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula risus vel arcu faucibus, at placerat nisl congue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    stack: ["Python", "Apache Kafka", "Apache Spark", "PostgreSQL", "Docker"],
    repo: "#",
    demo: "#",
  },
  {
    title: "PredictML API",
    year: "2024",
    summary:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    fullDescription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    stack: ["TensorFlow", "FastAPI", "Redis", "Kubernetes"],
    repo: "#",
  },
  {
    title: "DataVault ETL",
    year: "2023",
    summary:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
    fullDescription:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    stack: ["Python", "dbt", "BigQuery", "Airflow"],
    repo: "#",
    demo: "#",
  },
  {
    title: "AnomalyGuard",
    year: "2023",
    summary:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
    fullDescription:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    stack: ["PyTorch", "scikit-learn", "PostgreSQL", "Grafana"],
    repo: "#",
  },
  {
    title: "LogLens",
    year: "2022",
    summary:
      "Itaque earum rerum hic tenetur a sapiente delectus ut aut.",
    fullDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    stack: ["Elasticsearch", "Python", "Filebeat", "Kibana"],
    repo: "#",
  },
];

function ProjectItem({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
      <button
        className={styles.itemHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        type="button"
      >
        <div className={styles.itemLeft}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <div className={styles.itemRight}>
          <span className={styles.year}>{project.year}</span>
          <span className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}>
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      <div className={`${styles.detail} ${isOpen ? styles.detailOpen : ""}`}>
        <div className={styles.detailInner}>
          {/* Photo placeholder area */}
          <div className={styles.photoPlaceholder}>
            <span className={styles.photoLabel}>[ Project Screenshot ]</span>
          </div>

          <p className={styles.fullDescription}>{project.fullDescription}</p>

          <div className={styles.stack}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            {project.repo && (
              <a href={project.repo} className={styles.link}>
                Source ↗
              </a>
            )}
            {project.demo && (
              <a href={project.demo} className={styles.link}>
                Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerReveal = useScrollReveal();
  const listReveal = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="section">
      <div
        ref={headerReveal.ref}
        className={`reveal ${headerReveal.isVisible ? "visible" : ""}`}
      >
        <span className="sectionLabel">Projects</span>
      </div>

      <div
        ref={listReveal.ref}
        className={`${styles.list} reveal ${listReveal.isVisible ? "visible" : ""}`}
      >
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
