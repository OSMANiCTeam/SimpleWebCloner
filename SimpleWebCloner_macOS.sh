# OSMANiC SimpleWebCloner for macOS Copyright 2022
# Version 1.0.0
# This is free software, obtain a copy at https://github.com/OSMANiCTeam/SimpleWebCloner
# If you paid for this software, demand a refund

cd /
cd ~
cd Desktop
FILE=/usr/local/bin/wget
if [ -f "$FILE" ]; then
    echo Enter the website to save
read web_address
wget --mirror            \
     --convert-links     \
     --html-extension    \
     --wait=2            \
     -o log              \
     --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:99.0) Gecko/20100101 Firefox/99.0"	\
     $web_address
echo The website has been saved
echo Simple Web Cloner CLI tool by OSMANiC Team, powered by wget
echo Exiting in 10 seconds...
sleep 10s
else 
    echo Please install wget using the homebrew package manager
    echo Exiting in 10 seconds...
    sleep 10s
fi
