FROM node:20-alpine
WORKDIR /src
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]
# Build the React app
RUN npm run build

# Stage 2: Serve the production build with Nginx
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx 
CMD ["nginx", "-g", "daemon off;"]
