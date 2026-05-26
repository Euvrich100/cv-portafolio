# 🚀 CV Portafolio — Euvrich Didhier Alvarado Espinoza
### Ingeniería de Sistemas | Portafolio Profesional 2025

---

## 🛠️ Tecnologías

- **Frontend**: React 18
- **Estilos**: CSS puro con variables (sin librerías externas)
- **Tipografía**: Google Fonts — Syne + Space Mono
- **Containerización**: Docker + Docker Compose
- **Servidor**: Nginx (producción)

---

## 📁 Estructura del proyecto

```
cv-euvrich/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   └── Footer.js / Footer.css
│   ├── sections/
│   │   ├── Home.js / Home.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Certifications.js / Certifications.css
│   │   ├── Blog.js / Blog.css
│   │   ├── AcademicTimeline.js / AcademicTimeline.css
│   │   ├── Social.js / Social.css
│   │   └── Contact.js / Contact.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
├── .gitignore
└── package.json
```

---

## ⚡ Instalación local (sin Docker)

```bash
# 1. Clonar el repositorio
git clone https://github.com/euvrichalvarado/cv-portafolio.git
cd cv-portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo
npm start
# Abre http://localhost:3000
```

---

## 🐳 Con Docker (modo producción)

```bash
# Construir y levantar
docker-compose up --build

# Abre http://localhost:80
```

---

## 📦 Secciones del CV

| # | Sección | Descripción |
|---|---------|-------------|
| 01 | Home | Presentación con estadísticas |
| 02 | Sobre mí | Historia, objetivos, datos personales |
| 03 | Skills | Stack técnico con barras animadas |
| 04 | Experiencia | Timeline de proyectos académicos |
| 05 | Proyectos | 8 proyectos con tecnologías y links |
| 06 | Certificaciones | 18 certificados verificables |
| 07 | Blog | 10 artículos técnicos con filtros |
| 08 | Timeline | Recorrido académico 2019-2025 |
| 09 | Redes sociales | Links a GitHub, LinkedIn, etc. |
| 10 | Contacto | Formulario funcional |

---

## 🌐 Deploy en GitHub Pages

```bash
npm install --save-dev gh-pages

# En package.json agregar:
# "homepage": "https://euvrichalvarado.github.io/cv-portafolio"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 📝 Licencia

MIT — Euvrich Didhier Alvarado Espinoza © 2025
