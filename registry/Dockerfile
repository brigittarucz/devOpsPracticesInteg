FROM node:15.11.0-alpine3.13

RUN apk update && \
    apk upgrade 

RUN mkdir -p /usr/src/node-app

WORKDIR /usr/src/node-app

COPY . /usr/src/node-app

RUN npm install
RUN npm install -g eslint
RUN npm install -g mocha
RUN npm install -g chai

#test