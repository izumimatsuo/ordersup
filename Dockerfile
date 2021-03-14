FROM node:lts-alpine

ARG project_dir=/projects/
WORKDIR $project_dir

COPY package*.json ./
RUN apk update && npm install -g npm && npm install -g @vue/cli && npm install
