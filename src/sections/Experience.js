import React from 'react';
import './Experience.css';

const experiences = [
  {
    date: '2026 — Actual',
    title: 'Proyecto Final: CV Portafolio Dockerizado',
    org: 'Universidad — Ingeniería de Sistemas',
    desc: 'Desarrollo de sitio web portafolio profesional full-stack containerizado con Docker. Arquitectura moderna con React en frontend, FastAPI en backend y PostgreSQL como base de datos. Desplegado en producción con Docker Compose y CI/CD automático con GitHub Actions.',
    tags: ['React', 'Docker', 'FastAPI', 'PostgreSQL', 'GitHub Actions'],
  },
  {
    date: '2024',
    title: 'Investigación: Redes Neuronales Aplicadas',
    org: 'Laboratorio de Computación — Universidad',
    desc: 'Investigación y experimentación con modelos de aprendizaje automático usando Python y TensorFlow. Análisis de datasets reales, entrenamiento de modelos de clasificación de imágenes con CNN, evaluación de métricas de rendimiento y optimización de hiperparámetros.',
    tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
  },
  {
    date: '2024',
    title: 'Desarrollo de Dashboard de Monitoreo',
    org: 'Proyecto Personal',
    desc: 'Diseño e implementación de un dashboard en tiempo real para monitoreo de servidores Linux. Métricas de CPU, RAM, disco y red actualizadas via WebSockets. Almacenamiento histórico en InfluxDB y visualización con Grafana integrado.',
    tags: ['React', 'Python', 'WebSockets', 'InfluxDB', 'Linux'],
  },
  {
    date: '2023',
    title: 'Sistema de Gestión de Inventario',
    org: 'Proyecto Universitario — Bases de Datos II',
    desc: 'Diseño e implementación completa de un sistema de inventario con MySQL, Python y Flask. Modelado de base de datos relacional normalizada, consultas optimizadas con índices, reportes automatizados en PDF y panel administrativo con autenticación JWT.',
    tags: ['Python', 'Flask', 'MySQL', 'JWT', 'HTML/CSS'],
  },
  {
    date: '2023',
    title: 'Configuración Red Empresarial (Packet Tracer)',
    org: 'Laboratorio de Redes — Universidad',
    desc: 'Diseño y configuración de una red empresarial multi-sede completa usando Cisco Packet Tracer. VLANs segmentadas por departamento, routing dinámico OSPF, NAT/PAT, listas de control de acceso (ACLs), VPN site-to-site y monitoreo SNMP.',
    tags: ['Cisco IOS', 'OSPF', 'VLANs', 'NAT/PAT', 'VPN', 'SNMP'],
  },
  {
    date: '2022',
    title: 'Desarrollo de Algoritmos y Estructuras de Datos',
    org: 'Curso — Algoritmos II, Universidad',
    desc: 'Implementación de estructuras de datos avanzadas: árboles AVL, grafos con algoritmos de Dijkstra y Floyd-Warshall, tablas hash con manejo de colisiones. Análisis de complejidad temporal y espacial, comparativas de rendimiento entre implementaciones.',
    tags: ['C++', 'Algoritmos', 'Grafos', 'Árboles', 'Big-O'],
  },
  {
    date: '2022',
    title: 'Script de Hardening para Servidores Linux',
    org: 'Proyecto Personal',
    desc: 'Automatización de configuración segura para servidores Ubuntu/Debian. Configura firewall UFW con reglas personalizadas, fail2ban para protección de fuerza bruta, acceso SSH por clave pública, auditoría con Lynis e integridad de archivos con AIDE.',
    tags: ['Bash', 'Linux', 'UFW', 'fail2ban', 'Lynis'],
  },
  {
    date: '2021',
    title: 'Inicio de Carrera Universitaria',
    org: 'Universidad — Ingeniería de Sistemas',
    desc: 'Comienzo formal de estudios en Ingeniería de Sistemas. Fundamentos sólidos de programación en C y C++, lógica computacional, álgebra lineal, matemáticas discretas, introducción a algoritmos y primer acercamiento al desarrollo de software estructurado.',
    tags: ['C', 'C++', 'Algoritmos', 'Matemáticas', 'Lógica'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">03 — Experiencia</div>
        <h2 className="section-title">
          Trayectoria<br /><span>académica.</span>
        </h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item fade-in" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-title">{exp.title}</div>
            <div className="timeline-org">{exp.org}</div>
            <div className="timeline-desc">{exp.desc}</div>
            <div className="timeline-tags">
              {exp.tags.map((tag) => (
                <span className="timeline-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
