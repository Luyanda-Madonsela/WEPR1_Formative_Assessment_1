
FROM node:17-alpine

WORKDIR /WEPR1_Formative_Assessment_1

COPY package.json . 
# Copy the package.json file before installing dependencies to leverage Docker's caching mechanism

RUN npm install
# Use RUN instead of && to properly execute the npm install command

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
