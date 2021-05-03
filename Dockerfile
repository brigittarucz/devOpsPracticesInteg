FROM node:15.11.0-alpine3.13

RUN mkdir -p /usr/src/node-app
WORKDIR /usr/src/node-app

COPY . /usr/src/node-app

RUN npm install

# EXPOSE 3000

CMD ["npm", "start"]