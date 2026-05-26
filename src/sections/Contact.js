import React, { useState } from 'react';
import './Contact.css';

const info = [
  { label: 'Email', value: 'euvrich.alvarado@email.com' },
  { label: 'Ubicación', value: 'Perú — Disponible remoto' },
  { label: 'Disponibilidad', value: 'Prácticas & proyectos 2026' },
  { label: 'Respuesta', value: 'Dentro de 24 horas' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="fade-in">
        <div className="section-label">09 — Contacto</div>
        <h2 className="section-title">
          Hablemos<br /><span>juntos.</span>
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info fade-in">
          <p className="contact-intro">
            ¿Tienes un proyecto en mente, una propuesta de colaboración o simplemente
            quieres conectar? Estoy siempre abierto a nuevas oportunidades, proyectos
            interesantes y conversaciones sobre tecnología.
          </p>
          <p className="contact-intro">
            Me encuentro actualmente buscando oportunidades de prácticas profesionales
            y proyectos freelance en desarrollo de software, DevOps o inteligencia artificial.
          </p>
          <div className="contact-items">
            {info.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-dot" />
                <div>
                  <div className="contact-item-label">{item.label}</div>
                  <div className="contact-item-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper fade-in fade-in-delay-1">
          {sent ? (
            <div className="sent-msg">
              <div className="sent-icon">✓</div>
              <div className="sent-title">¡Mensaje enviado!</div>
              <div className="sent-sub">Te responderé en las próximas 24 horas. ¡Gracias por contactarme!</div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Asunto"
                value={form.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                value={form.message}
                onChange={handleChange}
                rows={6}
                required
              />
              <button type="submit" className="btn-primary">
                Enviar mensaje →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
