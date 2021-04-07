FROM dennylsoncosta/appfacilita-docker-image-dev:php7.2
WORKDIR /var/www/html

# Install Packages
RUN apt-get update -y &&\
    apt-get upgrade -y &&\
    apt-get install git -y &&\
    apt-get install nano -y

RUN docker-php-ext-install bcmath
RUN apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt

# Configure nginx
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/includes/* /etc/nginx/includes/

# Configure PHP-FPM
COPY docker/php/php-fpm.conf /usr/local/etc/php-fpm.conf
COPY docker/php/php.ini /usr/local/etc/php/php.ini

# Config Entrypoint
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
COPY docker/entrypoint.conf /etc/supervisor/conf.d/
RUN chmod +x /usr/local/bin/entrypoint.sh