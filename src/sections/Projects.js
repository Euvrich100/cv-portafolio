import React from 'react';
import './Projects.css';

const projects = [
  {
    tag: 'Docker · Full Stack',
    title: 'CV Portafolio Dockerizado',
    desc: 'Sitio web portafolio personal completamente containerizado con Docker. Frontend en React, backend en FastAPI, base de datos PostgreSQL. Desplegado con Docker Compose y GitHub Actions para integración y entrega continua.',
    tech: ['React', 'Docker', 'FastAPI', 'PostgreSQL', 'Nginx', 'GitHub Actions'],
    github: 'https://github.com/euvrichalvarado',
    demo: '#',
  },
  {
    tag: 'IA · Machine Learning',
    title: 'Clasificador de Imágenes con CNN',
    desc: 'Red neuronal convolucional para clasificación de imágenes con TensorFlow y Keras. Dataset de +5000 imágenes, precisión del 94% en validación. Interfaz web para predicciones en tiempo real con visualización de activaciones.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'OpenCV', 'NumPy'],
    github: 'https://github.com/euvrichalvarado',
  },
  {
    tag: 'Backend · API REST',
    title: 'Sistema de Gestión de Inventario',
    desc: 'API REST completa para gestión de inventario empresarial con CRUD, autenticación JWT, roles de usuario, reportes en PDF y exportación a Excel. Base de datos MySQL con procedimientos almacenados optimizados.',
    tech: ['Python', 'FastAPI', 'MySQL', 'JWT', 'Docker', 'ReportLab'],
    github: 'https://github.com/euvrichalvarado',
  },
  {
    tag: 'Redes · Cisco',
    title: 'Simulación Red Empresarial',
    desc: 'Diseño y configuración de red empresarial multi-sede en Cisco Packet Tracer. VLANs segmentadas, routing OSPF, NAT/PAT, ACLs de seguridad, VPN site-to-site y monitoreo con SNMP. Documentación técnica completa.',
    tech: ['Cisco IOS', 'OSPF', 'VLANs', 'VPN', 'SNMP', 'Packet Tracer'],
    github: 'https://github.com/euvrichalvarado',
  },
  {
    tag: 'Seguridad · Linux',
    title: 'Hardening Automatizado Linux',
    desc: 'Script de automatización para hardening de servidores Ubuntu/Debian. Configura UFW, fail2ban, SSH seguro, actualizaciones automáticas, auditoría con Lynis e integridad de archivos con AIDE. Listo para producción.',
    tech: ['Bash', 'Linux', 'UFW', 'fail2ban', 'Lynis', 'AIDE'],
    github: 'https://github.com/euvrichalvarado',
  },
  {
    tag: 'Web · Monitoreo',
    title: 'Dashboard de Monitoreo en Tiempo Real',
    desc: 'Dashboard interactivo para monitoreo de métricas del sistema. Visualización de CPU, RAM, disco y red con WebSockets. Alertas por email, almacenamiento histórico en InfluxDB y visualización con Grafana embebido.',
    tech: ['React', 'Python', 'WebSockets', 'InfluxDB', 'Grafana', 'Docker'],
    github: 'https://github.com/euvrichalvarado',
  },
  {
    tag: 'Algoritmos · C++',
    title: 'Biblioteca de Estructuras de Datos',
    desc: 'Implementación completa en C++ de estructuras de datos avanzadas: árboles AVL, grafos con Dijkstra y Floyd-Warshall, heaps, tablas hash. Benchmarks de rendimiento con visualización de comparativas.',
    tech: ['C++', 'STL', 'CMake', 'GoogleTest', 'Grafos', 'Árboles'],
    github: 'https://github.com/euvrichalvarado',
  },
  {
    tag: 'Cloud · Azure',
    title: 'Arquitectura Cloud en Azure',
    desc: 'Diseño e implementación de arquitectura cloud en Microsoft Azure: VMs, App Services, Azure SQL, Blob Storage, Azure Functions y configuración de redes virtuales (VNet) con políticas de seguridad y backups automáticos.',
    tech: ['Azure', 'ARM Templates', 'Azure CLI', 'VNet', 'Azure Functions'],
    github: 'https://github.com/euvrichalvarado',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">04 — Proyectos</div>
        <h2 className="section-title">
          Lo que<br /><span>construí.</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card fade-in" key={p.title}>
            <div className="project-tag">{p.tag}</div>
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span className="tech-pill" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                → GitHub
              </a>
              {p.demo && (
                <a href={p.demo} className="project-link">→ Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
