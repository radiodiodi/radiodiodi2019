FROM node

WORKDIR /app
EXPOSE 8080
EXPOSE 9090
ENV PORT=8080
ENV WS_PORT=9090
ENV HOST=0.0.0.0

COPY package.json package-lock.json ./
RUN npm ci
COPY src src
COPY resource resource
COPY .env .env
CMD ["npm", "start"]