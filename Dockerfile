FROM node:12-stretch

WORKDIR /var/www/app

COPY ./package.json ./package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "start"]


