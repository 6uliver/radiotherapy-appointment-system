FROM node:20.10

WORKDIR /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

ENTRYPOINT ["/bin/sh", "-c", "npm run start:dev"]