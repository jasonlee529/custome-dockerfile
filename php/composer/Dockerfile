FROM 192.168.1.62:18443/hitalos/laravel
WORKDIR /var/www/
COPY . /var/www/
RUN composer config -g repo.packagist composer https://packagist.phpcomposer.com
RUN composer install