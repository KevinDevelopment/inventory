FROM node:20.10.0-alpine3.17
RUN apk --no-cache add \
    openssl
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
ARG CACHEBUST=1
RUN npm install
COPY --chown=node:node . .
EXPOSE 8888
CMD ["npm", "run", "dev"]
