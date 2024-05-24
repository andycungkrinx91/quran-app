<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/andycungkrinx91/quran-app)
  ![GitHub stars](https://img.shields.io/github/stars/andycungkrinx91/quran-app?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/andycungkrinx91/quran-app?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/AndyCungkrinx?style=social)](https://twitter.com/intent/follow?screen_name=AndyCungkrinx)

  <br />
  <br />

## :computer: Docker Installation

```bash
# List Docker file requirment
- Dockerfile
- docker-compose.yaml
- run.sh
- stop.sh
- .env
# Environment Declare
$ update .env (dev for development mode and start for production mode)
```
<br />

## :orange_book: Docker
```bash
# Build docker
$ docker build -t quran-app -f Dockerfile .

# :door: Run docker
$ docker run -dit --privileged --restart=always --name quran-app -p 80:3000 quran-app /bin/bash -c 'yarn start'
```

## :ledger: Docker compose
```bash
# Run on docker compose
$ ./run.sh 

# :door: Docker Compose
$ ./stop.sh
```

## :rocket: Browser access
<a href="http://localhost/"><strong>➥ http://localhost </strong></a>