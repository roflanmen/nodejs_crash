FROM node:14.17.0-alpine3.13

WORKDIR /app

COPY package.json .
COPY index.js .

RUN npm install

EXPOSE 80

CMD ["node", "index.js"]