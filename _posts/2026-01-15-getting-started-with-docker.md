---
layout: post
title: "Getting Started with Docker: A Practical Guide"
date: 2026-01-15
tags: [docker, devops, tutorial]
excerpt: "Learn the fundamentals of Docker and how to containerize your applications."
---

Docker has revolutionized how we develop, ship, and run applications. If you're new to containerization, this guide will help you get started.

## What is Docker?

Docker is a platform that uses containerization to package applications and their dependencies together. This ensures that your application runs consistently across different environments.

### Key Concepts

- **Image**: A blueprint for creating containers
- **Container**: A running instance of an image
- **Dockerfile**: Instructions for building an image
- **Registry**: A repository for storing images (like Docker Hub)

## Your First Dockerfile

Here's a simple Dockerfile for a Node.js application:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Let's break this down:

1. `FROM node:18-alpine` - Use Node.js 18 on Alpine Linux (lightweight)
2. `WORKDIR /app` - Set the working directory
3. `COPY package*.json ./` - Copy package files
4. `RUN npm install` - Install dependencies
5. `COPY . .` - Copy application code
6. `EXPOSE 3000` - Document which port the app uses
7. `CMD ["npm", "start"]` - Command to run the application

## Building and Running

Build your image:
```bash
docker build -t my-app .
```

Run a container:
```bash
docker run -p 3000:3000 my-app
```

## Docker Compose for Multi-Container Apps

For applications with multiple services, use Docker Compose:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://db:5432/myapp

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

Run with:
```bash
docker-compose up
```

## Best Practices

1. **Use official base images** - They're maintained and secure
2. **Minimize layers** - Combine RUN commands when possible
3. **Use .dockerignore** - Exclude unnecessary files
4. **Don't run as root** - Create a non-root user
5. **Use multi-stage builds** - Keep production images small

Example multi-stage build:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/index.js"]
```

## Conclusion

Docker simplifies deployment and ensures consistency across environments. Start with simple containers and gradually explore more advanced features like orchestration with Kubernetes.

Happy containerizing!
