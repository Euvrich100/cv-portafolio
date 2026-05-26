import React, { useState } from 'react';
import './Certifications.css';

const certs = [
  {
    org: 'GEG Corporation',
    name: 'Especialista en Reparación de Celulares y Tablets',
    year: '2024',
    code: 'C001-066019',
    hours: '220 horas académicas',
    img: '/certificados/cert-celulares.jpg',
    color: '#f97316',
  },
  {
    org: 'GEG Corporation',
    name: 'Especialista en Cámaras de Seguridad IP – IA y Alarmas',
    year: '2024',
    code: 'C001-066020',
    hours: '220 horas académicas',
    img: '/certificados/cert-camaras.jpg',
    color: '#f97316',
  },
  {
    org: 'GEG Corporation',
    name: 'Especialista en Ensamblaje, Mant. y Rep. de Computadoras',
    year: '2024',
    code: 'C001-066018',
    hours: '220 horas académicas',
    img: '/certificados/cert-computadoras.jpg',
    color: '#f97316',
  },
  {
    org: 'GEG Corporation',
    name: 'Especialista en Ensamblaje y Mant. y Rep. de Laptops',
    year: '2024',
    code: 'C001-066017',
    hours: '220 horas académicas',
    img: '/certificados/cert-laptops.jpg',
    color: '#f97316',
  },
  {
    org: 'TechForge Innovations',
    name: 'Certified Full Stack Development Expert',
    year: '2026',
    code: 'TFI-2026',
    hours: 'Python · Django · JS · Node.js · React · HTML5 · CSS3',
    img: '/certificados/cert-fullstack.png',
    color: '#c9a84c',
  },
  {
    org: 'NetCore Enterprise Solutions',
    name: 'Certified Enterprise Network Architect',
    year: '2026',
    code: 'NCE-2026',
    hours: 'Cisco Routing · IPv6 · Network Security · VPN · SDN',
    img: '/certificados/cert-network.png',
    color: '#3b82f6',
  },
];

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = (e) => { e.stopPropagation(); setLightbox((lightbox - 1 + certs.length) % certs.length); };
  const next = (e) => { e.stopPropagation(); setLightbox((lightbox + 1) % certs.length); };

  return (
    <section id="certs" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">05 — Certificaciones</div>
        <h2 className="section-title">
          Certificados<br /><span>reales.</span>
        </h2>
        <p className="certs-intro">
          Certificaciones verificadas emitidas por instituciones reconocidas. Haz clic en cualquier imagen para verla completa.
        </p>
      </div>

      <div className="certs-magazine">
        {certs.map((cert, i) => (
          <div className="cert-row fade-in" key={i}>
            {/* INFO */}
            <div className="cert-info">
              <div className="cert-org-badge" style={{ borderColor: cert.color, color: cert.color }}>
                {cert.org}
              </div>
              <h3 className="cert-title">{cert.name}</h3>
              <div className="cert-meta">
                <span className="cert-year-badge">{cert.year}</span>
                {cert.code && <span className="cert-code">Código: {cert.code}</span>}
              </div>
              <p className="cert-hours">{cert.hours}</p>
              <button
                className="cert-view-btn"
                onClick={() => open(i)}
                style={{ borderColor: cert.color, color: cert.color }}
              >
                Ver certificado completo →
              </button>
            </div>

            {/* IMAGEN GRANDE */}
            <div className="cert-img-wrapper" onClick={() => open(i)}>
              <img
                src={cert.img}
                alt={cert.name}
                className="cert-img"
                loading="lazy"
              />
              <div className="cert-img-overlay">
                <span>🔍 Ver completo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lb-close" onClick={close}>✕</button>
          <button className="lb-prev" onClick={prev}>‹</button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={certs[lightbox].img} alt={certs[lightbox].name} className="lb-img" />
            <div className="lb-caption">
              <span className="lb-org">{certs[lightbox].org}</span>
              <span className="lb-name">{certs[lightbox].name}</span>
            </div>
          </div>
          <button className="lb-next" onClick={next}>›</button>
        </div>
      )}
    </section>
  );
}
