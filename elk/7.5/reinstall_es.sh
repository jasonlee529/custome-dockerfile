#!/bin/bash
rm -rf elasticsearch-7.5.1-infisa.tar.gz
rm -rf elasticsearch-7.5.1-infisa
wget http://192.168.1.161/elasticsearch-7.5.1-infisa.tar.gz 
tar -zxvf elasticsearch-7.5.1-infisa.tar.gz
mkdir -p elasticsearch-data-log/logs
mkdir -p elasticsearch-data-log/data
ip=$(ifconfig eth0 | awk '/inet / {print $2}' | cut -f2 -d ":")
echo $ip
elasticsearch-7.5.1-infisa/bin/elasticsearch -d -Enode.name=node_$ip\
     -Enetwork.host=$ip