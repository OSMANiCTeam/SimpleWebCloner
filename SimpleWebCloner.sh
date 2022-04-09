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
    echo "wget is not installed, please install it using 'sudo apt install wget'"
    echo "Exiting in 10 seconds..."
    sleep 10s
fi
