#!/bin/bash

export $(grep -v '^#' /app/.env | xargs)
node server/index.mjs