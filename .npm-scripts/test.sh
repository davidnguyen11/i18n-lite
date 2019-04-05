#!/bin/bash

TEST_COMMAND="mocha -r ts-node/register test/**/*.spec.ts"

exec $TEST_COMMAND

