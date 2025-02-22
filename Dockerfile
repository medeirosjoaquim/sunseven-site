FROM nginx:alpine

# Install envsubst
RUN apk add --no-cache bash

# Copy nginx configuration template
COPY nginx.conf /etc/nginx/nginx.conf.template

# Copy site files
COPY site /usr/share/nginx/html

# Use environment variables in nginx conf
CMD ["/bin/bash", "-c", "envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
