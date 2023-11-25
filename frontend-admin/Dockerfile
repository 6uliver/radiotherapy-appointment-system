FROM node:20.10
WORKDIR /app
COPY yarn.lock /app
COPY package.json /app
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

COPY . /app

CMD ["yarn","run","dev"]