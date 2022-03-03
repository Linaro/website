#!/bin/bash

if [ -z "$JEKYLLSITEBUILD" ]; then
  JEKYLLSITEBUILD=latest
fi
if [ -z "$JEKYLL_ENV" ]; then
  if [ -f "_config-staging.yml" ]; then
    export JEKYLL_ENV=staging
  else
    export JEKYLL_ENV=production
  fi
fi
if [ -z "$JEKYLL_PORT" ]; then
  JEKYLL_PORT=4000
fi
if [ "$JEKYLL_ACTION" = "serve" ]; then
  PORTS="-p $JEKYLL_PORT:4000"
else
  PORTS=""
fi

# Are we running interactively or via Bamboo?
if [ -t 1 ]; then
  INTER="-i"
else
  INTER=""
fi

# For the Linaro website, it is currently *NECESSARY*
# to skip the Jekyll Doctor phase of the build process.
# Jekyll Doctor falls over because of one of the gems
# being used by the site.

docker run \
  --cap-drop ALL \
  --rm \
  -t \
  $INTER \
  $PORTS \
  -e JEKYLL_ACTION \
  -e JEKYLL_ENV \
  -e SKIP_JEKYLL_DOCTOR="true" \
  -v /etc/passwd:/etc/passwd:ro \
  -v /etc/group:/etc/group:ro \
  -u "$(id -u)":"$(id -g)" \
  -v "$(pwd)":/srv/source \
  linaroits/jekyllsitebuild:"$JEKYLLSITEBUILD" \
  build-site.sh "$@"
