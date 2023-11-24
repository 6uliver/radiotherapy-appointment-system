FROM node:20.10
WORKDIR /app
COPY yarn.lock /app
COPY package.json /app
RUN yarn
CMD ["yarn","run","dev"]