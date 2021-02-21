FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . /app

RUN npm run lint

RUN npm run build

CMD [ "npm", "run", "serve" ]