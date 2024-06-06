FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

# Serve the production build with Nginx
FROM nginx:1.26.1-alpine-perl

# Remove default nginx content (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx 
CMD ["nginx", "-g", "daemon off;"]
