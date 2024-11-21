# Use the official NGINX image as the base image
FROM nginx:alpine

# Copy the custom index.html to the default HTML directory of NGINX
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 so that we can access the NGINX container
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]

