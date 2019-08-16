#!/bin/bash

clear

echo "Deleting dist"

rimraf dist/

echo "Building Libraries"

npm run build:libs

echo "Now Publishing library"

cd dist/ng-xotb

npm publish
