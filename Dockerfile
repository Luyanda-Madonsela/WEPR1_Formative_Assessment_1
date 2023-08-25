FROM node:17-alpine

WORKDIR /WEPR1_Formative_Assessment_1

COPY package.json . && \
    npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
