FROM node:12

WORKDIR /usr/src/app  

COPY package*.json ./

RUN npm install

COPY . .

# uncomment this line will override environment variable in .env file which is PORT = 8000
# so node will run on port 8002 
# ENV PORT=8002 

EXPOSE 8000

CMD ["npm", "start"]