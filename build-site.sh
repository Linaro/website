#!/bin/bash

if [ -z "$JEKYLLSITEBUILD" ]; then
        export JEKYLLSITEBUILD=latest
fi

if [ -z "$JEKYLL_ENV" ]; then
	export JEKYLL_ENV=staging
fi
export JEKYLL_CONFIG="_config.yml,_config-$JEKYLL_ENV.yml"

if [ ! -d "$(pwd)/.gems" ]; then
        mkdir "$(pwd)/.gems"
fi

docker run --rm -it -p 4000:4000 -e JEKYLL_ACTION -e JEKYLL_CONFIG -e JEKYLL_ENV \
        -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro -u "$(id -u)":"$(id -g)" -v "$HOME":/srv/home \
        -v "$(pwd)/.gems:/gems" -v "$(pwd)":/srv/source linaroits/jekyllsitebuild:"$JEKYLLSITEBUILD" build-site.sh
