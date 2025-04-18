# Use Node 20.11 base image
FROM node:20.11.0-alpine

# Set working directory inside the container
WORKDIR /project

# Copy only package files first (for caching layer)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev", "--", "--host"]
