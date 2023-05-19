FROM node:18-alpine
ENV TZ=America/Sao_Paulo
RUN mkdir -p /home/node/api-horus
WORKDIR /home/node/api-horus
COPY ./package.json ./
COPY ./src ./src

EXPOSE 3000

RUN npm install \
    && npm audit fix --force

CMD [ "node", "./src/index.js" ]