# SWAPI-Front-End
[![Build Status](https://travis-ci.com/Go-GraphQL-Group/front-end.svg?branch=master)](https://travis-ci.com/Go-GraphQL-Group/front-end?branch=master)
> A SPA for browsing swapi(star wars api)!
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

# run unit tests
$ npm run unit

# run e2e tests
$ npm run e2e

# run all tests
$ npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Docker Image
```bash
# build docker image
$ docker build -t swapi-front-end .

# run docker image
$ docker run -d -p 80:80 --name swapi-spa -e SERVER_ADDR='http://149.28.147.63:9090' swapi-front-end

# or you can also run the graphql service on other address, see https://github.com/Go-GraphQL-Group/GraphQL-Service

# open browser and see http://localhost:80 after a few seconds

# see if it works
$ docker ps 

# show logs 
$ docker logs swapi-spa

# stop container
$ docker stop swapi-spa

# start container after stop
$ docker start swapi-spa

# remove the running container
$ docker rm swapi-spa 

```

## Deployed Service
http://149.28.147.63:9090  

### username: 
admin

### password: 
password 
