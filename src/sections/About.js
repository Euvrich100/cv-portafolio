import React from 'react';
import './About.css';

const cards = [
  { label: 'Nombre completo', value: 'Euvrich Didhier Alvarado Espinoza' },
  { label: 'Carrera', value: 'Ingeniería de Sistemas' },
  { label: 'Especialización', value: 'Software · Redes · IA' },
  { label: 'Disponibilidad', value: 'Proyectos & Prácticas 2026' },
  { label: 'Idiomas', value: 'Español (nativo) · Inglés (técnico)' },
  { label: 'Ubicación', value: 'Perú — Disponible remoto' },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">01 — Sobre mí</div>
        <h2 className="section-title">
          Quién<br /><span>soy yo.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text fade-in">
          <p>
            Soy <strong>Euvrich Didhier Alvarado Espinoza</strong>, estudiante de Ingeniería
            de Sistemas con una profunda pasión por la tecnología, el desarrollo de software
            y la resolución de problemas complejos a través de herramientas digitales.
          </p>
          <p>
            Desde temprana edad me atrajo el mundo de la computación: cómo las máquinas
            procesan información, cómo los sistemas se comunican entre sí y cómo el código
            puede transformar una idea abstracta en una solución real y funcional que impacta
            a las personas.
          </p>
          <p>
            Mi objetivo es convertirme en un ingeniero completo: dominando tanto el desarrollo
            de software como la infraestructura, las redes y la inteligencia artificial.
            Creo que la tecnología tiene el poder de transformar sociedades y quiero ser
            parte activa de ese cambio desde el primer día.
          </p>
          <p>
            Fuera del ámbito académico, me dedico a explorar nuevas tecnologías, desarrollar
            proyectos personales, contribuir a comunidades de desarrollo open source y leer
            sobre las últimas tendencias en arquitectura de sistemas y cloud computing.
          </p>
          <p>
            Tengo una visión clara: construir sistemas robustos, escalables y eficientes
            que resuelvan problemas reales. Cada proyecto que emprendo es una oportunidad
            de aprender, mejorar y dejar una huella significativa en el mundo digital.
          </p>
        </div>

        <div className="about-cards fade-in fade-in-delay-1">
          {cards.map((card) => (
            <div className="about-card" key={card.label}>
              <div className="about-card-label">{card.label}</div>
              <div className="about-card-value">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
