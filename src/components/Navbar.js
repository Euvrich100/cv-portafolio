import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#certs', label: 'Certs' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">EA/</div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleLink(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-badge">Ing. Sistemas</div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
