FROM node:19-alpine as builder
WORKDIR /client
# copy package.json into the container at /client
COPY package*.json /client/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY . /client/
# Build webpack artifacts
RUN npm run build

# docker build -t react-client .
