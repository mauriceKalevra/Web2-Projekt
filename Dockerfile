FROM node:12

WORKDIR /app

COPY package*.json ./


RUN npm install express
RUN npm install better-sqlite3
RUN npm install morgan
RUN npm install sqlite3

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD [ "node", "app.js" ]

