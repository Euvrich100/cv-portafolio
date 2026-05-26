import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faFacebook,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import { 
  faAt,
} from '@fortawesome/free-solid-svg-icons';




const socials = [
  {
    name: 'GitHub',
    handle: '@euvrichalvarado',
    desc: 'Repositorios con proyectos universitarios, prácticas de programación, desarrollo web y trabajos personales enfocados en tecnología y software.',
    url: 'https://github.com/Euvrich100',
    icon: faGithub,
    color: '#f0f6fc',
  },
  {
    name: 'LinkedIn',
    handle: 'Euvrich Alvarado Espinoza',
    desc: 'Perfil profesional con experiencia académica, habilidades técnicas, certificaciones y trayectoria en ingeniería de sistemas.',
    url: 'https://www.linkedin.com/in/euvrich-didhier-alvarado-espinoza-32428b363/',
    icon: faLinkedin,
    color: '#348feb',
  },
  {
    name: 'Email',
    handle: 'euvrichalvaradoespinoza@gmail.com',
    desc: 'Contacto directo para colaboraciones, oportunidades profesionales, proyectos tecnológicos o consultas generales.',
    url: 'euvrichalvaradoespinoza@gmail.com',
    icon: faAt,
    color: '#ff0000',
  },
  {
    name: 'WhatsApp',
    handle: 'Euvrich Alvarado Espinoza',
    desc: 'Comunicación rápida para consultas, coordinación de proyectos, soporte técnico o contacto profesional.',
    url: 'https://wa.me/51918506646',
    icon: faWhatsapp, 
    color: '#0ff15a',
  },
  {
    name: 'Facebook',
    handle: 'Euvrich Alvarado Espinoza',
    desc: 'Espacio donde comparto contenido relacionado con tecnología, experiencias académicas y actividades personales.',
    url: 'https://www.facebook.com/euvrich.alvarado',
    icon: faFacebook,
    color: '#0059ff',
  },
  {
    name: 'Discord',
    handle: 'Leftinho',
    desc: 'Servidor y contacto para conversar sobre programación, videojuegos, tecnología y proyectos colaborativos.',
    url: 'https://discord.gg/7FTRxYu5S',
    icon: faDiscord,
    color: '#8600ae',
  },
 
];

export default function Social() {
  return (
    <section id="social" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">08 — Redes sociales</div>
        <h2 className="section-title">
          Conéctate<br /><span>conmigo.</span>
        </h2>
      </div>

      <div className="social-grid">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            className="social-card fade-in"
            target="_blank"
            rel="noreferrer"
          >
           <div className="social-icon">
  <FontAwesomeIcon icon={s.icon} />
</div>
            <div className="social-name">{s.name}</div>
            <div className="social-handle" style={{ color: s.color }}>{s.handle}</div>
            <div className="social-desc">{s.desc}</div>
            <div className="social-arrow">→</div>
          </a>
        ))}
      </div>
    </section>
  );
}
