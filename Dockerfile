FROM node:20-alpine

WORKDIR /home/app

COPY ./app/package*.json .

RUN npm install

COPY ./app/server.js .

EXPOSE 9000

CMD [ "node", "server.js" ]