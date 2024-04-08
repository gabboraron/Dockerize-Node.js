FROM node:21-alpine3.18

# create app directory

WORKDIR /app

#install app dependency

COPY package*.json ./

#npm install

RUN npm install

#COPY sourcecode 
COPY . .

CMD [ "npm", "start" ]