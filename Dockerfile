FROM node:18.17.1-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn add install
COPY . .
CMD ["yarn", "dev"]
