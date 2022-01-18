FROM node:latest as build
WORKDIR /react-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /react-app/build /usr/share/nginx/html

FROM node:latest
WORKDIR /api-server
COPY ./api/package.json .
RUN npm install
COPY ./api/ .
CMD [ "npm" , "start" ]