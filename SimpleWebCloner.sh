# OSMANiC SimpleWebCloner Copyright 2022
# Version 1.1
# This is free software, obtain a copy at https://github.com/OSMANiCTeam/SimpleWebCloner
# If you paid for this software, demand a refund
FILE=/usr/bin/wget
if [ -f "$FILE" ]; then
    echo Enter the website to save
read varname
wget --mirror            \
     --convert-links     \
     --html-extension    \
     --wait=2            \
     -o log              \
     $varname
echo The website has been saved
echo Simple Web Cloner CLI tool by OSMANiC Team, powered by wget
echo Exiting in 10 seconds...
sleep 10s
else 
    echo wget is not installed, installing it now
    sudo apt install wget
    echo wget has been installed, please re-run the script
    echo Exiting in 10 seconds...
    sleep 10s
fi
