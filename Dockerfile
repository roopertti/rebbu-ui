FROM node:alpine

# Install Yarn and PM2 globally
RUN npm install -g pm2

# Set working directory and install deps
WORKDIR /usr/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

# Copy all other files and build
COPY . .
RUN npm run build

# Expose port and start
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]