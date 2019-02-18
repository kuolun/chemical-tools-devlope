#!/usr/bin/env sh

# abort on errors
set -e

# build (yarn每次會先把dist砍掉)
yarn run build

# navigate into the build output directory
cd dist

# 因為 dist folder會被砍掉，所以都要重新建立git repo
git init
git add -A
git commit -m 'initial commit'

git push -f git@github.com:kuolun/chemical-tools.git master

cd -