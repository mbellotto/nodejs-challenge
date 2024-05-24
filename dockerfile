FROM node:18

WORKDIR /app
COPY /package.json .
RUN npm install && npm install typescript -g

COPY / .

EXPOSE 3101

RUN tsc
CMD [ "npm", "start" ]