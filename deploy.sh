#!/bin/bash

polymer build || { echo 'Polymer Build failed'; exit 1; }

DIST_DIR="`pwd`/build/final"
FILES=


rm -rf "$DIST_DIR"
mkdir "$DIST_DIR"
cd build/bundled

cp --parents -t "$DIST_DIR" \
images/* \
src/al-app/al-app.html \
CNAME \
index.html \
manifest.json \
service-worker.js \
sw-precache-config.js