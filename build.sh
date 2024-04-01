#!/bin/bash

PS3="Choose building env: "
envs=("dev" "prod")
version=v`date +%Y%m%d%H%M%S`


select env in "${envs[@]}"; do
  case $env in
    "prod")
      build_command=build
      version=$version"-prod"
      copy_command="cp -f .env.production .output/.env"
      
      break;
      ;;
    "dev")
      version=$version"-dev"
      build_command=build
      copy_command="cp -f .env.dev .output/.env"
      break;
      ;;
  esac
done

echo "Building..."
echo "Image version: "$version

npm config set registry https://registry.npmmirror.com
yarn
yarn $build_command
eval $copy_command
docker build --platform=linux/amd64 -t package:$version .