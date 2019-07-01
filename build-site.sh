#!/bin/bash

if [ -z "$JEKYLLSITEBUILD" ]; then
        export JEKYLLSITEBUILD=latest
fi

if [ -z "$JEKYLL_ENV" ]; then
	export JEKYLL_ENV=staging
fi
docker run \
  --cap-drop ALL \
  --rm \
  -it \
  -p 4000:4000 \
  -e JEKYLL_ACTION \
  -e JEKYLL_CONFIG \
  -e JEKYLL_ENV \
  -v /etc/passwd:/etc/passwd:ro \
  -v /etc/group:/etc/group:ro \
  -u "$(id -u)":"$(id -g)" \
  -v "$(pwd)":/srv/source \
  linaroits/jekyllsitebuild:"$JEKYLLSITEBUILD" \
  build-site.sh
