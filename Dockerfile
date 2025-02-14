# Fetch the relavent node image from docker hub
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Copy the source code to the container
COPY . .

# Build the application
RUN npm run build

# Fetch the nginx image from docker hub
FROM nginx:alpine

# Copy the build files to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Default command to run when container starts
CMD ["nginx", "-g", "daemon off;"]
