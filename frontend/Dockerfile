FROM node
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY . .
RUN yarn install
COPY . .

RUN yarn build

# start app
CMD ["yarn", "start"]

EXPOSE 3000