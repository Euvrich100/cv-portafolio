import React, { useState } from 'react';
import './Blog.css';

const articles = [
  {
    cat: 'Docker',
    title: '¿Por qué Docker cambió la forma de hacer software?',
    excerpt: 'La containerización resolvió uno de los problemas más frustrantes del desarrollo: "en mi máquina sí funciona". Docker encapsula toda la aplicación con sus dependencias, garantizando entornos idénticos de desarrollo a producción. Exploramos cómo funciona internamente, las diferencias con las VMs tradicionales y por qué se convirtió en el estándar de la industria.',
    date: '15 Mayo 2026',
    read: '8 min',
  },
  {
    cat: 'Inteligencia Artificial',
    title: 'Redes Neuronales explicadas desde cero',
    excerpt: 'Una guía visual e intuitiva para entender cómo funcionan las redes neuronales: desde el perceptrón de 1958 hasta las arquitecturas modernas como Transformers. Explicamos backpropagation, funciones de activación, overfitting y las técnicas de regularización más efectivas con ejemplos en Python y visualizaciones interactivas.',
    date: '02 Mayo 2026',
    read: '12 min',
  },
  {
    cat: 'Linux',
    title: 'Comandos de Linux que todo ingeniero debe dominar',
    excerpt: 'Lista definitiva de comandos Linux esenciales para administración de sistemas, scripting Bash, monitoreo de procesos y seguridad. Cubrimos desde comandos básicos de navegación hasta herramientas avanzadas como awk, sed, grep con expresiones regulares, gestión de procesos con systemd y automatización con cron jobs.',
    date: '18 Abril 2026',
    read: '10 min',
  },
  {
    cat: 'Arquitectura de Software',
    title: 'Microservicios vs Monolito: ¿cuándo usar cada uno?',
    excerpt: 'Análisis técnico profundo de ambas arquitecturas. Ventajas, desventajas reales, costos de infraestructura y cuándo tiene sentido migrar de un monolito a microservicios. Incluye casos de estudio de Netflix, Amazon y Shopify, con sus errores más costosos y las lecciones que dejaron para la industria.',
    date: '05 Abril 2026',
    read: '9 min',
  },
  {
    cat: 'Ciberseguridad',
    title: 'Seguridad informática: amenazas actuales y cómo protegerse',
    excerpt: 'Panorama actualizado 2026 de las principales amenazas de ciberseguridad: ransomware-as-a-service, phishing con IA generativa, ataques de supply chain y vulnerabilidades zero-day. Mejores prácticas de hardening, gestión de identidades, zero-trust architecture y respuesta a incidentes de seguridad.',
    date: '20 Marzo 2026',
    read: '11 min',
  },
  {
    cat: 'Redes',
    title: 'TCP/IP: el protocolo que conecta el mundo',
    excerpt: 'Exploración profunda de la pila TCP/IP: cómo viajan los paquetes a través de internet, qué hace cada capa del modelo OSI, handshake de tres vías, control de flujo y congestión. Analizamos con Wireshark trazas reales de tráfico HTTP, HTTPS y DNS para ver los protocolos en acción.',
    date: '10 Marzo 2026',
    read: '7 min',
  },
  {
    cat: 'Cloud Computing',
    title: 'Azure vs AWS vs GCP: ¿qué nube elegir en 2026?',
    excerpt: 'Comparativa exhaustiva entre los tres grandes proveedores cloud. Analizamos pricing, servicios únicos, ecosistema de certificaciones, latencia en Latinoamérica y casos de uso reales. Incluye calculadora de costos aproximados para arquitecturas típicas de startups y empresas medianas.',
    date: '01 Marzo 2026',
    read: '14 min',
  },
  {
    cat: 'Python',
    title: 'FastAPI: construye APIs REST de alto rendimiento',
    excerpt: 'Tutorial completo de FastAPI, el framework Python más rápido para APIs REST. Desde instalación hasta despliegue en producción. Cubrimos tipado con Pydantic, documentación automática con Swagger, autenticación JWT, manejo de archivos, WebSockets y containerización con Docker.',
    date: '15 Febrero 2026',
    read: '13 min',
  },
  {
    cat: 'DevOps',
    title: 'CI/CD con GitHub Actions: automatiza tu flujo de trabajo',
    excerpt: 'Guía práctica para configurar pipelines de integración y entrega continua con GitHub Actions. Automatiza tests, linting, builds de Docker, despliegues a servidores y notificaciones. Incluye templates listos para proyectos React + FastAPI + Docker con manejo de secretos y environments.',
    date: '01 Febrero 2026',
    read: '10 min',
  },
  {
    cat: 'Algoritmos',
    title: 'Complejidad algorítmica: domina Big-O para entrevistas',
    excerpt: 'Guía definitiva de análisis de complejidad temporal y espacial. Desde O(1) hasta O(n!) con ejemplos visuales y código en Python y C++. Problemas clásicos de entrevistas técnicas: sorting algorithms, búsqueda binaria, sliding window, two pointers y dynamic programming con soluciones optimizadas.',
    date: '15 Enero 2026',
    read: '16 min',
  },
];

const categories = ['Todos', 'Docker', 'Inteligencia Artificial', 'Linux', 'Redes', 'Ciberseguridad', 'Cloud Computing', 'Python', 'DevOps'];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? articles
    : articles.filter((a) => a.cat === activeFilter);

  return (
    <section id="blog" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">06 — Blog técnico</div>
        <h2 className="section-title">
          Ideas &<br /><span>conocimiento.</span>
        </h2>
      </div>

      <div className="blog-filters fade-in">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filtered.map((article, i) => (
          <div className="blog-card fade-in" key={i}>
            <div className="blog-cat">{article.cat}</div>
            <div className="blog-title">{article.title}</div>
            <div className="blog-excerpt">{article.excerpt}</div>
            <div className="blog-meta">
              <span>{article.date}</span>
              <span>{article.read} lectura</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
