FROM node:16

WORKDIR /app

COPY package*.json .

RUN npm install

COPY .  .

RUN apt-get update && apt-get -y install mc

EXPOSE 3001

CMD npm run server
