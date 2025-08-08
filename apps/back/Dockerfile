# apps/back/Dockerfile

FROM node:18


# Copy just the server file
COPY apps/back/main.js .

# Install needed packages
COPY package.json package-lock.json ./
RUN npm install --force

EXPOSE 3000

CMD ["node", "main.js"]
