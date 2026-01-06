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

if [[ ! -d .git/ ]]; then
    echo -e "${ERROR} $(pwd) is not the portfolio root directory"
    exit 1
fi

echo -e "${INFO} Cleaning and building site..."

bash ./bin/clean-site.sh
bash ./bin/build-site-prod.sh

if [[ $? -ne 0 ]]; then
    echo -e "${ERROR} Site build failed, fix errors above and try again"
    exit 1
fi

if [[ ! -d _site/ ]]; then
    echo -e "${ERROR} Something went wrong building the site because '/_site/' does not exist"
    exit 1
fi

echo -e "${INFO} Deploying site to Firebase..."

firebase deploy --only hosting

if [[ $? -ne 0 ]]; then
    echo -e "${ERROR} Something went wrong when deploying site to Firebase"
    exit 1
fi

echo -e "${SUCCESS} Successfully deployed site to https://evanmoriarty.io"
