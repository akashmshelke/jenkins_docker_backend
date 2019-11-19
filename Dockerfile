FROM 200.0.1.100:5000/node

RUN mkdir /code

WORKDIR /code

COPY . .

EXPOSE 4000

CMD node server.js
