#!/bin/bash
docker kill registry||true
docker rm registry || true
docker run -d \
    --rm \
  -p 5000:5000 \
  --name registry \
  --mount source=registry_v2,target=/var/lib/registry/\
  registry:2
