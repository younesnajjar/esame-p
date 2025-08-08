# apps/web/Dockerfile

FROM node:18 as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --force

# Copy source code
COPY . .

# Build Angular app
RUN npm run build:web

# Serve using nginx
FROM nginx:alpine
COPY --from=builder /app/dist/apps/web/browser /usr/share/nginx/html
EXPOSE 80
