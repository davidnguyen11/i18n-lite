#!/bin/bash

rimraf coverage/

echo "Running tests..."
nyc --reporter=lcov npm test

echo "Checking coverage..."
nyc check-coverage

nyc report