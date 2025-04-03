FROM node:20-alpine
WORKDIR .
COPY . .
RUN npm install
RUN npm i pm2 -g
CMD [ "pm2-runtime" ,"app.js" ]