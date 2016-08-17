#!/bin/bash
# Package stuff up for lambda

set -x
set -e

GOOS=linux GOARCH=amd64 go build -o myip myip.go
zip -r lambda.zip myip index.js
