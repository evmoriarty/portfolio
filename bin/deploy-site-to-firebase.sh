#/usr/bin/env bash

########## COLORS ##########
RED="\e[0;31m"
GREEN="\e[0;32m"
YELLOW="\e[0;33m"
BLUE="\e[0;36m"
NC="\e[0m" # No Color

ERROR="[${RED}!${NC}]"
WARN="[${YELLOW}-${NC}]"
INFO="[${BLUE}*${NC}]"
SUCCESS="[${GREEN}+${NC}]"
############################

PROJECT_PATH=/d/workspace/portfolio/
FIREBASE_DEPLOY_PARENT_DIR=/d/workspace/firebase
FIREBASE_DEPLOY_PATH=${FIREBASE_DEPLOY_PARENT_DIR}/public/

pushd $PROJECT_PATH

echo -e "${INFO} Rebuilding site..."

bash ./bin/clean-site.sh
bash ./bin/build-site-prod.sh

if [[ $? -ne 0 ]]; then
    echo -e "${ERROR} Site build failed, fix errors above and try again"
    exit 1
fi

if [[ ! -d ${PROJECT_PATH}/_site/ ]]; then
    echo -e "${ERROR} Something weird happened because '${PROJECT_PATH}/_site/' does not exist"
    exit 1
fi

# Remove previous artifacts and copy the newly built site
rm -rf $FIREBASE_DEPLOY_PATH}/*
cp -R ${PROJECT_PATH}/_site/* ${FIREBASE_DEPLOY_PATH}

pushd ${FIREBASE_DEPLOY_PARENT_DIR}

echo -e "${INFO} Deploying site to Firebase..."

firebase deploy --only hosting

if [[ $? -ne 0 ]]; then
    echo -e "${ERROR} Something went wrong when attempting to deploy site to Firebase"
    exit 1
fi

echo -e "${SUCCESS} Successfully deployed site to https://evanmoriarty.io"
