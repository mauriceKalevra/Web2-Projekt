FROM node:12

WORKDIR /app

COPY package*.json ./

RUN cat cat schema.sql | sqlite3 immobilie.db

RUN npm install
RUN npm install express
RUN npm install better-sqlite3
RUN npm install morgan

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD [ "node", "app.js" ]

