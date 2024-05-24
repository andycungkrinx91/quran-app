FROM node:20

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app
USER node
COPY --chown=node:node . .
RUN yarn install && yarn build

EXPOSE 3000