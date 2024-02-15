# FROM node:16.13
FROM node:latest

ENV PORT=3000

EXPOSE $PORT

WORKDIR /app

COPY . ./

RUN npm install

CMD node server.js
# CMD ["npm", "start"]
