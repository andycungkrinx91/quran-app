#! /bin/sh
# Network
docker network create node-network

# Build
docker-compose --compatibility -f docker-compose.yaml up -d --build --force-recreate --remove-orphans
