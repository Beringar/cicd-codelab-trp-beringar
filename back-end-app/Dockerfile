FROM node:20-alpine
LABEL org.opencontainers.image.source https://github.com/beringar/codelab-cicd-trp-beringar
WORKDIR /usr/src/nest-app
COPY package*.json ./
# Install runtime dependecies (without dev/test dependecies)
RUN npm ci --omit=dev
COPY dist ./dist
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
