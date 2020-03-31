FROM node:lts-alpine

ARG project_dir=/projects/
WORKDIR $project_dir

COPY package*.json ./
RUN npm install -g npm @vue/cli && \
    npm install
