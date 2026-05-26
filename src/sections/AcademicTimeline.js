import React from 'react';
import './AcademicTimeline.css';

const milestones = [
  {
    year: '2019',
    title: 'Secundaria completada',
    sub: 'Graduación con mención en Ciencias. Primer contacto con algoritmos y lógica computacional.',
  },
  {
    year: '2020',
    title: 'Pre-universitario',
    sub: 'Preparación académica. Matemáticas avanzadas, física y primer acercamiento a la programación autodidacta.',
  },
  {
    year: '2021',
    title: 'Inicio Universidad',
    sub: 'Ingeniería de Sistemas. C++, algoritmos, matemática discreta y fundamentos de redes.',
  },
  {
    year: '2022',
    title: 'Redes & Bases de Datos',
    sub: 'Laboratorios Cisco, SQL avanzado, estructuras de datos. Primer certificado Platzi.',
  },
  {
    year: '2023',
    title: 'Proyectos & Certs',
    sub: 'Sistema de inventario, certificaciones Cisco CCNA y Linux Foundation. JavaScript y React.',
  },
  {
    year: '2024',
    title: 'IA & Cloud',
    sub: 'Machine Learning (Coursera), Azure AZ-900, Docker. Investigación con TensorFlow en universidad.',
  },
  {
    year: '2026',
    title: 'Portafolio & Egreso',
    sub: 'CV dockerizado, proyecto final. Preparación para mercado laboral y prácticas profesionales.',
  },
];

const logros = [
  { icon: '★', text: 'Mejor proyecto — Laboratorio de Redes 2023' },
  { icon: '★', text: 'Certificación CCNA completada con 92% de score' },
  { icon: '★', text: 'Reconocimiento académico por investigación en IA 2024' },
  { icon: '★', text: '+10 cursos completados en plataformas internacionales' },
  { icon: '★', text: 'Proyectos open source con +50 commits en GitHub' },
];

export default function AcademicTimeline() {
  return (
    <section id="timeline" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">07 — Timeline académico</div>
        <h2 className="section-title">
          Mi<br /><span>recorrido.</span>
        </h2>
      </div>

      <div className="academic-timeline fade-in">
        {milestones.map((m, i) => (
          <div className={`academic-item${i === milestones.length - 1 ? ' current' : ''}`} key={m.year}>
            <div className="academic-year">{m.year}</div>
            <div className="academic-title">{m.title}</div>
            <div className="academic-sub">{m.sub}</div>
            {i === milestones.length - 1 && (
              <div className="current-badge">● ACTUAL</div>
            )}
          </div>
        ))}
      </div>

      <div className="logros-section fade-in">
        <div className="logros-label">Logros destacados</div>
        <div className="logros-grid">
          {logros.map((l, i) => (
            <div className="logro-item" key={i}>
              <span className="logro-icon">{l.icon}</span>
              <span className="logro-text">{l.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
