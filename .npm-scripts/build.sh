#!/bin/bash

echo "Removing dist"
rimraf dist/

echo "Compiling..."
tsc

echo "Done!"
