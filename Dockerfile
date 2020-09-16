FROM node:9.3.0-alpine

WORKDIR /app

ADD . /app 8001:8000 -it