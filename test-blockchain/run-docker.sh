#!/usr/bin/env sh

docker run --name node-test -it -d -p 8545:8545 -v $(pwd):/nodedata p202io/node:v0.2.8 /bin/sh -c "cd /nodedata; sh start.sh"
