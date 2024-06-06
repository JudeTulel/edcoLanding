FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .


# Build the React app
RUN npm run build

#Serve the production build with Nginx
FROM nginx:1.26.1-alpine-perl
# Remove default nginx
RUN rm -rf /usr/share/nginx/html/*
# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx 
CMD ["nginx", "-g", "daemon off;"]
