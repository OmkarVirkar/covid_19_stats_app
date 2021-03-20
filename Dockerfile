# Step 1
FROM node:10-alpine as build-step
RUN mkdir /covid19-app
WORKDIR /covid19-app
COPY package.json /covid19-app
RUN npm install
COPY . /covid19-app
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /covid19-app/build /usr/share/nginx/html