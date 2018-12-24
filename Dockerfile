FROM node:8
WORKDIR /usr/local/src/swapi-front-end
COPY . /usr/local/src/swapi-front-end
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
ENV PORT 80
ENV SERVER_ADDR http://starwars_server:9090
EXPOSE $PORT
CMD ["npm", "start"]