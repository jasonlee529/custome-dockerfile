FROM 192.168.1.62:18443/php:7
#COPY ./sources.list /etc/apt/sources.list
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring
WORKDIR /app
COPY . /app
RUN composer config -g repo.packagist composer https://packagist.phpcomposer.com
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8181
EXPOSE 8181