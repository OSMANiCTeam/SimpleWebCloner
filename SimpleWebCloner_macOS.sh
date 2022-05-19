# OSMANiC SimpleWebCloner for macOS Copyright 2022
# Version 1.0.2
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
     --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36"	\
     $web_address
echo The website has been saved
echo Simple Web Cloner CLI tool by OSMANiC Team, powered by wget
else 
    echo Please install wget using the homebrew package manager
fi
