FROM node:15.11.0-alpine3.13

RUN apk update && \
    apk upgrade 

RUN mkdir -p /usr/src/node-app

WORKDIR /usr/src/node-app

COPY . /usr/src/node-app