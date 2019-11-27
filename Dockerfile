FROM node:10

WORKDIR /code

COPY . .

EXPOSE 4000

CMD node server.js
