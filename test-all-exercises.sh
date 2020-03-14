#!/usr/bin/env bash

set -e

for dir in *; do
  if [ -d "$dir" ]; then
    cd "$dir"
    npm i
    npm test
    cd ..
  fi
done