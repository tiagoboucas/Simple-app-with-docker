FROM node
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY . .
RUN npm install
COPY . .

CMD ["npm", "run", "start"]

EXPOSE 4000