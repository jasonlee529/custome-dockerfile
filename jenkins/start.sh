#!/bin/bash


docker build -t infisa/jenkins:v1 .
docker kill myjenkins|| true
docker rm myjenkins || true
docker run --name myjenkins -p 8080:8080 -ti -d -p 50000:50000 \
--mount source=jenkins,target=/var/jenkins_home \
--env JAVA_OPTS="-Djava.util.logging.config.file=/var/jenkins_home/log.properties"\
  infisa/jenkins:v1
