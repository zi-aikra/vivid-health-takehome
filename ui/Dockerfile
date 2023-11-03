# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli@16
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 4200 for the Angular CLI server
EXPOSE 4200

# Start the Angular CLI server with hot reloading enabled
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check", "--poll=2000"]
