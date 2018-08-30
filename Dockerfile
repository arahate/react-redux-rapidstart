# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:latest

# The base node image sets a very verbose log level.
#ENV NODE_ENV production

RUN mkdir /var/www
WORKDIR /var/www

COPY package-lock.json /var/www
COPY package.json /var/www


COPY . /var/www
RUN npm install 

# Tell Docker about the port we'll run on.

EXPOSE 3001
EXPOSE 3002

# Build for production.
ENTRYPOINT ["npm", "run", "build"]

