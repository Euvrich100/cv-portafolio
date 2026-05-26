import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">EA/</div>
        <p className="footer-text">
          © 2026 <span>Euvrich Didhier Alvarado Espinoza</span> — Ingeniería de Sistemas
        </p>
        <p className="footer-sub">Construido con React · Desplegado con Docker</p>
      </div>
    </footer>
  );
}
