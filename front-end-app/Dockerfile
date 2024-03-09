FROM nginx:alpine
LABEL org.opencontainers.image.source https://github.com/Beringar/codelab-cicd-TRP-beringar
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
