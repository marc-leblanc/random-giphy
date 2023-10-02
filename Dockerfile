FROM node:14

WORKDIR /app

COPY package.json ./
COPY server.js ./
COPY index.html ./
COPY style.css ./
COPY cowboylasso.jpg ./
RUN npm install

EXPOSE 80

CMD ["npm", "start"]
