import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Lenguajes de programación',
    skills: [
      { name: 'Python', pct: 85 },
      { name: 'JavaScript / TypeScript', pct: 75 },
      { name: 'C / C++', pct: 70 },
      { name: 'SQL', pct: 82 },
      { name: 'Bash / Shell Script', pct: 78 },
    ],
  },
  {
    category: 'DevOps & Infraestructura',
    skills: [
      { name: 'Docker & Docker Compose', pct: 80 },
      { name: 'Linux (Ubuntu/Debian)', pct: 84 },
      { name: 'Git & GitHub', pct: 90 },
      { name: 'Redes TCP/IP', pct: 74 },
      { name: 'Cisco IOS', pct: 68 },
    ],
  },
  {
    category: 'Frameworks & Backend',
    skills: [
      { name: 'React', pct: 72 },
      { name: 'Node.js / Express', pct: 68 },
      { name: 'FastAPI / Flask', pct: 76 },
      { name: 'REST API Design', pct: 80 },
    ],
  },
  {
    category: 'Bases de datos',
    skills: [
      { name: 'MySQL / PostgreSQL', pct: 82 },
      { name: 'MongoDB', pct: 65 },
      { name: 'Redis', pct: 58 },
      { name: 'ORM (SQLAlchemy)', pct: 70 },
    ],
  },
];

function SkillBar({ name, pct, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section-wrapper" ref={ref}>
      <div className="fade-in">
        <div className="section-label">02 — Habilidades</div>
        <h2 className="section-title">
          Stack<br /><span>técnico.</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group fade-in" key={group.category}>
            <div className="skill-cat">{group.category}</div>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} animate={animate} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
