# ================================
# STAGE 1: Build React App
# ================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar dependencias primero (cache de capas)
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copiar todo el código
COPY . .

# Build de producción
RUN npm run build

# ================================
# STAGE 2: Servidor Nginx
# ================================
FROM nginx:alpine

# Copiar build de React
COPY --from=builder /app/build /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
