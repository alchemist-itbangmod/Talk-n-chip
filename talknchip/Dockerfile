FROM node:8.10 as Builder

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install
COPY ./ .
RUN node ./node_modules/gatsby/dist/bin/gatsby.js build

FROM nginx:1.15-alpine

COPY --from=Builder /app /var/www/app
COPY ./default.conf /etc/nginx/conf.d/default.conf