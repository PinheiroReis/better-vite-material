#!/bin/bash

set -e

DOCKER_USERNAME="webcorvus"
IMAGES=(
  "pinheiroreis/better-vite-template-api:latest"
  "pinheiroreis/better-vite-template-app:latest"
  "pinheiroreis/better-vite-template-db:latest"
  "pinheiroreis/better-vite-template-proxy:latest"
)

./scripts/start.sh

sleep 5

echo "Logging on Docker Hub..."
docker login

for IMAGE in "${IMAGES[@]}"; do
  echo "Publishing $IMAGE on Docker Hub..."
  docker push "$IMAGE"
done

echo "Proccess Finished!"
