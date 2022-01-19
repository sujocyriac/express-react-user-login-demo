FROM node:latest as build
WORKDIR /app
COPY package.json .

# FROM build as react-ui
# RUN npm install
# COPY . .
# CMD [ "npm" , "start" ]

FROM build as web-build
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest as web-static
COPY --from=web-build /app/build /usr/share/nginx/html

FROM build as express-api
RUN npm install
COPY . .
CMD [ "npm" , "run", "start-api" ]