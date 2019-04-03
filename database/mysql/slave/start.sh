#!/bin/bash

docker kill mysql-slave

docker rm mysql-slave

docker run --name mysql-slave -p 3307:3306 -v $PWD:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7