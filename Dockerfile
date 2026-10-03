FROM node:22-alpine AS app-dev
WORKDIR /build
COPY app-dev/package.json app-dev/package-lock.json ./
RUN npm install
COPY app-dev/ ./
RUN npm run build

FROM node:22-alpine AS cinema
WORKDIR /build
COPY cinema/package.json cinema/package-lock.json ./
RUN npm install
COPY cinema/ ./
RUN npm run build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=app-dev /build/dist /usr/share/nginx/html/app-dev
COPY --from=cinema /build/dist /usr/share/nginx/html/cinema
EXPOSE 80
