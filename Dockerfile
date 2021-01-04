FROM node:14-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
