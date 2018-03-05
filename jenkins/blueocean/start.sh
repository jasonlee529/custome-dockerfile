#!/bin/bash

docker run \
  -u root \
  --rm \
  --name blueocean \
  -d \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
