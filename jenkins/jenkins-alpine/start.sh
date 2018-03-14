#!/bin/bash

docker run -d -u root --name jenkins --rm \
    -p 8085:8080 -p 50000:50000 \
    -v jenkins_alpine_home:/var/jenkins_home \
     -v /var/run/docker.sock:/var/run/docker.sock \
    jenkins/jenkins
