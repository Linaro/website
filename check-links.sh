#!/bin/bash
#
# Calls the link checker container to run the tool against the current directory.
#
# The script is slightly more complicated that it could otherwise be because the
# parameters to the tool can reference files and these will typically be in the
# directory above the current directory, so we have to volume-map the parent
# directory and tell the tool to check *this* directory.

DIRNAME=$(basename `pwd`)
PARENT=$(dirname $(readlink -f .))

if [ -z "$LINKCHECK" ]; then
  LINKCHECK=latest
fi

docker run \
  --cap-drop ALL \
  --rm \
  -t \
  -v $PARENT:/srv \
  linaroits/linkcheck:"$LINKCHECK" \
  -d "$DIRNAME" "$@"
