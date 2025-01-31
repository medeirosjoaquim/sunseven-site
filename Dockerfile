FROM nginx:alpine

# Create SSL directories
RUN mkdir -p /etc/ssl/certs && mkdir -p /etc/ssl/private

# Copy SSL certificates (you'll need to provide these)
COPY ssl/sunseven.cc.crt /etc/ssl/certs/sunseven.cc.crt
COPY ssl/sunseven.cc.key /etc/ssl/private/sunseven.cc.key

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy site files
COPY site /usr/share/nginx/html
