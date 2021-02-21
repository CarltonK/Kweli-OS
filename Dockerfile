FROM node:12-alpine

WORKDIR /app

ENV PORT 8000

EXPOSE 8000

COPY package*.json ./
COPY . /app

RUN npm i

RUN npm run build

CMD [ "npm", "run", "serve" ]