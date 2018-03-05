#!/bin/bash
<<<<<<< HEAD
docker run \
  --rm \
  -u root \
  -p 8082:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
=======

docker run \
  -u root \
  --rm \
  --name blueocean \
  -d \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
>>>>>>> 119be152b7d1cc96af00b59949c5945a89f660e4
  jenkinsci/blueocean
