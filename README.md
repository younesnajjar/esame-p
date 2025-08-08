# Exams Management System

This project is a simple exams management system.


## Available Commands


### Docker

- **Run Entire Stack with Docker**
  ```bash
  docker compose up
  ```

This command starts both frontend and backend services using Docker. Make sure Docker and `docker-compose` are installed on your machine.

### Build and Serve

- **Build Frontend**
  ```bash
  npm run build:web
  ```
  Runs: `nx run web:build`

- **Start Frontend Locally**
  ```bash
  npm run start:web
  ```
  Runs: `nx serve web`

- **Start Backend Locally**
  ```bash
  npm run start:back
  ```
  Runs: `node apps/back/main.js`

### Development Tools

- **Run Storybook (UI Components)**
  ```bash
  npm run ui:storybook
  ```
  Runs: `nx run web-ui:storybook`
  <img width="1265" height="586" alt="Screenshot 2025-08-08 at 16 49 22" src="https://github.com/user-attachments/assets/206b4f27-0f95-4df3-93c4-e5a5e92002b0" />

- **Visualize Project Architecture**
  ```bash
  nx graph
  ```

This will open a graph showing the relationships between the apps and libraries in your workspace.
<img width="662" height="603" alt="Screenshot 2025-08-08 at 16 46 56" src="https://github.com/user-attachments/assets/7aa6e199-d553-4922-82b8-5c482a85f6a8" />
