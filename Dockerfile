FROM node:22-alpine AS build
WORKDIR /build
COPY app/package.json app/package-lock.json ./
RUN npm install
COPY app/ ./
RUN npm run build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist /usr/share/nginx/html
EXPOSE 80
