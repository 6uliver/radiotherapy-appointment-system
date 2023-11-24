FROM node:20.10
WORKDIR /app
COPY yarn.lock /app
COPY package.json /app
RUN yarn

COPY . /app

CMD ["yarn","run","dev"]