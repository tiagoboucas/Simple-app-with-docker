FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

EXPOSE 4000

CMD ["node", "app.js"]