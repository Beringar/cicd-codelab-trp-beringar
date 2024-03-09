FROM node:20-alpine
LABEL org.opencontainers.image.source https://github.com/beringar/codelab-cicd-trp-beringar
WORKDIR /usr/src/nest-app
COPY dist ./dist
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
