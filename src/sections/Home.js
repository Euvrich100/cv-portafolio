import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import { 
 faCloudArrowDown,
} from '@fortawesome/free-solid-svg-icons';



const stats = [
  { num: '8+', label: 'Proyectos completados' },
  { num: '12+', label: 'Certificaciones' },
  { num: '5+', label: 'Tecnologías dominadas' },
];

export default function Home() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-inner">

        <div className="hero-top">
          {/* TEXTO IZQUIERDA */}
          <div className="hero-left">
            <div className="tag-line fade-in">Portafolio Profesional · 2026</div>

            <h1 className="hero-name fade-in fade-in-delay-1">
              Euvrich<br />Didhier<br /><span>Alvarado.</span>
            </h1>

            <p className="hero-role fade-in fade-in-delay-1">
              Ingeniero de Sistemas
            </p>

            <p className="hero-sub fade-in fade-in-delay-2">
              Apasionado por el desarrollo de software, redes,
              inteligencia artificial y arquitectura de sistemas modernos.
              Construyendo soluciones que importan.
            </p>

            <div className="hero-btns fade-in fade-in-delay-3">
              <button className="btn-primary" onClick={() => scrollTo('#projects')}>
                Ver Proyectos
              </button>
              <a href="/cv-euvrich-alvarado.pdf" download className="btn-outline">
                Descargar CV
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </a>
              <button className="btn-outline" onClick={() => scrollTo('#contact')}>
                Contactar
              </button>
            </div>
          </div>

          {/* FOTO DERECHA */}
          <div className="hero-right fade-in fade-in-delay-2">
            <div className="photo-wrapper">
              <div className="photo-ring" />
              <div className="photo-ring-2" />
              <img
                src="/foto-perfil.png"
                alt="Euvrich Didhier Alvarado Espinoza"
                className="hero-photo"
              />
              <div className="photo-badge">
                <span>Ing.</span>
                <span>Sistemas</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="hero-stats fade-in fade-in-delay-3">
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>SCROLL PARA EXPLORAR</span>
        </div>
      </div>
    </section>
  );
}
