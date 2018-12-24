FROM node:8
WORKDIR /usr/local/src/swapi-front-end
COPY . /usr/local/src/swapi-front-end
RUN npm install -g cnpm
RUN cnpm install
ENV PORT 80
ENV SERVER_ADDR http://localhost:9090
EXPOSE $PORT
CMD ["npm", "start"]