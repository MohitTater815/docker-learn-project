# Dockerfile
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the app source
COPY . .

# Expose port
EXPOSE 4000

# Start the app
CMD ["node", "index.js"]
